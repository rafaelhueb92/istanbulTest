const multiplier = require("../../services/multiplier");

describe("multiplier tests ", () => {
  let _numberA;
  let _numberB;

  it("should return numberA multiplier by numberB", () => {
    _numberA = 6;
    _numberB = 2;
    const result = multiplier.mult(_numberA, _numberB);

    expect(result).toEqual(12);
  });
});
