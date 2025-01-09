/**
 * Utility functions for common tasks.
 */

/**
 * Combines multiple class names into a single string.
 * Useful for conditional class names in React components.
 * @param classes - Array of class names or falsy values.
 * @returns A single string with all valid class names.
 */
export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * Debounces a function by the given delay.
   * Useful for optimizing performance when handling rapid events like input or scroll.
   * @param func - Function to debounce.
   * @param delay - Delay in milliseconds.
   * @returns A debounced version of the function.
   */
//   export function debounce<T extends (...args: any) => void>(
//     func: T,
//     delay: number
//   ): (...args: Parameters<T>) => void {
//     let timeout: NodeJS.Timeout;
//     return (...args: Parameters<T>) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), delay);
//     };
//   }
  
  /**
   * Formats a date string into a human-readable format.
   * @param date - Date string or Date object.
   * @param locale - Optional locale for formatting (default: 'en-US').
   * @returns Formatted date string.
   */
  export function formatDate(date: string | Date, locale = 'en-US'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  