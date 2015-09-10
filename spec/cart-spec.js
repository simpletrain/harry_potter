'use strict';

var Cart = require('../src/cart.js');

describe('Cart', function () {

    it('should has 5 properties called this.bookOneCount,bookTwoCount,bookThreeCount,bookFourCount,bookFiveCount', function () {
        var cart = new Cart();
        expect(cart.bookOneCount).toBe(0);
        expect(cart.bookTwoCount).toBe(0);
        expect(cart.bookThreeCount).toBe(0);
        expect(cart.bookFourCount).toBe(0);
        expect(cart.bookFiveCount).toBe(0);
    });

    describe('#addBooks', function () {

        it('can add books in cart', function () {
            var book1 = {section : 1};
            var book2 = {section : 2};
            var cart = new Cart();
            cart.addBooks(book1, 3);
            cart.addBooks(book2, 5);
            expect(cart.bookOneCount).toBe(3);
            expect(cart.bookTwoCount).toBe(5);
        });

    });


});