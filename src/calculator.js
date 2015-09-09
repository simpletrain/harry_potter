'use strict';

function Calculator() {
    this.booksCount = [];
    this.amount = 0;
}

Calculator.prototype.calculateAmount = function (cart) {
    this.booksCount.push(cart.bookOneCount, cart.bookTwoCount, cart.bookThreeCount, cart.bookFourCount, cart.bookFiveCount);

    do {
        this.booksCount.sort(function (a, b) {
            return b - a;
        });

        var differentBooksCount = this.countDifferentBooks();

        this.subBooksCount(differentBooksCount);

        this.amount += this.getSubtotal(differentBooksCount);

    } while (this.countDifferentBooks() > 0);

    return this.amount;
};

Calculator.prototype.countDifferentBooks = function () {
    var differentBooksCount = this.booksCount.filter(function (bookCount) {
        return bookCount > 0;
    }).length;

    if (differentBooksCount >= 4 && this.countRestDifferentBooks() === 4) {
        differentBooksCount = 4;
    }

    return differentBooksCount;
};

Calculator.prototype.countRestDifferentBooks = function () {
    var restBooksCount = [];

    this.booksCount.forEach(function (bookCount, index) {
        if (index < 4) {
            restBooksCount.push(bookCount - 1)
        } else {
            restBooksCount.push(bookCount)
        }
    });

    return restBooksCount.filter(function (bookCount) {
        return bookCount > 0;
    }).length;
};

Calculator.prototype.subBooksCount = function (count) {
    for (var i = 0; i < count; i++) {
        this.booksCount[i]--;
    }
};

Calculator.prototype.getSubtotal = function (count) {
    if (count === 1) {
        return 8;
    } else if (count === 2) {
        return 15.2;
    } else if (count === 3) {
        return 21.6;
    } else if (count === 4) {
        return 25.6;
    } else {
        return 30;
    }
};

module.exports = Calculator;