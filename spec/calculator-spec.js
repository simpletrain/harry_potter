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

    describe('#countDifferentBooks', function () {

        it('should return 4 different books when numbers of rest of different book are 4', function () {
            calculator.booksCount = [2, 2, 2, 1, 1];

            var differentBooks = calculator.countDifferentBooks();
            expect(differentBooks).toBe(4);
        });

        it('should return exactly different books when numbers of rest of different book are  not 4', function () {
            calculator.booksCount = [2, 2, 1, 1, 1];

            var differentBooks = calculator.countDifferentBooks();
            expect(differentBooks).toBe(5);
        });

    });

});