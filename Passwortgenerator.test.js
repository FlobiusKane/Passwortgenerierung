

// passwordGenerator.test.js
const generatePassword = require('./passwordGenerator');

describe('generatePassword', () => {
    test('generates a password of specified length', () => {
        const password = generatePassword(12, true, true, true, true);
        expect(password.length).toBe(12);
    });

    test('includes uppercase characters when specified', () => {
        const password = generatePassword(12, true, false, false, false);
        expect(/[A-Z]/.test(password)).toBe(true);
    });

    test('includes lowercase characters when specified', () => {
        const password = generatePassword(12, false, true, false, false);
        expect(/[a-z]/.test(password)).toBe(true);
    });

    test('includes numbers when specified', () => {
        const password = generatePassword(12, false, false, true, false);
        expect(/[0-9]/.test(password)).toBe(true);
    });

    test('includes special characters when specified', () => {
        const password = generatePassword(12, false, false, false, true);
        expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
    });

    test('returns error message if no character type is selected', () => {
        const message = generatePassword(12, false, false, false, false);
        expect(message).toBe('Bitte wählen Sie mindestens eine Zeichenart aus.');
    });
});
