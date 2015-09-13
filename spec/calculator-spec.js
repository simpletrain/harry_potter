'use strict';

var Calculator = require('../src/calculator.js');

describe('Calculator', function () {

    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('should has array properties called packagesCount', function () {
        expect(Array.isArray(calculator.packagesCount)).toBe(true);
    });

    it('should has number properties called amount', function () {
        expect(calculator.amount).toBe(0);
    });

    describe('#calculateAmount', function () {

        it('can calculate right amount', function () {
            var packager = {
                oneBook: 1,
                twoDifferentBooks: 2,
                threeDifferentBooks: 3,
                fourDifferentBooks: 4,
                fiveDifferentBooks: 5
            };

            calculator.calculateAmount(packager);

            expect(calculator.amount).toBe(8 + 2 * (2 * (8 - 0.40)) + 3 * (3 * (8 - 0.80)) + 4 * (4 * (8 - 1.60)) + 5 * (5 * (8 - 2)));
        });

    });

    describe('#getSubtotal', function () {

        it('can calculate right amount', function () {
            var subtotal = calculator.getSubtotal(2, 3);

            expect(subtotal).toBe(2 * (3 * (8 - 0.40)));
        });

    });

});
