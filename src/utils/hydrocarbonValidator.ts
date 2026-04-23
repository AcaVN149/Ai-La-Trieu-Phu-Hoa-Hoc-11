import { Question } from '../types';

/**
 * Utility to validate and fix hydrocarbon questions formatting.
 * Rules:
 * 1. Subscripts for numbers in chemical formulas (C2H2 -> C<sub>2</sub>H<sub>2</sub>)
 * 2. Superscripts for charges (NO2+ -> NO2<sup>+</sup>)
 * 3. Standardized arrows (→, ⇌)
 * 4. Standardized minus sign (− U+2212) for bonds in names and negative charges
 * 5. Formatting for specific terms (cis−, trans−, alk−1−yne)
 */

export const validateAndFixHydrocarbonQuestions = (questions: Question[]): { 
  fixedQuestions: Question[], 
  stats: { total: number, fixed: number, corrections: number } 
} => {
  let fixedCount = 0;
  let totalCorrections = 0;

  const fixedQuestions = questions.map(q => {
    if (q.topic !== 'hydrocarbon') return q;

    let isFixed = false;
    let currentCorrections = 0;

    const fixText = (text: string): string => {
      let newText = text;

      // 1. Fix numbers in common chemical formulas (Simple regex for 2-4 atoms usually)
      // Hydrocarbons: CnHm
      const formulaRegex = /\b(C|H|O|N|S|P|Cl|Br|I|F|Ag|Ca|Mn|Mg|K|Na)([2-9]|[1-9][0-9])\b/g;
      // We need to be careful not to match things like "11 gam"
      // Better strategy: match specific common patterns or use a more refined regex
      const specificFormulas = [
        "CH4", "C2H2", "C2H4", "C2H6", "C3H4", "C3H6", "C3H8", "C4H6", "C4H8", "C4H10",
        "C5H8", "C5H10", "C5H12", "C6H6", "C6H12", "C7H8", "C7H14", "C7H16", "C8H10", "C8H18",
        "CO2", "H2O", "KMnO4", "AgNO3", "NH3", "CaC2", "Ca(OH)2", "H2SO4", "HNO3", "Br2", "H2", "Cl2", "O2", "N2"
      ];

      specificFormulas.forEach(formula => {
        const escaped = formula.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'g');
        const replacement = formula.replace(/([0-9]+)/g, '<sub>$1</sub>');
        if (regex.test(newText)) {
          newText = newText.replace(regex, replacement);
        }
      });

      // 2. Fix reaction arrows
      if (newText.includes('->')) {
        newText = newText.replace(/->/g, '→');
      }
      if (newText.includes('<=>')) {
        newText = newText.replace(/<=>/g, '⇌');
      }

      // 3. Fix charges
      const charges = [
        { raw: 'NO2+', fixed: 'NO<sub>2</sub><sup>+</sup>' },
        { raw: 'NO3-', fixed: 'NO<sub>3</sub><sup>−</sup>' }, // Using unicode minus
        { raw: 'Mn+7', fixed: 'Mn<sup>+7</sup>' },
        { raw: 'Mn+4', fixed: 'Mn<sup>+4</sup>' },
        { raw: 'H+', fixed: 'H<sup>+</sup>' },
        { raw: 'Br+', fixed: 'Br<sup>+</sup>' },
        { raw: 'Br-', fixed: 'Br<sup>−</sup>' },
        { raw: 'NO2-', fixed: 'NO<sub>2</sub><sup>−</sup>' },
      ];

      charges.forEach(c => {
        const escaped = c.raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        if (newText.includes(c.raw)) {
          newText = newText.replace(regex, c.fixed);
        }
      });

      // 4. Fix nomenclature formatting (cis-, trans-, alk-1-yne)
      // Replace hyphen with unicode minus in naming
      const namePatterns = [
        { regex: /alk-([0-9])-yne/g, replacement: 'alk−$1−yne' },
        { regex: /but-([0-9])-ene/g, replacement: 'but−$1−ene' },
        { regex: /pent-([0-9])-ene/g, replacement: 'pent−$1−ene' },
        { regex: /but-([0-9])-yne/g, replacement: 'but−$1−yne' },
        { regex: /cis-/g, replacement: 'cis−' },
        { regex: /trans-/g, replacement: 'trans−' },
        { regex: /o-xylene/g, replacement: 'o−xylene' },
        { regex: /m-xylene/g, replacement: 'm−xylene' },
        { regex: /p-xylene/g, replacement: 'p−xylene' },
        { regex: /ortho-/g, replacement: 'ortho−' },
        { regex: /meta-/g, replacement: 'meta−' },
        { regex: /para-/g, replacement: 'para−' },
        { regex: /1-bromo/g, replacement: '1−bromo' },
        { regex: /2-bromo/g, replacement: '2−bromo' },
        { regex: /1-chloro/g, replacement: '1−chloro' },
        { regex: /2-chloro/g, replacement: '2−chloroo' },
        { regex: /([0-9])-methyl/g, replacement: '$1−methyl' },
        { regex: /([0-9])-ethyl/g, replacement: '$1−ethyl' },
        { regex: /([0-9,]+)-tri/g, replacement: '$1−tri' },
        { regex: /([0-9,]+)-di/g, replacement: '$1−di' },
      ];

      namePatterns.forEach(p => {
        if (p.regex.test(newText)) {
          newText = newText.replace(p.regex, p.replacement);
        }
      });

      // 5. Fix notation
      if (newText.includes('nCO2')) {
        newText = newText.replace(/nCO2/g, 'n<sub>CO<sub>2</sub></sub>');
      }
      if (newText.includes('nH2O')) {
        newText = newText.replace(/nH2O/g, 'n<sub>H<sub>2</sub>O</sub>');
      }

      // Final check for double counts or overlapping
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

  return {
    fixedQuestions,
    stats: {
      total: questions.length,
      fixed: fixedCount,
      corrections: totalCorrections
    }
  };
};
