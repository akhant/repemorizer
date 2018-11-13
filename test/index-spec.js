const request = require("supertest");
const expect = require("chai").expect;
const rewire = require("rewire");
const app = rewire("../server/index.js");
import * as func from "../server/controllers";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjZANi5jb20iLCJ1c2VybmFtZSI6IjYiLCJjb25maXJtZWQiOmZhbHNlLCJ1c2VySWQiOiI1YmRhMDBiMTFjZDVmZjBlMGM4YTMwZGUiLCJpYXQiOjE1NDEwMTM2OTB9.zN4kke2lU7VFoT2kCieTF2f9RoH-tkfjVCJG1gcv1VE";
import Nightmare from "nightmare";
describe("Server response", function() {
  /* it("/api/confirmation", function(done) {
    request(app)
      .get("/api/confirmation")
      .expect(200)
      .end((done));
  }); */
  /*   it("/api/translate", function(done) {
    request(app)
      .post("/api/translate")
      .send({ text: "go"})
      .set("authorization", `Bearer ${token}`)
      .end((err,res) => {
          if (err) console.log(err)
          expect(res.body.translation).to.equal("идти")
          done()
      });
  });  */
});

//test pass in 3 seconds
describe("google scrabing", () => {
  it("get translation of a word", done => {
    const nightmare = Nightmare();
    nightmare
      .goto("https://translate.google.com/#en/ru")
      .type("#source", "hello")
      .wait("#result_box span")
      .evaluate(() => document.querySelector("#result_box span").innerText)
      .end()
      .then(text => {
        expect(text).to.equal("Привет");
        done();
      }); 
  });
});
