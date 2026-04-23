/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty, Topic } from "../types";
import { QUESTION_BANK } from "../data/questions";
import { validateAndFixHydrocarbonQuestions } from "../utils/hydrocarbonValidator";
import { validateAndFixDaiCuongQuestions } from "../utils/inorganicValidator";
import { validateAndFixDanXuatQuestions } from "../utils/derivativeValidator";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `Bạn là một chuyên gia soạn câu hỏi trắc nghiệm Hóa học lớp 11 theo chương trình GDPT 2018 Việt Nam (Sách Kết nối tri thức).
Nhiệm vụ của bạn là tạo ra các câu hỏi trắc nghiệm chất lượng cao, chính xác về mặt khoa học.

PHẠM VI KIẾN THỨC THEO CHỦ ĐỀ:
1. dai-cuong: Sự điện li, Axit-Bazơ, pH, Nitơ-Photpho và hợp chất, Cần bằng hóa học.
2. hydrocarbon: Alkane, Alkene, Alkyne, Arene (Benzene và alkylbenzene).
3. dan-xuat: Dẫn xuất halogen, Alcohol, Phenol, Hợp chất carbonyl và Carboxylic acid.

QUY TẮC VIẾT CÔNG THỨC HÓA HỌC:
- Sử dụng notation đơn giản: H2O, CH4, C2H5OH.
- Dùng dấu trừ "−" (U+2212) cho liên kết đơn.
- Dùng dấu _ cho chỉ số dưới nếu phức tạp: CH_3COOH.
- Dùng dấu ^ cho chỉ số trên (ion): Na^+, Cl^-.
- Tuyệt đối không dùng LaTeX ($...$).

Phân loại độ khó:
- easy: Nhận biết, danh pháp đơn giản, công thức.
- medium: Thông hiểu, phản ứng đặc trưng, tính toán cơ bản.
- hard: Vận dụng cao, bài tập tổng hợp, cơ chế, xác định CTPT.`;

interface QuestionWithId extends Question {
  id: string;
}

export class QuizService {
  private static instance: QuizService;
  private questions: QuestionWithId[] = [];
  private sessionPool: QuestionWithId[] = [];

  private constructor() {
    this.resetBank();
  }

  public static getInstance(): QuizService {
    if (!QuizService.instance) {
      QuizService.instance = new QuizService();
    }
    return QuizService.instance;
  }

  public resetBank() {
    let baseQuestions = [...QUESTION_BANK];
    
    // Auto-fix formatting on initialization
    const dcResult = validateAndFixDaiCuongQuestions(baseQuestions);
    baseQuestions = dcResult.fixedQuestions;
    
    const hcResult = validateAndFixHydrocarbonQuestions(baseQuestions);
    baseQuestions = hcResult.fixedQuestions;

    const dvResult = validateAndFixDanXuatQuestions(baseQuestions);
    baseQuestions = dvResult.fixedQuestions;

    this.questions = baseQuestions.map((q, i) => ({
      ...q,
      id: `local-${i}`
    }));
  }

  public initSessionPool(topic: Topic, difficulty: Difficulty) {
    if (difficulty === 'total') {
      this.sessionPool = this.questions.filter(q => q.topic === topic);
    } else {
      this.sessionPool = this.questions.filter(q => q.topic === topic && q.level === difficulty);
    }
  }

  public getQuestionsCount(topic: Topic, difficulty: Difficulty): number {
    if (difficulty === 'total') {
      return this.questions.filter(q => q.topic === topic).length;
    }
    return this.questions.filter(q => q.topic === topic && q.level === difficulty).length;
  }

  public async generateQuestions(topic: Topic, difficulty: Difficulty, count: number = 10): Promise<Question[]> {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      return []; 
    }

