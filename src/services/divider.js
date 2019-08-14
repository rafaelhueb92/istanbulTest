function divider() {
    this.div = function (numberA, numberB) {
        return  numberA / numberB;
    }
}

module.exports = new divider();