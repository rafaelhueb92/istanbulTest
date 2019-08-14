const router = require("express").Router();
const adder = require("./services/adder");
const subtractor = require("./services/subtractor");
const multiplier = require("./services/multiplier");
const divider = require("./services/divider");
const { handleCalculatorRequest } = require("./util");

router.get("/add", (req, res) => {
  res.send(
    handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB)
  );
});

router.get("/subtract", (req, res) => {
  res.send(
    handleCalculatorRequest(
      subtractor.subs,
      req.query.numberA,
      req.query.numberB
    )
  );
});

router.get("/multiply", (req, res) => {
  res.send(
    handleCalculatorRequest(
      multiplier.mult,
      req.query.numberA,
      req.query.numberB
    )
  );
});

router.get("/divide", (req, res) => {
  res.send(
    handleCalculatorRequest(divider.div, req.query.numberA, req.query.numberB)
  );
});

module.exports = router;
