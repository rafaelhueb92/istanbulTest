function multiplier() {
  this.mult = function(numberA, numberB) {
    return numberA * numberB;
  };
}

module.exports = new multiplier();
