"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var translateText = exports.translateText = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var reqText, from, to, resDetectLang, _resDetectLang$data, code, lang;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reqText = req.body.text.toLowerCase();
            from = req.body.lang.from;
            to = req.body.lang.to;
            _context.next = 5;
            return _axios2.default.get(urlDetect + "&text=" + encodeURI(reqText) + "$hint=" + from);

          case 5:
            resDetectLang = _context.sent;
            _resDetectLang$data = resDetectLang.data, code = _resDetectLang$data.code, lang = _resDetectLang$data.lang;


            if (code === 200) {
              from = lang;
            }

            _dictionary2.default.findOne({
              userId: req.body.user._id,
              text: reqText,
              langFrom: from,
              langTo: to
            }).then(function (found) {
              //check if the word is already in dictionary
              if (found) {
                res.send(found);
              } else {
                //if not, create new word
                _axios2.default.post(urlTranslate + "&lang=" + from + "-" + to + "&text=" + encodeURI(reqText)).then(function (response) {
                  var word = new _dictionary2.default({
                    text: reqText,
                    langFrom: from,
                    langTo: to,
                    translation: response.data.text[0],
                    addTime: new Date(),
                    lastRepeat: new Date(),
                    stage: 0,
                    isRepeatTime: false,
                    userId: req.body.user._id
                  });
                  word.save().then(function (w) {
                    return res.send(w);
                  });
                }).catch(function (err) {
                  return console.log("error post yandex/api", err);
                });
              }
            }).catch(function (err) {
              return console.log("Error DB translate", err);
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function translateText(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get last 50 words


exports.getFifty = getFifty;
exports.getDictionary = getDictionary;
exports.removeText = removeText;
exports.getWordsToRepeat = getWordsToRepeat;
exports.checkWordsToRepeat = checkWordsToRepeat;
exports.nextStage = nextStage;
exports.signup = signup;
exports.fetchCurrentUser = fetchCurrentUser;
exports.login = login;
exports.confirmation = confirmation;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.errorHandler = errorHandler;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _dictionary = require("../models/dictionary");

var _dictionary2 = _interopRequireDefault(_dictionary);

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

var _mailer = require("../mailer");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var urlTranslate = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + process.env.YANDEX_API_KEY;
var urlDetect = "https://translate.yandex.net/api/v1.5/tr.json/detect?key=" + process.env.YANDEX_API_KEY;

function getFifty(req, res) {
  _dictionary2.default.find({ userId: req.body.user._id }).limit(50).then(function (dictionary) {
    res.send(dictionary);
  }).catch(function (err) {
    return console.log("error DB getFifty", err);
  });
}

//get all dictionary
function getDictionary(req, res) {
  _dictionary2.default.find({ userId: req.body.user._id }).then(function (dictionary) {
    res.send(dictionary);
  }).catch(function (err) {
    return console.log("error DB getDictionary", err);
  });
}

function removeText(req, res) {
  _dictionary2.default.findOneAndRemove({
    userId: req.body.user._id,
    _id: req.body.id
  }).then(function (removedElement) {
    res.send(removedElement);
  }).catch(function (err) {
    return console.log("error DB removeText", err);
  });
}

function getWordsToRepeat(req, res) {
  _dictionary2.default.find({ userId: req.body.user._id, isRepeatTime: true }).then(function (repeatWords) {
    if (repeatWords.length) return res.send(repeatWords);
    return res.send([]);
  }).catch(function (err) {
    return console.log("error DB getwordsToRepeat", err);
  });
}

function checkWordsToRepeat(req, res) {
  _dictionary2.default.find({ userId: req.body.user._id }).then(function (words) {
    for (var i = 0; i < words.length; i++) {
      words[i].checkRepeatTime().save();
    }
    res.send(words);
  }).catch(function (err) {
    return console.log("error DB checkWordsToRepeat", err);
  });
}

function nextStage(req, res) {
  _dictionary2.default.findOne({ userId: req.body.user._id, _id: req.body._id }).then(function (word) {
    if (req.body.success) word.stage += 1;

    word.lastRepeat = new Date();
    word.isRepeatTime = false;
    word.save().then(function (w) {
      res.send(w);
    });
  }).catch(function (err) {
    return console.log("error DB nextStage", err);
  });
}

function signup(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password,
      username = _req$body.username;


  var user = new _user2.default({ email: email, username: username });

  user.setPassword(password);
  user.setConfirmationToken();
  user.setResetPasswordToken();

  user.save(function (err, u) {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        var errType = err.errmsg.match(/email|username/);
        var mess = errType[0].charAt(0).toUpperCase() + errType[0].slice(1) + " isn't unique. Try another one.";

        res.status(203).send({ message: mess });
      }
    } else {
      (0, _mailer.sendConfirmationEmail)(user);
      var userWithToken = u.withToken();
      res.send(_extends({}, userWithToken, {
        message: "Confirmation email has been send. Check your mailbox.",
        success: true
      }));
    }
  });
}

function fetchCurrentUser(req, res) {
  var user = req.body.user;

  res.send({
    email: user.email,
    username: user.username,
    confirmed: user.confirmed,
    token: user.generateJWT(),
    userId: user._id
  });
}

function login(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;


  _user2.default.findOne({ email: email }).then(function (user) {
    if (user && user.isValidPassword(password)) {
      var userWithToken = user.withToken();
      res.send(_extends({}, userWithToken, { message: "Successful!", success: true }));
    } else {
      res.status(203).send({ message: "Invalid login or password", success: false });
    }
  });
}

function confirmation(req, res) {
  var token = req.params.token;

  _user2.default.findOneAndUpdate({ confirmationToken: token }, { confirmationToken: "", confirmed: true }).then(function (user) {
    if (user) {
      res.redirect(process.env.HOST + "/confirmation");
    } else {
      res.status(401).send({ message: "Invalid confirmation", success: false });
    }
  });
}
function forgotPassword(req, res) {
  var email = req.body.email;

  _user2.default.findOne({ email: email }).then(function (user) {
    if (user) {
      (0, _mailer.sendResetPasswordEmail)(user);
      res.send({
        message: "Confirmation email has been send. Check your mailbox.",
        success: true
      });
    } else {
      res.status(203).send({ message: "There is no user with such email", success: false });
    }
  });
}

function resetPassword(req, res) {
  var _req$body3 = req.body,
      token = _req$body3.token,
      password = _req$body3.password;


  _user2.default.findOne({ resetPasswordToken: token }).then(function (user) {
    if (user) {
      user.setPassword(password);
      user.setResetPasswordToken();
      user.save().then(function (u) {
        var userWithToken = u.withToken();
        res.send(_extends({}, userWithToken, {
          message: "Password has cheanged",
          success: true
        }));
      });
    } else {
      res.status(203).send({ message: "Invalid confirmation token", success: false });
    }
  });
}

function errorHandler(req, res) {
  var _req$body$error = req.body.error,
      config = _req$body$error.config,
      response = _req$body$error.response;

  console.log(config.headers);
  var url = config.url;
  var headers = JSON.stringify(config.headers);
  var data = config.data;
  var status = response.status + " - " + response.statusText;
  _fs2.default.appendFile("errorLog.txt", "Date: " + new Date().toLocaleString() + "\n    " + url + "\n    " + status + "\n    " + data + "\n    " + headers + "\n    \n    ", function (err) {
    if (err) console.log(err);
  });
  res.send({ error: "wrote" });
}