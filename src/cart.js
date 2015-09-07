'use strict';

function Cart(){
    this.bookOneCount = 0;
    this.bookTwoCount = 0;
    this.bookThreeCount = 0;
    this.bookFourCount = 0;
    this.bookFiveCount = 0;
}

Cart.prototype.addBooks = function(book,count){
    if(book.section === 1){
        this.bookOneCount += count;
    } else if(book.section === 2){
        this.bookTwoCount += count;
    } else if(book.section === 3){
        this.bookThreeCount += count;
    } else if(book.section === 4){
        this.bookFourCount += count;
    } else {
        this.bookFiveCount += count;
    }
};

module.exports = Cart;