import { Question } from "../types";

/**
 * Validates and fixes formatting for "dan-xuat" (Derivative) questions.
 * Focuses on:
 * - Alcohol: C2H5OH, CH3OH, Glycerol C3H5(OH)3
 * - Phenol: C6H5OH
 * - Aldehyde: HCHO, CH3CHO
 * - Ketone: CH3COCH3
 * - Acid: CH3COOH, HCOOH
 * - Formatting: <sub>, <sup>, arrows (→, ⇌), bond (−)
 * - Ionic charges: CH3COO−
 */
export const validateAndFixDanXuatQuestions = (questions: Question[]): { 
  fixedQuestions: Question[], 
  stats: { total: number, fixed: number, corrections: number } 
} => {
  let fixedCount = 0;
  let totalCorrections = 0;

  const fixedQuestions = questions.map((q) => {
    if (q.topic !== "dan-xuat") return q;

    let isFixed = false;
    let currentCorrections = 0;

    const fixFormatting = (text: string): string => {
      let original = text;

      // 1. Common chemical formulas for derivatives
      // Alcohols & Phenols
      text = text.replace(/\bCH3OH\b/g, "CH<sub>3</sub>OH");
      text = text.replace(/\bC2H5OH\b/g, "C<sub>2</sub>H<sub>5</sub>OH");
      text = text.replace(/\bC3H7OH\b/g, "C<sub>3</sub>H<sub>7</sub>OH");
      text = text.replace(/\bC4H9OH\b/g, "C<sub>4</sub>H<sub>9</sub>OH");
      text = text.replace(/\bC6H5OH\b/g, "C<sub>6</sub>H<sub>5</sub>OH");
      text = text.replace(/\bC3H5\(OH\)3\b/g, "C<sub>3</sub>H<sub>5</sub>(OH)<sub>3</sub>");
      text = text.replace(/\bHO-CH2-CH2-OH\b/g, "HO−CH<sub>2</sub>−CH<sub>2</sub>−OH");
      text = text.replace(/\bCH2\(OH\)-CH\(OH\)-CH2\(OH\)\b/g, "CH<sub>2</sub>(OH)−CH(OH)−CH<sub>2</sub>(OH)");

      // Aldehydes & Ketones
      text = text.replace(/\bCH3CHO\b/g, "CH<sub>3</sub>CHO");
      text = text.replace(/\bC2H5CHO\b/g, "C<sub>2</sub>H<sub>5</sub>CHO");
      text = text.replace(/\bCH3COCH3\b/g, "CH<sub>3</sub>COCH<sub>3</sub>");
      text = text.replace(/>C=O\b/g, "&gt;C=O");

      // Acids
      text = text.replace(/\bCH3COOH\b/g, "CH<sub>3</sub>COOH");
      text = text.replace(/\bC2H5COOH\b/g, "C<sub>2</sub>H<sub>5</sub>COOH");
      text = text.replace(/\bHOOC-COOH\b/g, "HOOC−COOH");
      text = text.replace(/\bCH3COONa\b/g, "CH<sub>3</sub>COONa");
      text = text.replace(/\bCH3COONH4\b/g, "CH<sub>3</sub>COONH<sub>4</sub>");
      text = text.replace(/\bHCOONH4\b/g, "HCOONH<sub>4</sub>");
      text = text.replace(/\b(NH4)2CO3\b/g, "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>");

      // Halogen derivatives
      text = text.replace(/\bCH3Cl\b/g, "CH<sub>3</sub>Cl");
      text = text.replace(/\bCH2Cl2\b/g, "CH<sub>2</sub>Cl<sub>2</sub>");
      text = text.replace(/\bCHCl3\b/g, "CHCl<sub>3</sub>");
      text = text.replace(/\bCCl4\b/g, "CCl<sub>4</sub>");
      text = text.replace(/\bC2H5Cl\b/g, "C<sub>2</sub>H<sub>5</sub>Cl");
      text = text.replace(/\bC2H5Br\b/g, "C<sub>2</sub>H<sub>5</sub>Br");
      text = text.replace(/\bCH2=CHCl\b/g, "CH<sub>2</sub>=CHCl");
      text = text.replace(/\bC6H5Cl\b/g, "C<sub>6</sub>H<sub>5</sub>Cl");
      text = text.replace(/\bC6H6Cl6\b/g, "C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>");

      // Shared molecules
      text = text.replace(/\bC3H6O\b/g, "C<sub>3</sub>H<sub>6</sub>O");
      text = text.replace(/\bC2H4O2\b/g, "C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>");
      text = text.replace(/\bC3H6O2\b/g, "C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>");
      text = text.replace(/\bC4H8O2\b/g, "C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>");
      text = text.replace(/\bC6H12O6\b/g, "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>");
      text = text.replace(/\bAgNO3\b/g, "AgNO<sub>3</sub>");
      text = text.replace(/\bNH3\b/g, "NH<sub>3</sub>");
      text = text.replace(/\bH2O\b/g, "H<sub>2</sub>O");
      text = text.replace(/\bCO2\b/g, "CO<sub>2</sub>");
      text = text.replace(/\bH2\b/g, "H<sub>2</sub>");
      text = text.replace(/\bNaOH\b/g, "NaOH");
      text = text.replace(/\bCu\(OH\)2\b/g, "Cu(OH)<sub>2</sub>");
      text = text.replace(/\bCu2O\b/g, "Cu<sub>2</sub>O");
      text = text.replace(/\bKMnO4\b/g, "KMnO<sub>4</sub>");
      text = text.replace(/\bH2SO4\b/g, "H<sub>2</sub>SO<sub>4</sub>");
      text = text.replace(/\bCaCO3\b/g, "CaCO<sub>3</sub>");
      text = text.replace(/\bNaHCO3\b/g, "NaHCO<sub>3</sub>");

      // 2. Ions & Charges
      text = text.replace(/\bCH3COO-\b/g, "CH<sub>3</sub>COO<sup>−</sup>");
      text = text.replace(/\bOH-\b/g, "OH<sup>−</sup>");
      text = text.replace(/\bH\+\b/g, "H<sup>+</sup>");
      text = text.replace(/\bCu2\+\b/g, "Cu<sup>2+</sup>");
      text = text.replace(/\bAg\+\b/g, "Ag<sup>+</sup>");

      // 3. Arrows & Symbols
      text = text.replace(/->/g, "→");
      text = text.replace(/<=>/g, "⇌");
      
      // 4. Case sensitivity fix for common mistake nCO2, nH2O
      text = text.replace(/\bnCO2\b/g, "n<sub>CO<sub>2</sub></sub>");
      text = text.replace(/\bnH2O\b/g, "n<sub>H<sub>2</sub>O</sub>");
      text = text.replace(/\bnAg\b/g, "n<sub>Ag</sub>");

      // 5. Special Patterns
      text = text.replace(/ -OH\b/g, " −OH");
      text = text.replace(/ -CHO\b/g, " −CHO");
      text = text.replace(/ -COOH\b/g, " −COOH");
      text = text.replace(/CH3-CH2/g, "CH<sub>3</sub>−CH<sub>2</sub>");

      if (original !== text) {
        currentCorrections++;
      }
      return text;
    };

    const fixedQuestion = fixFormatting(q.question);
    const fixedOptions = q.options.map(opt => fixFormatting(opt)) as [string, string, string, string];
    const fixedExplanation = fixFormatting(q.explanation);

    if (fixedQuestion !== q.question || JSON.stringify(fixedOptions) !== JSON.stringify(q.options) || fixedExplanation !== q.explanation) {
      isFixed = true;
      fixedCount++;
      totalCorrections += currentCorrections;
      return {
        ...q,
        question: fixedQuestion,
        options: fixedOptions,
        explanation: fixedExplanation
      };
    }

    return q;
  });

  return {
    fixedQuestions,
    stats: {
      total: questions.length,
      fixed: fixedCount,
      corrections: totalCorrections
    }
  };
};
