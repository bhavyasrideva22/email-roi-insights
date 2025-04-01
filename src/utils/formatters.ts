
/**
 * Formats a number as Indian Rupees (INR)
 * @param value - The number to format
 * @returns Formatted string with the ₹ symbol
 */
export const formatIndianRupee = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Formats a number as a percentage
 * @param value - The number to format (e.g., 0.05 for 5%)
 * @returns Formatted string with the % symbol
 */
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Formats a large number with commas according to Indian numbering system
 * @param value - The number to format
 * @returns Formatted string with proper thousand separators
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-IN').format(value);
};
