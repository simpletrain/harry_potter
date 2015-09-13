'use strict';

var Packager = require('../src/packager.js');

describe('Packager', function () {

    var packager;

    beforeEach(function () {
        packager = new Packager();
    });

    describe('#subpackageBooks', function () {

        it('can subpackage books in right way', function () {
            var cart = {
                bookOneCount: 1,
                bookTwoCount: 4,
                bookThreeCount: 3,
                bookFourCount: 4,
                bookFiveCount: 4
            };

            packager.subpackageBooks(cart);

            expect(packager.oneBook).toBe(0);
            expect(packager.twoDifferentBooks).toBe(0);
            expect(packager.threeDifferentBooks).toBe(0);
            expect(packager.fourDifferentBooks).toBe(4);
            expect(packager.fiveDifferentBooks).toBe(0);
        });

    });

    describe('#countDifferentBooks', function () {

        it('should return 0 different books', function () {
            packager.booksCount = [0, 0, 0, 0, 0];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(0);
        });

        it('should return 1 different books', function () {
            packager.booksCount = [0, 0, 0, 0, 1];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(1);
        });

        it('should return 2 different books', function () {
            packager.booksCount = [0, 0, 0, 1, 1];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(2);
        });

        it('should return 3 different books', function () {
            packager.booksCount = [0, 0, 1, 1, 1];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(3);
        });

        it('should return 4 different books', function () {
            packager.booksCount = [0, 1, 1, 1, 1];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(4);
        });

        it('should return 5 different books', function () {
            packager.booksCount = [1, 1, 1, 1, 1];

            var differentBooks = packager.countDifferentBooks();
            expect(differentBooks).toBe(5);
        });

    });

    describe('#subBooksCount', function () {

        it('should count right numbers of rest of different books when take out 4 books', function () {
            packager.booksCount = [3, 3, 1, 1, 0];

            packager.subBooksCount(4);
            expect(packager.booksCount).toEqual([2, 2, 0, 0, 0]);
        });

    });

});