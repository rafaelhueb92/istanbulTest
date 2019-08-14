const server = require("../../index");
const supertest = require("supertest");

describe("routes tests ", () => {
  it("add rout should return ok 200 with parameters", done => {
    const app = supertest(server);
    app
      .get("/add?numberA=2&numberB=2")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("add rout should return error 500 without parameters", done => {
    const app = supertest(server);
    app
      .get("/add?numberA=&numberB=")
      .set("Accept", "application/json")
      .expect(500, done);
  });

  it("subtract route should return ok 200", done => {
    const app = supertest(server);
    app
      .get("/subtract?numberA=2&numberB=2")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("multiply route should return ok 200", done => {
    const app = supertest(server);
    app
      .get("/multiply?numberA=2&numberB=2")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("divide route should return ok 200", done => {
    const app = supertest(server);
    app
      .get("/divide?numberA=2&numberB=2")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("divide route should return error 500 without parameters", done => {
    const app = supertest(server);
    app
      .get("/divide?numberA=2&numberB=0")
      .set("Accept", "application/json")
      .expect(500, done);
  });
});
