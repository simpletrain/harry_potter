'use strict';

var Calculator = require('../src/calculator.js');

describe('Calculator', function () {

    it('should has array properties called booksCount', function () {
        var calculator = new Calculator();
        expect(Array.isArray(calculator.booksCount)).toBe(true);
    });

    it('should has number properties called amount', function () {
        var calculator = new Calculator();
        expect(calculator.amount).toBe(0);
    });

    describe('#calculateAmount', function () {

        it('can calculate right amount', function () {
            var cart = {
                bookOneCount : 1,
                bookTwoCount : 2,
                bookThreeCount : 1,
                bookFourCount : 2,
                bookFiveCount : 2
            };
            var calculator = new Calculator();
            var amount = calculator.calculateAmount(cart);
            expect(amount).toBe(51.2);
        });

    });

});