'use strict';

var Book = require('../src/book.js');

describe('Book', function () {

    it('should has section,price properties', function () {
        var book = new Book(2);
        expect(book.section).toBe(2);
        expect(book.price).toBe(8);
    });

});