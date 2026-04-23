import { Question } from '../types';

/**
 * Utility to validate and fix Dai Cuong (Inorganic Chemistry) questions formatting.
 * Rules:
 * 1. Subscripts for numbers in chemical formulas (H2O -> H<sub>2</sub>O)
 * 2. Superscripts for charges (NH4+ -> NH<sub>4</sub><sup>+</sup>)
 * 3. Standardized arrows (→, ⇌)
 * 4. Standardized minus sign (− U+2212)
 * 5. Up/Down arrows (↑, ↓)
 */

export const validateAndFixDaiCuongQuestions = (questions: Question[]): { 
  fixedQuestions: Question[], 
  stats: { total: number, fixed: number, corrections: number } 
} => {
  let fixedCount = 0;
  let totalCorrections = 0;

  const fixedQuestions = questions.map(q => {
    if (q.topic !== 'dai-cuong') return q;

    let isFixed = false;
    let currentCorrections = 0;

    const fixText = (text: string): string => {
      let newText = text;

      // 1. Fix common chemical formulas
      const commonFormulas = [
        "NH3", "NH4Cl", "NH4NO3", "NH4HCO3", "(NH4)2SO4", "NH4NO2",
        "HNO3", "HNO2", "H2SO4", "H3PO4", "H2CO3", "HClO4", "HClO", "H2S",
        "P2O5", "P2O3", "NO2", "N2O", "NO", "N2", "H2", "O2", "Cl2", "Br2", "I2", "F2",
        "NaOH", "KOH", "Ba(OH)2", "Ca(OH)2", "Al(OH)3", "Cu(OH)2", "Fe(OH)3", "Mg(OH)2",
        "Na2CO3", "NaHCO3", "K2CO3", "KHCO3", "CaCO3", "Ca(HCO3)2", "BaCO3", "MgCO3",
        "Na2SO4", "K2SO4", "BaSO4", "CaSO4", "MgSO4", "Al2(SO4)3", "CuSO4", "FeSO4", "Fe2(SO4)3",
        "Na3PO4", "Na2HPO4", "NaH2PO4", "Ca3(PO4)2", "Ca(H2PO4)2", "CaHPO4", "Ag3PO4", "H2PO4", "HPO4", "PO4",
        "NaNO3", "KNO3", "AgNO3", "Ba(NO3)2", "Cu(NO3)2", "Mg(NO3)2", "Al(NO3)3", "Fe(NO3)2", "Fe(NO3)3",
        "NaCl", "KCl", "BaCl2", "CaCl2", "MgCl2", "AlCl3", "FeCl3", "FeCl2", "CuCl2", "AgCl", "NH4Cl",
        "P4", "P2", "S8", "O3", "CO2", "CO", "SO2", "SO3", "CuO", "Fe2O3", "Fe3O4", "Al2O3", "CaO", "MgO", "Li2O"
      ];

      // Sort by length descending to avoid partial replacements (e.g., NH4 before NH3 if they overlapped, though these don't)
      commonFormulas.sort((a, b) => b.length - a.length);

      commonFormulas.forEach(formula => {
        const escaped = formula.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Match only if not already formatted and not part of a larger word
        const regex = new RegExp(`(?<!<sub>|<sup>|/)${escaped}(?!</sub>|</sup>)`, 'g');
        const replacement = formula.replace(/([0-9]+)/g, '<sub>$1</sub>');
        
        if (regex.test(newText)) {
          newText = newText.replace(regex, replacement);
        }
      });

      // 2. Fix charges and common ions
      const ions = [
        { raw: 'NH4+', fixed: 'NH<sub>4</sub><sup>+</sup>' },
        { raw: 'H3O+', fixed: 'H<sub>3</sub>O<sup>+</sup>' },
        { raw: 'H+', fixed: 'H<sup>+</sup>' },
        { raw: 'OH-', fixed: 'OH<sup>−</sup>' },
        { raw: 'Na+', fixed: 'Na<sup>+</sup>' },
        { raw: 'K+', fixed: 'K<sup>+</sup>' },
        { raw: 'Ag+', fixed: 'Ag<sup>+</sup>' },
        { raw: 'Li+', fixed: 'Li<sup>+</sup>' },
        { raw: 'Ba2+', fixed: 'Ba<sup>2+</sup>' },
        { raw: 'Ca2+', fixed: 'Ca<sup>2+</sup>' },
        { raw: 'Mg2+', fixed: 'Mg<sup>2+</sup>' },
        { raw: 'Cu2+', fixed: 'Cu<sup>2+</sup>' },
        { raw: 'Zn2+', fixed: 'Zn<sup>2+</sup>' },
        { raw: 'Fe2+', fixed: 'Fe<sup>2+</sup>' },
        { raw: 'Al3+', fixed: 'Al<sup>3+</sup>' },
        { raw: 'Fe3+ ', fixed: 'Fe<sup>3+</sup>' },
        { raw: 'Cl-', fixed: 'Cl<sup>−</sup>' },
        { raw: 'NO3-', fixed: 'NO<sub>3</sub><sup>−</sup>' },
        { raw: 'NO2-', fixed: 'NO<sub>2</sub><sup>−</sup>' },
        { raw: 'HCO3-', fixed: 'HCO<sub>3</sub><sup>−</sup>' },
        { raw: 'H2PO4-', fixed: 'H<sub>2</sub>PO<sub>4</sub><sup>−</sup>' },
        { raw: 'HSO4-', fixed: 'HSO<sub>4</sub><sup>−</sup>' },
        { raw: 'SO42-', fixed: 'SO<sub>4</sub><sup>2−</sup>' },
        { raw: 'CO32-', fixed: 'CO<sub>3</sub><sup>2−</sup>' },
        { raw: 'HPO42-', fixed: 'HPO<sub>4</sub><sup>2−</sup>' },
        { raw: 'PO43-', fixed: 'PO<sub>4</sub><sup>3−</sup>' },
        { raw: 'S2-', fixed: 'S<sup>2−</sup>' },
        { raw: 'O2-', fixed: 'O<sup>2−</sup>' }
      ];

      ions.forEach(ion => {
        const escaped = ion.raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(?<!<sub>|<sup>|/)${escaped}(?!</sub>|</sup>)`, 'g');
        if (regex.test(newText)) {
          newText = newText.replace(regex, ion.fixed);
        }
      });

      // 3. Fix reaction arrows
      newText = newText.replace(/(?<![⇌→])->/g, '→');
      newText = newText.replace(/(?<![⇌→])<=>|<>|<->/g, '⇌');

      // 4. Fix up/down arrows
      newText = newText.replace(/\(k\)\^/g, '↑');
      newText = newText.replace(/\(r\)\*/g, '↓');

      // 5. Fix common notations
      if (newText.includes('[H+]')) {
        newText = newText.replace(/\[H\+\]/g, '[H<sup>+</sup>]');
      }
      if (newText.includes('[OH-]')) {
        newText = newText.replace(/\[OH-\]/g, '[OH<sup>−</sup>]');
      }

      // 6. Fix minus sign in general text if it looks like a chemical minus or coordinate
      // (e.g. 10-7 -> 10−7)
      newText = newText.replace(/10-([0-9]+)/g, '10<sup>−$1</sup>');
      newText = newText.replace(/10\^-([0-9]+)/g, '10<sup>−$1</sup>');
      
      // Fix standalone charges like + or - in formulas that might have been missed
      // Actually ions list handles most.

      if (newText !== text) {
        currentCorrections++;
      }

      return newText;
    };

    const fixedQuestion = fixText(q.question);
    const fixedOptions = q.options.map(opt => fixText(opt)) as [string, string, string, string];
    const fixedExplanation = fixText(q.explanation);

    const matchQuestion = fixedQuestion === q.question;
    const matchOptions = JSON.stringify(fixedOptions) === JSON.stringify(q.options);
    const matchExplanation = fixedExplanation === q.explanation;

    if (!matchQuestion || !matchOptions || !matchExplanation) {
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

  if (fixedCount > 0) {
    console.log(`[InorganicValidator] Fixed ${fixedCount} questions with ${totalCorrections} corrections.`);
  }

  return {
    fixedQuestions,
    stats: {
      total: questions.length,
      fixed: fixedCount,
      corrections: totalCorrections
    }
  };
};
