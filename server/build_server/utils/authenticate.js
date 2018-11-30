"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res, next) {

  const header = req.headers.authorization;
  const token = header.split(" ")[1];

  if (token) {
    _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).send({ message: "Invakid token", success: false });
      } else {
        _user2.default.findOne({ email: decoded.email }).then(user => {
          req.body.user = user;
          next();
        });
      }
    });
  } else {
    res.status(500).send({ message: "No token", success: false });
  }
};

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }