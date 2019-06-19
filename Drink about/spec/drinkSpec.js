describe('Drink function', function () {
    beforeEach(function () {
        drink = new whatCanIDrink();
    });
    describe('Checks age', function(){
        it('should exist', function () {
            expect(whatCanIDrink).toBeDefined()
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(16)
            expect(result).toBe("Drink Coke");
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whiskey");
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

    })
})