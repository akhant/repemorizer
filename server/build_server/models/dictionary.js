"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var Dictionary = new Schema({
  text: String,
  langFrom: String,
  langTo: String,
  translation: String,
  stage: { type: Number, default: 0 },
  done: Boolean,
  addTime: Object,
  lastRepeat: Object,
  isRepeatTime: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

Dictionary.methods.checkRepeatTime = function () {
  this.isRepeatTime = Date.now() - Date.parse(this.lastRepeat) > _constants.STAGE[this.stage] ? true : false;
  return this;
};

exports.default = _mongoose2.default.model("Dictionary", Dictionary);