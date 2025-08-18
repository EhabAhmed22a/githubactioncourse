/**
 * Checks if a string's length is within specified bounds
 * @param {string} str - The string to check
 * @param {number} min - Minimum length (inclusive)
 * @param {number} max - Maximum length (inclusive)
 * @returns {boolean} - True if length is within bounds, false otherwise
 * @throws {Error} - If min > max or if min/max are negative
 */
function checkStringLength(str, min, max) {
    if (min < 0 || max < 0) {
        throw new Error('Min and max must be non-negative');
    }
    if (min > max) {
        throw new Error('Min length cannot be greater than max length');
    }
    const length = str ? str.length : 0;
    return length >= min && length <= max;
}

module.exports = { checkStringLength };
// add Comment