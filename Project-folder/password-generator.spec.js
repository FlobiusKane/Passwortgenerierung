// password-generator.spec.js
describe('Password Generator', function() {
    it('should generate a password of the correct length', function() {
        const password = generatePassword(12, true, true, true, true);
        expect(password.length).toBe(12);
    });

    it('should include uppercase letters if useUppercase is true', function() {
        const password = generatePassword(12, true, false, false, false);
        expect(/[A-Z]/.test(password)).toBe(true);
    });

    it('should include lowercase letters if useLowercase is true', function() {
        const password = generatePassword(12, false, true, false, false);
        expect(/[a-z]/.test(password)).toBe(true);
    });

    it('should include numbers if useNumbers is true', function() {
        const password = generatePassword(12, false, false, true, false);
        expect(/[0-9]/.test(password)).toBe(true);
    });

    it('should include special characters if useSpecial is true', function() {
        const password = generatePassword(12, false, false, false, true);
        expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
    });

    it('should throw an error if no character types are selected', function() {
        expect(function() {
            generatePassword(12, false, false, false, false);
        }).toThrowError('Bitte wählen Sie mindestens eine Zeichenart aus.');
    });

    it('should generate a password with mixed character types', function() {
        const password = generatePassword(12, true, true, true, true);
        expect(/[A-Z]/.test(password)).toBe(true);
        expect(/[a-z]/.test(password)).toBe(true);
        expect(/[0-9]/.test(password)).toBe(true);
        expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
    });
});
