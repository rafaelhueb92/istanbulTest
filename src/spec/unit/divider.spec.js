const divider = require("../../services/divider");

describe("divider tests ", function() {
  let _numberA;
  let _numberB;

  it("should return numberA divided by numberB", function() {
    _numberA = 6;
    _numberB = 2;
    const result = divider.div(_numberA, _numberB);

    expect(result).toEqual(3);
  });
});
