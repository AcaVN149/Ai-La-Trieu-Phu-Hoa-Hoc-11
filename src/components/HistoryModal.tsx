/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Calendar, User, Trophy, Clock, Info, CheckCircle, XCircle } from "lucide-react";
import { GameRecord } from "../types";
import { historyService } from "../services/historyService";
import { parseMarkdownAndChemical } from "../lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function HistoryModal({ isOpen, onClose }: Props) {
  const [history, setHistory] = useState<GameRecord[]>(historyService.getHistory());
  const [selectedRecord, setSelectedRecord] = useState<GameRecord | null>(null);

  const handleClearHistory = () => {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử chơi không?")) {
      historyService.clearHistory();
      setHistory([]);
    }
  };

  const handleClose = () => {
    setSelectedRecord(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-slate-900 border-2 border-blue-500/30 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500 rounded-xl">
              <Trophy className="w-6 h-6 text-slate-900" />
            </div>
            <h2 className="text-2xl font-black text-white italic uppercase tracking-tight">
              Lịch sử các lần chơi
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold"
                title="Xóa lịch sử"
              >
                <Trash2 className="w-5 h-5" />
                <span className="hidden md:inline uppercase">Xóa lịch sử</span>
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/10 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-x-auto p-4 md:p-6 scrollbar-hide">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-4 py-20">
              <div className="p-6 bg-slate-800/50 rounded-full">
                <Trophy className="w-16 h-16 opacity-20" />
              </div>
              <p className="text-xl font-bold italic">Chưa có lần chơi nào được ghi lại</p>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-blue-300/60 uppercase text-[10px] tracking-[0.2em] font-black">
                    <th className="px-4 py-2">STT</th>
                    <th className="px-4 py-2">Thời gian</th>
                    <th className="px-4 py-2">Tên - Lớp</th>
                    <th className="px-4 py-2 text-center">Mức độ</th>
                    <th className="px-4 py-2">Số câu đúng</th>
                    <th className="px-4 py-2">Tiền thưởng</th>
                    <th className="px-4 py-2">TG chơi</th>
                    <th className="px-4 py-2 text-center">Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((record, index) => (
                    <motion.tr
                      key={record.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-slate-800/40 hover:bg-blue-600/20 group transition-all cursor-pointer rounded-xl overflow-hidden"
                      onClick={() => setSelectedRecord(record)}
                    >
                      <td className="px-4 py-4 rounded-l-xl font-mono text-blue-400">
                        {(index + 1).toString().padStart(2, '0')}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-white font-bold">{record.date.split(' ')[1]}</span>
                          <span className="text-slate-500 text-[10px]">{record.date.split(' ')[0]}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-white font-black uppercase text-sm tracking-tight">{record.playerName}</span>
                          <span className="text-blue-400 text-[10px] font-bold">{record.playerClass}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter shadow-sm transition-all ${
                          record.gameMode === "Nhận biết" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                          record.gameMode === "Thông hiểu" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                          "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        }`}>
                          {record.gameMode}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${record.wrongQuestion === "Không có" ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500'}`} />
                          <span className="text-white font-black text-lg">{record.correctAnswers}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-yellow-400 font-black text-lg italic">
                        {record.prizeMoney} <span className="text-[10px] not-italic">VNĐ</span>
                      </td>
                      <td className="px-4 py-4 text-blue-200 font-mono text-sm">
                        {record.timeSpent}
                      </td>
                      <td className="px-4 py-4 rounded-r-xl text-center">
                        <div className="flex justify-center">
                           <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                              <Info className="w-4 h-4" />
                           </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>

      {/* Detail Popup */}
      <AnimatePresence>
        {selectedRecord && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecord(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 border-2 border-yellow-500/30 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col p-8 gap-6"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Chi tiết ván chơi</h3>
                  <p className="text-blue-400 text-sm font-bold">{selectedRecord.date} • {selectedRecord.playerName}</p>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-2 hover:bg-white/10 text-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                 <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 space-y-1 text-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Mức độ</span>
                    <p className="text-sm font-black text-white italic uppercase">{selectedRecord.gameMode}</p>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 space-y-1 text-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Tiền thưởng</span>
                    <p className="text-lg font-black text-yellow-400 italic">{selectedRecord.prizeMoney} VNĐ</p>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 space-y-1 text-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Số câu đúng</span>
                    <p className="text-xl font-black text-blue-400">{selectedRecord.correctAnswers}</p>
                 </div>
              </div>

              {selectedRecord.wrongQuestion !== "Không có" ? (
                <div className="space-y-4">
                   <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center gap-2 text-red-400">
                         <XCircle className="w-5 h-5" />
                         <span className="font-black uppercase italic text-sm">Câu hỏi trắc trở</span>
                      </div>
                      <p 
                        className="text-white font-bold leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: parseMarkdownAndChemical(selectedRecord.wrongQuestion || "") }}
                      />
                      
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-red-500/20 p-3 rounded-xl border border-red-500/30">
                            <span className="block text-[8px] uppercase font-black text-red-300 mb-1">Bạn chọn</span>
                            <span className="text-white font-black">{selectedRecord.wrongAnswerChosen}</span>
                         </div>
                         <div className="bg-green-500/20 p-3 rounded-xl border border-green-500/30">
                            <span className="block text-[8px] uppercase font-black text-green-300 mb-1">Đáp án đúng</span>
                            <span className="text-white font-black">{selectedRecord.correctAnswer}</span>
                         </div>
                      </div>
                   </div>

                   {selectedRecord.explanation && (
                     <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl space-y-2">
                        <div className="flex items-center gap-2 text-blue-400">
                           <CheckCircle className="w-5 h-5" />
                           <span className="font-black uppercase italic text-sm">Giải thích của chuyên gia</span>
                        </div>
                        <p 
                          className="text-blue-100 text-sm italic leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: parseMarkdownAndChemical(selectedRecord.explanation) }}
                        />
                     </div>
                   )}
                </div>
              ) : (
                <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center space-y-2">
                   <Trophy className="w-12 h-12 text-green-500 mx-auto" />
                   <h4 className="text-xl font-black text-white italic uppercase">Chiến thắng rực rỡ!</h4>
                   <p className="text-green-400/80 text-sm">Bạn đã không trả lời sai bất kỳ câu hỏi nào trong ván này.</p>
                </div>
              )}

              <button
                onClick={() => setSelectedRecord(null)}
                className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl transition-all uppercase tracking-widest text-xs"
              >
                Đóng chi tiết
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
