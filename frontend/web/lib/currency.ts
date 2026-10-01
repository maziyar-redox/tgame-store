/**
 * This function converts number into formatted currency RIAL
 * @param {number}  value - A numeric param for formatting that number into persian rial.
 * @returns {string} Result of formatting operation
 */
export function currencyFormmater(value: number): string {
    const formatter = new Intl.NumberFormat("fa-IR").format(value);

    return formatter;
}

/**
 * This function calculates discount for currency RIAL
 * @param {number}  value - A numeric param for formatting that number into persian rial.
 * @param {number}  discount - A numeric param for discount
 * @returns {number} Result of calculation
 */
export function discountCalculator(value: number, discount: number): number {
    const discountBase = value * (discount / 100);
    const finalPrice = value - discountBase;

    return finalPrice;
}
