/**
 * Utility to format chemical formulas (subscripts, superscripts, arrows)
 */
export function formatChemicalFormula(text: string) {
  if (!text) return "";
  
  let formatted = text
    .replace(/\$\$/g, '')
    .replace(/\$/g, '')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\uparrow/g, '↑')
    .replace(/\\downarrow/g, '↓')
    .replace(/->/g, '→')
    .replace(/<-/g, '←')
    .replace(/<=>/g, '⇌')
    .replace(/⇌/g, ' ⇌ ') 
    .replace(/→/g, ' → ')
    .replace(/\s+/g, ' ');

  // 1. Process explicit LaTeX style subscripts/superscripts if present
  formatted = formatted
    .replace(/\^\{(.*?)\}/g, '<sup>$1</sup>')
    .replace(/\^([0-9+\-]{1,3})/g, '<sup>$1</sup>')
    .replace(/_\{(.*?)\}/g, '<sub>$1</sub>')
    .replace(/_([0-9]{1,2})/g, '<sub>$1</sub>');

  // 1.1. Pre-process triple bonds and other symbols if written as text
  formatted = formatted
    .replace(/===/g, '≡')
    .replace(/---/g, '−');

  // 2. Auto-format standard chemical formulas like H2O (Avoid already tagged parts)
  // Catch patterns like H2O, C2H5OH, Ca(OH)2
  formatted = formatted.replace(/([A-Z][a-z]?|[\)\]])(\d+)(?![^<]*>)/g, '$1<sub>$2</sub>');

  // 3. Process common ion charges (Hardened logic)
  // Catch NH4+, SO4 2-, H+, Cl-
  formatted = formatted.replace(/([A-Za-z]|<\/sub>|[\)\]])(\d*[\+\-])(?!\s+[A-Z0-9\(\[])/g, '$1<sup>$2</sup>');

  // 4. Handle electron configurations
  formatted = formatted.replace(/(\d[spdf])(\d+)(?![^<]*>)/g, '$1<sup>$2</sup>');

  // 5. Final specialized fixes
  formatted = fixChemicalNotation(formatted);

  return formatted;
}

export const sanitizeChemicalFormula = formatChemicalFormula;

export function fixChemicalNotation(str: string) {
  if (!str) return "";

  let result = str;

  // Sửa dấu liên kết: - -> − (U+2212)
  // Chỉ sửa khi đứng giữa các ký tự hóa học, không phải trong thẻ HTML
  result = result.replace(/([A-Za-z0-9\)\]}_])-(?=[A-Za-z0-9\(\[{])(?![^<]*>)/g, '$1−');
  
  // Xử lý dấu + phản ứng bị lọt vào sup
  result = result.replace(/<sup>\s*\+\s*<\/sup>/g, ' + ');
  // Đảm bảo dấu + phản ứng có khoảng cách và không bị superscript
  result = result.replace(/([A-Za-z0-9\)\]>])\+(\s*[A-Z0-9\(\[])/g, '$1 + $2');
  
  // Xử lý dấu - điện tích trong sup (dùng dấu chuẩn −)
  result = result.replace(/<sup>(.*)-<\/sup>/g, '<sup>$1−</sup>');

  // Chuẩn hóa khoảng trắng
  result = result.replace(/\s{2,}/g, ' ');

  return result.trim();
}

/**
 * Legacy support for fixChemicalHyphen
 */
export function fixChemicalHyphen(str: string) {
  return fixChemicalNotation(str);
}

/**
 * Utility to parse basic markdown and chemical formulas to HTML
 */
export function parseMarkdownAndChemical(text: string) {
  if (!text) return "";
  
  const formatted = formatChemicalFormula(text);
  
  return formatted
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

/**
 * Utility to join class names (standard shadcn utility)
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
