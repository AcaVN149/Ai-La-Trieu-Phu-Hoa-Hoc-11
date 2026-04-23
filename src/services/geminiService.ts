/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

// Note: Accessing GEMINI_API_KEY from process.env as per AI Studio environment
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export class GeminiService {
  private static instance: GeminiService;

  private constructor() {}

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  /**
   * Roleplay as a family member for "Phone a Friend" lifeline.
   */
  public async phoneAFriend(
    relation: string,
    question: Question,
    userMessage: string,
    chatHistory: { role: "user" | "model"; text: string }[]
  ): Promise<string> {
    const systemPrompt = `Bạn đóng vai là ${relation} của một học sinh đang chơi trò chơi "Ai Là Triệu Phú". 
Người chơi đang gặp khó khăn với câu hỏi hóa học này: "${question.question}".
Các lựa chọn là: 
A: ${question.options[0]}
B: ${question.options[1]}
C: ${question.options[2]}
D: ${question.options[3]}

Bạn cần trả lời tin nhắn của học sinh bằng văn phong thân mật, phù hợp với vai trò ${relation}.
Yêu cầu:
1. Gợi ý đáp án nhưng ĐỪNG khẳng định chắc chắn 100%. 
2. Tỷ lệ bạn gợi ý đúng là khoảng 75%. (Xác suất may rủi).
3. Sử dụng kiến thức hóa học để giải thích một cách đời thường hoặc theo cách bạn nhớ.
4. Trả lời ngắn gọn, chân thực (khoảng 2-3 câu).
5. QUY TẮC VIẾT CÔNG THỨC HÓA HỌC: Sử dụng notation đơn giản như H2O, NH3. Nếu có ion, dùng ^ (VD: Na^+, NH_4^+).

Người chơi hỏi: "${userMessage}"`;

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: systemPrompt,
        }
      });

      // We should include history if available
      const history = chatHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            ...history,
            { role: "user", parts: [{ text: userMessage }] }
        ],
        config: {
           systemInstruction: systemPrompt
        }
      });

      return response.text || "Xin lỗi, đường truyền hơi kém, mình chưa nghe rõ câu hỏi...";
    } catch (error) {
      console.error("Gemini Phone a Friend error:", error);
      return "Ba mẹ đang bận chút, nhưng hình như là câu C hay B gì đó... Con thử xem sao.";
    }
  }

  /**
   * Roleplay as a Wise Man for "Ask the Expert" lifeline.
   */
  public async askTheExpert(question: Question): Promise<string> {
    const correctOption = String.fromCharCode(65 + question.answer);
    const systemPrompt = `Bạn là một Nhà Thông Thái, chuyên gia về Hóa Học. 
Bạn đang trợ giúp người chơi trong "Ai Là Triệu Phú".
Câu hỏi: "${question.question}"
Lựa chọn: 
A: ${question.options[0]}
B: ${question.options[1]}
C: ${question.options[2]}
D: ${question.options[3]}

Nhiệm vụ:
1. Giới thiệu ngắn gọn (1 câu) về chủ đề hóa học liên quan.
2. Đưa ra lời khuyên về đáp án đúng (tỷ lệ chính xác 100%). Lời khuyên nên mang tính dẫn dắt suy luận thay vì chỉ nói thẳng đáp án.
3. Giải thích lý do ngắn gọn dựa trên kiến thức hóa học.
4. Văn phong uyên bác, trang trọng nhưng dễ hiểu.
5. QUY TẮC VIẾT CÔNG THỨC HÓA HỌC: Sử dụng notation đơn giản (H2O, NH3). Nếu có ion/chỉ số phức tạp, dùng ^ và _ (VD: Na^+, NH_4^+). Tuyệt đối không dùng LaTeX ($...$).

Đáp án đúng là ${correctOption}. Hãy hướng người chơi chọn đáp án này.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Hãy giúp tôi trả lời câu hỏi này.",
        config: {
          systemInstruction: systemPrompt,
        }
      });

      return response.text || "Theo kiến thức của ta, bạn nên xem xét kỹ đáp án liên quan đến bản chất của phản ứng...";
    } catch (error) {
      console.error("Gemini Ask the Expert error:", error);
      return "Chủ đề này liên quan đến cấu tạo nguyên tử. Hãy chọn đáp án phù hợp với quy tắc bền vững nhất.";
    }
  }
}

export const geminiService = GeminiService.getInstance();
