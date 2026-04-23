import { Question } from "../types";
import { QUESTIONS_DAI_CUONG } from "./questions_inorganic";
import { QUESTIONS_HYDROCARBON } from "./questions_hydrocarbon";
import { QUESTIONS_DAN_XUAT } from "./questions_derivative";

export const QUESTION_BANK: Question[] = [
  ...QUESTIONS_DAI_CUONG,
  ...QUESTIONS_HYDROCARBON,
  ...QUESTIONS_DAN_XUAT
];
