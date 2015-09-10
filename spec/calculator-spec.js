'use strict';

var Calculator = require('../src/calculator.js');

describe('Calculator', function () {

    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('should has array properties called booksCount', function () {
        expect(Array.isArray(calculator.booksCount)).toBe(true);
    });

    it('should has number properties called amount', function () {
        expect(calculator.amount).toBe(0);
    });

    describe('#calculateAmount', function () {

        it('can calculate right amount', function () {
            var cart = {
                bookOneCount: 1,
                bookTwoCount: 2,
                bookThreeCount: 1,
                bookFourCount: 2,
                bookFiveCount: 2
            };
            var amount = calculator.calculateAmount(cart);

            expect(amount).toBe(51.2);
        });

    });

});