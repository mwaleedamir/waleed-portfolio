import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicts
 * (later classes win). Used by every reusable UI component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