    try {
      const topicDesc = {
        'dai-cuong': 'Đại cương vô cơ 11 (Điện li, pH, Nitơ, Photpho)',
        'hydrocarbon': 'Hydrocarbon (Alkane, Alkene, Alkyne, Arene)',
        'dan-xuat': 'Dẫn xuất Hydrocarbon (Halogen, Alcohol, Phenol, Carbonyl, Acid)'
      };

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Hãy tạo thêm ${count} câu hỏi trắc nghiệm Hóa học 11.
        CHỦ ĐỀ: ${topicDesc[topic]}.
        MỨC ĐỘ: ${difficulty}.
        Đảm bảo các câu hỏi chính xác theo SGK Kết nối tri thức. Dùng dấu trừ "−" cho liên kết.`,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  minItems: 4,
                  maxItems: 4
                },
                answer: { type: Type.INTEGER },
                explanation: { type: Type.STRING }
              },
              required: ["question", "options", "answer", "explanation"]
            }
          }
        }
      });

      const textOutput = response.text;
      if (!textOutput) throw new Error("Empty response from Gemini");

      const newQuestions = JSON.parse(textOutput) as any[];
      const formatted = newQuestions.map((q, idx) => ({
        ...q,
        topic,
        level: difficulty,
        id: `ai-${topic}-${difficulty}-${Date.now()}-${idx}`
      })) as QuestionWithId[];

      this.questions.push(...formatted);
      return formatted;
    } catch (error) {
      console.error("Error generating questions:", error);
      return [];
    }
  }

  public getQuestion(topic: Topic, difficulty: Difficulty, targetLevel?: 'easy' | 'medium' | 'hard'): Question | null {
    // Priority: use session pool
    if (this.sessionPool.length === 0) {
        this.initSessionPool(topic, difficulty);
    }

    if (this.sessionPool.length === 0) return null;
    
    // If targetLevel is provided (for 'total' mode), filter pool
    let poolToUse = this.sessionPool;
    if (targetLevel) {
        poolToUse = this.sessionPool.filter(q => q.level === targetLevel);
        // If specific level pool is empty, try to refill or just fallback
        if (poolToUse.length === 0) {
            // Fallback: reload from main bank just for this level if possible
            const additional = this.questions.filter(q => q.topic === topic && q.level === targetLevel);
            if (additional.length > 0) {
                // Add to sessionPool but avoid duplicates if possible? 
                // Actually sessionPool is already tracking what was used. 
                // For simplicity, if pool is empty for this level, return null or fallback to random
                return null; 
            }
            return null;
        }
    }
    
    const randomIndex = Math.floor(Math.random() * poolToUse.length);
    const chosen = poolToUse[randomIndex];
    
    // Remove from main session pool to prevent duplicates across any calls
    const mainIdx = this.sessionPool.findIndex(q => q.id === chosen.id);
    if (mainIdx !== -1) {
        this.sessionPool.splice(mainIdx, 1);
    }
    
    return chosen;
  }

  /**
   * Automatically generate more questions based on templates for backup expansion
   */
  public generateMoreQuestions(topic: Topic, difficulty: Difficulty, count: number): QuestionWithId[] {
    const templates = {
      'dai-cuong': [
        "Tính pH của dung dịch có nồng độ [H+] = {val} M?",
        "Chất nào là {type} mạnh trong các chất sau?",
        "Ammonia có tính chất nào đặc trưng?"
      ],
      'hydrocarbon': [
        "Công thức phân tử của {name} là gì?",
        "Phản ứng thế giữa {name} và khí Clo cần điều kiện gì?",
        "Chất nào làm mất màu nước Brom?"
      ],
      'dan-xuat': [
        "Nhóm chức của {name} là gì?",
        "Phản ứng giữa {name} và Na kim loại giải phóng khí gì?",
        "Nhiệt độ sôi của {name} so với hydrocarbon cùng phân tử khối là?"
      ]
    };

    const newQuestions: QuestionWithId[] = Array.from({ length: count }, (_, i) => ({
      topic,
      level: difficulty,
      question: templates[topic][i % templates[topic].length].replace('{val}', '10^-2').replace('{type}', 'axit').replace('{name}', 'ethanol'),
      options: ["Đáp án 1", "Đáp án 2", "Đáp án 3", "Đáp án 4"],
      answer: 0,
      explanation: "Giải thích tự động cho câu hỏi mở rộng.",
      id: `generated-${topic}-${difficulty}-${Date.now()}-${i}`
    }));

    this.questions.push(...newQuestions);
    return newQuestions;
  }
}
