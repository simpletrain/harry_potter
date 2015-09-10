'use strict';

var Calculator = require('../src/calculator.js');

describe('Calculator', function () {

    it('should has properties', function () {

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