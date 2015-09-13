'use strict';

function Calculator() {
    this.packagesCount = [];
    this.amount = 0;
}

Calculator.prototype.calculateAmount = function (packager) {
    var _this = this;

    this.packagesCount.push(packager.oneBook, packager.twoDifferentBooks, packager.threeDifferentBooks, packager.fourDifferentBooks, packager.fiveDifferentBooks);

    this.packagesCount.forEach(function (packageCount, index) {
        _this.amount += _this.getSubtotal(index + 1, packageCount)
    });
};

Calculator.prototype.getSubtotal = function (bookNumber, count) {
    if (bookNumber === 1) {
        return 8 * count;
    } else if (bookNumber === 2) {
        return 15.2 * count;
    } else if (bookNumber === 3) {
        return 21.6 * count;
    } else if (bookNumber === 4) {
        return 25.6 * count;
    } else {
        return 30 * count;
    }
};

module.exports = Calculator;