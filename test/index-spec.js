const request = require("supertest");
const expect = require("chai").expect 
const rewire = require("rewire");
const app = rewire("../server/index.js");
import * as func from '../server/controllers'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjZANi5jb20iLCJ1c2VybmFtZSI6IjYiLCJjb25maXJtZWQiOmZhbHNlLCJ1c2VySWQiOiI1YmRhMDBiMTFjZDVmZjBlMGM4YTMwZGUiLCJpYXQiOjE1NDEwMTM2OTB9.zN4kke2lU7VFoT2kCieTF2f9RoH-tkfjVCJG1gcv1VE"

describe("Server response", function() {
  /* it("/api/confirmation", function(done) {
    request(app)
      .get("/api/confirmation")
      .expect(200)
      .end((done));
  }); */
  it("/api/translate", function(done) {
    request(app)
      .post("/api/translate")
      .send({ text: "go"})
      .set("authorization", `Bearer ${token}`)
      .end((err,res) => {
          if (err) console.log(err)
          expect(res.body.translation).to.equal("идти")
          done()
      });
  }); 
});
