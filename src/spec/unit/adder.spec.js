const adder = require("../../services/adder");

describe("adder tests ", function() {
  let _numberA;
  let _numberB;

  it("should return numberA added by numberB", function() {
    _numberA = 6;
    _numberB = 2;
    const result = adder.add(_numberA, _numberB);

    expect(result).toEqual(8);
  });
});
