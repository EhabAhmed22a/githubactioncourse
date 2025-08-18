const { checkStringLength } = require('./stringLengthChecker');

describe('checkStringLength', () => {
    test('returns true for string within bounds', () => {
        expect(checkStringLength('hello', 1, 10)).toBe(true);
    });

    test('returns false for string too short', () => {
        expect(checkStringLength('hi', 3, 10)).toBe(false);
    });

    test('returns false for string too long', () => {
        expect(checkStringLength('this is too long', 1, 5)).toBe(false);
    });

    test('handles empty string correctly', () => {
        expect(checkStringLength('', 0, 5)).toBe(true);
        expect(checkStringLength('', 1, 5)).toBe(false);
    });

    test('handles null/undefined as empty string', () => {
        expect(checkStringLength(null, 0, 5)).toBe(true);
        expect(checkStringLength(undefined, 0, 5)).toBe(true);
    });

    test('throws error for negative min or max', () => {
        expect(() => checkStringLength('test', -1, 5)).toThrow();
        expect(() => checkStringLength('test', 1, -5)).toThrow();
    });

    test('throws error when min > max', () => {
        expect(() => checkStringLength('test', 10, 5)).toThrow();
    });
});