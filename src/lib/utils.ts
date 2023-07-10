/**
 * * Define common function to usesable
 */

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn
 * * Concat multiple custome class in tailwindcss
 * !DO NOT DELETE THIS FUNCTION
 * @param {string} string arr
 */

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

/**
 * *Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */
export const getEllipsisTxt = (str: string, n = 4): string => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};
