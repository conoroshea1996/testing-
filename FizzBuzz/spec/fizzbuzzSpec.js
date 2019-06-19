describe('Fizz Buzz Function', function () {
    
    beforeEach(function () {
        fizzy = new fizzBuzz;
    });
    describe('returns fizz if dividable by 3 and buzz if dividable by 5 else returns num ', function () {
        it('check if it exist', () => {
            expect(fizzy).toBeDefined();
        });
        it('dividable by 3 should return fizz', () => {
            var result = fizzBuzz(3)
            expect(result).toBe('fizz');
        });
        it('dividable by 5 should return buzz', () => {
            var result = fizzBuzz(5);
            expect(result).toBe('buzz');
        });
        it('should return fizzbuzz if its both', () => {
            var result = fizzBuzz(15);
            expect(result).toBe('fizzbuzz');
        });
        it('should return the number if both are false', () => {
            var result = fizzBuzz(2);
            expect(result).toBe(2)
        });
        it('should return error if anything but a number it placed', () => {
            var result = fizzBuzz('hi');
            expect(result).toBe('Error!')
        });
    })
})
