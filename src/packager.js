'use strict';

function Packager() {
    this.booksCount = [];
    this.oneBook = 0;
    this.twoDifferentBooks = 0;
    this.threeDifferentBooks = 0;
    this.fourDifferentBooks = 0;
    this.fiveDifferentBooks = 0;
}

Packager.prototype.subpackageBooks = function (cart) {
    this.booksCount.push(cart.bookOneCount, cart.bookTwoCount, cart.bookThreeCount, cart.bookFourCount, cart.bookFiveCount);

    this.booksCount.sort(function (a, b) {
        return b - a;
    });

    do {
        var differentBooksCount = this.countDifferentBooks();

        this.subBooksCount(differentBooksCount);

        this.addPackages(differentBooksCount);

    } while (this.countDifferentBooks() > 0);

    this.optimizeStrategy();
};

Packager.prototype.countDifferentBooks = function () {
    return this.booksCount.filter(function (bookCount) {
        return bookCount > 0;
    }).length;
};

Packager.prototype.subBooksCount = function (count) {
    for (var i = 0; i < count; i++) {
        this.booksCount[i]--;
    }
};

Packager.prototype.addPackages = function (count) {
    if (count === 1) {
        this.oneBook++;
    } else if (count === 2) {
        this.twoDifferentBooks++;
    } else if (count === 3) {
        this.threeDifferentBooks++;
    } else if (count === 4) {
        this.fourDifferentBooks++;
    } else {
        this.fiveDifferentBooks++;
    }
};

Packager.prototype.optimizeStrategy = function () {
    while (this.fiveDifferentBooks > 0 && this.threeDifferentBooks > 0) {
        this.fiveDifferentBooks--;
        this.threeDifferentBooks--;
        this.fourDifferentBooks += 2;
    }
};

module.exports = Packager;