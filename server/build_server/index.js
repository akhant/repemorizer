"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _controllers = require("./controllers");

var route = _interopRequireWildcard(_controllers);

var _authenticate = require("./utils/authenticate");

var _authenticate2 = _interopRequireDefault(_authenticate);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static(_path2.default.resolve(__dirname + "/build_client")));
_mongoose2.default.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.use((0, _cors2.default)());

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use(_bodyParser2.default.json());

app.post("/api/translate", _authenticate2.default, route.translateText);
app.get("/api/get_fifty", _authenticate2.default, route.getFifty);
app.get("/api/get_dictionary", _authenticate2.default, route.getDictionary);
app.post("/api/remove_text", _authenticate2.default, route.removeText);
app.get("/api/get_words_to_repeat", _authenticate2.default, route.getWordsToRepeat);
app.patch("/api/check_words_to_repeat", _authenticate2.default, route.checkWordsToRepeat);
app.patch("/api/next_stage", _authenticate2.default, route.nextStage);
app.post("/api/signup", route.signup);
app.get("/api/fetch_current_user", _authenticate2.default, route.fetchCurrentUser);
app.post("/api/login", route.login);
app.get("/api/confirmation/:token", route.confirmation);
app.post("/api/forgot_password", route.forgotPassword);
app.post("/api/reset_password", route.resetPassword);
app.post("/api/error", route.errorHandler);

app.get("/*", function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname + "/build_client/index.html"));
});

app.listen(process.env.PORT || 3000, function () {
  return console.log("server running");
});
module.exports = app;