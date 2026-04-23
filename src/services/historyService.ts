/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameRecord } from "../types";

const HISTORY_KEY = "millionaire_history";
const MAX_RECORDS = 5000; // Large limit for "unlimited" feel

export const historyService = {
  saveGameRecord: (record: GameRecord) => {
    try {
      const existingHistory = historyService.getHistory();
      const updatedHistory = [record, ...existingHistory].slice(0, MAX_RECORDS);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("Failed to save game record:", error);
    }
  },

  getHistory: (): GameRecord[] => {
    try {
      const data = localStorage.getItem(HISTORY_KEY);
      if (!data) return [];
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to load history:", error);
      return [];
    }
  },

  clearHistory: () => {
    localStorage.removeItem(HISTORY_KEY);
  },

  setHistory: (history: GameRecord[]) => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_RECORDS)));
    } catch (error) {
      console.error("Failed to update history:", error);
    }
  },

  formatDate: (date: Date): string => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${d}/${m}/${y} ${h}:${min}`;
  },

  formatDuration: (seconds: number): string => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }
};
