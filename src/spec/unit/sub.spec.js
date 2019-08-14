const subtractor = require("../../services/subtractor");

describe("sub tests ", function() {
  let _numberA;
  let _numberB;

  it("should return numberA sub by numberB", function() {
    _numberA = 6;
    _numberB = 2;
    const result = subtractor.subs(_numberA, _numberB);

    expect(result).toEqual(4);
  });
});
