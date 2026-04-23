/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Clock, MessageSquare, Brain } from "lucide-react";
import { Question, LifelineType } from "../../types";
import { geminiService } from "../../services/geminiService";
import { parseMarkdownAndChemical } from "../../lib/utils";

interface ModalProps {
  question: Question;
  onClose: (used?: boolean) => void;
}

export function PhoneModal({ question, onClose }: ModalProps) {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTyping, setIsTyping] = useState(false);
  const [pos, setPos] = useState({ x: window.innerWidth > 768 ? window.innerWidth - 450 : 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPerson && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
             clearInterval(timer);
             onClose(true);
             return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedPerson, timeLeft]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPos({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping || !selectedPerson) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    const response = await geminiService.phoneAFriend(selectedPerson, question, userMsg, messages);
    
    setMessages(prev => [...prev, { role: "model", text: response }]);
    setIsTyping(false);
  };

  const people = [
    { name: "Ba", icon: "👨" },
    { name: "Mẹ", icon: "👩" },
    { name: "Anh/Chị", icon: "👫" },
    { name: "Người Giám Hộ", icon: "🏠" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="draggable-phone-modal max-h-[500px]"
      style={{ 
        left: window.innerWidth > 768 ? pos.x : '50%',
        top: window.innerWidth > 768 ? pos.y : '50%',
        transform: window.innerWidth > 768 ? 'none' : 'translate(-50%, -50%)',
        margin: 0
      }}
    >
      <div 
        onMouseDown={handleMouseDown}
        className="phone-header p-4 border-b border-white/10 flex justify-between items-center bg-blue-900/40 rounded-t-[1.3rem]"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-blue-600 rounded-lg">
              <Clock className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-white uppercase tracking-tight">
            {selectedPerson ? `Gọi cho ${selectedPerson}` : "Gọi điện thoại"}
          </span>
          <span className="text-yellow-400 font-mono font-bold text-sm ml-2">
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </span>
        </div>
        <button onClick={() => onClose(true)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col min-h-0 bg-slate-900 overflow-hidden rounded-b-[1.3rem]">
        {!selectedPerson ? (
          <div className="p-6 space-y-4 text-center">
             <div className="space-y-1">
                <h3 className="text-xl font-black text-white">CHỌN NGƯỜI THÂN</h3>
             </div>
             <div className="grid grid-cols-2 gap-3">
                {people.map(p => (
                   <button
                    key={p.name}
                    onClick={() => setSelectedPerson(p.name)}
                    className="flex flex-col items-center gap-2 p-4 bg-slate-800 hover:bg-blue-800 border-2 border-transparent hover:border-blue-400 rounded-xl transition-all group"
                   >
                     <span className="text-3xl group-hover:scale-110 transition-transform">{p.icon}</span>
                     <span className="font-bold text-white uppercase text-[10px] tracking-tight">{p.name}</span>
                   </button>
                ))}
             </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
               {messages.length === 0 && (
                  <div className="text-center py-6 space-y-2">
                    <MessageSquare className="w-10 h-10 text-blue-500/30 mx-auto" />
                    <p className="text-blue-400 text-xs italic">Đặt câu hỏi cho {selectedPerson}...</p>
                  </div>
               )}
               {messages.map((m, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                 >
                    <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-blue-100 rounded-tl-none border border-white/5'}`}>
                        {m.role === 'model' ? (
                            <span dangerouslySetInnerHTML={{ __html: parseMarkdownAndChemical(m.text) }} />
                        ) : (
                            m.text
                        )}
                    </div>
                 </motion.div>
               ))}
               {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 px-3 py-2 rounded-xl rounded-tl-none flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
               )}
               <div ref={chatEndRef} />
            </div>
            <div className="p-3 bg-slate-950/30 border-t border-white/5 flex gap-2">
               <input 
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                 placeholder="Nhập tin nhắn..."
                 className="flex-1 bg-slate-800 border border-white/10 rounded-full px-4 py-2 outline-none focus:border-blue-500 transition-colors text-white text-sm"
               />
               <button 
                 onClick={handleSendMessage}
                 disabled={!input.trim() || isTyping}
                 className="w-10 h-10 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-full flex items-center justify-center transition-all shadow-lg shadow-blue-500/20"
               >
                 <Send className="w-4 h-4 text-white" />
               </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function AudienceModal({ question, onClose }: ModalProps) {
  const [stats, setStats] = useState<number[]>([]);

  useEffect(() => {
    // 90% correct, 7% split between two wrong (3.5% and 3.5%), 3% for the last wrong.
    const result = [0, 0, 0, 0];
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== question.answer);
    const shuffledWrongs = [...wrongIndices].sort(() => Math.random() - 0.5);

    result[question.answer] = 90;
    result[shuffledWrongs[0]] = 3.5;
    result[shuffledWrongs[1]] = 3.5;
    result[shuffledWrongs[2]] = 3;

    setStats(result);
  }, [question]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
    >
      <div className="bg-slate-900 border-2 border-blue-500/30 rounded-3xl w-full max-w-md p-8 shadow-2xl space-y-8 text-center relative overflow-hidden">
        <div className="space-y-2 relative z-10">
            <h3 className="text-3xl font-black text-white italic">HỎI Ý KIẾN KHÁN GIẢ</h3>
            <p className="text-blue-300">Khán giả đang đưa ra nhận định của mình...</p>
        </div>

        <div className="space-y-6 relative z-10">
            {stats.map((val, i) => (
               <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end text-sm font-bold uppercase tracking-widest px-1">
                    <span className="text-blue-300">Phương án {String.fromCharCode(65 + i)}</span>
                    <span className="text-yellow-400 font-mono">{val}%</span>
                  </div>
                  <div className="h-6 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5 ring-4 ring-blue-500/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${val}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                      className={`h-full ${i === question.answer ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-blue-700 to-blue-500'} relative`}
                    >
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
                    </motion.div>
                  </div>
               </div>
            ))}
        </div>

        <button 
            onClick={() => onClose(true)}
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black rounded-xl transition-all relative z-10"
        >
            XÁC NHẬN
        </button>

        {/* Decorative background pulses */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/5 blur-[100px] rounded-full" />
      </div>
    </motion.div>
  );
}

export function ExpertModal({ question, onClose }: ModalProps) {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertAdvice = async () => {
      setLoading(true);
      const res = await geminiService.askTheExpert(question);
      setAdvice(res);
      setLoading(false);
    };
    fetchExpertAdvice();
  }, [question]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
    >
      <div className="bg-slate-900 border-2 border-blue-500/30 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
        <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-2xl flex items-center justify-center border-4 border-yellow-500/30 shadow-xl overflow-hidden shrink-0">
               <div className="text-6xl">🧠</div>
            </div>
            <div className="space-y-1">
                <h3 className="text-2xl font-black text-white italic leading-tight uppercase">Nhà Thông Thái</h3>
                <span className="px-2 py-0.5 bg-yellow-500 text-slate-900 text-[10px] font-black rounded uppercase">Giáo sư Hóa Học</span>
            </div>
        </div>

        <div className="relative">
            <div className="wise-man-content">
                {loading ? (
                    <div className="space-y-4">
                        <div className="h-4 bg-slate-800 rounded w-full animate-pulse" />
                        <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse" />
                        <div className="h-4 bg-slate-800 rounded w-5/6 animate-pulse" />
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-blue-100 italic"
                        dangerouslySetInnerHTML={{ __html: `"${parseMarkdownAndChemical(advice)}"` }}
                    />
                )}
            </div>
        </div>

        <button 
            onClick={() => onClose(true)}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
            CẢM ƠN NHÀ THÔNG THÁI
        </button>
      </div>
    </motion.div>
  );
}
