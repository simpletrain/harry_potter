'use strict';

var Calculator = require('../src/calculator.js');
var Book = require('../src/book.js');
var Cart = require('../src/cart.js');

describe('Calculator', function () {

    it('should has properties', function () {

    });

    describe('#calculateAmount', function () {

        it('can calculate right amount', function () {
            var book1 = new Book(1);
            var book2 = new Book(2);
            var book3 = new Book(3);
            var book4 = new Book(4);
            var book5 = new Book(5);
            var cart = new Cart();
            cart.addBooks(book1, 1);
            cart.addBooks(book2, 1);
            cart.addBooks(book3, 2);
            cart.addBooks(book4, 2);
            cart.addBooks(book5, 2);
            var calculator = new Calculator();
            var amount = calculator.calculateAmount(cart);
            expect(amount).toBe(51.2);
        });

    });

});