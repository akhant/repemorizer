"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 213: function _(e, t, a) {
    e.exports = a(430);
  }, 428: function _(e, t, a) {}, 430: function _(e, t, a) {
    "use strict";
    a.r(t);var n = {};a.r(n), a.d(n, "translateRequest", function () {
      return L;
    }), a.d(n, "getFifty", function () {
      return H;
    }), a.d(n, "getDictionary", function () {
      return U;
    }), a.d(n, "removeText", function () {
      return F;
    }), a.d(n, "getWordsToRepeat", function () {
      return z;
    }), a.d(n, "checkWordsToRepeat", function () {
      return V;
    }), a.d(n, "nextStage", function () {
      return Y;
    }), a.d(n, "signup", function () {
      return J;
    }), a.d(n, "fetchCurrentUser", function () {
      return B;
    }), a.d(n, "logout", function () {
      return K;
    }), a.d(n, "login", function () {
      return X;
    }), a.d(n, "forgotPassword", function () {
      return q;
    }), a.d(n, "resetPassword", function () {
      return Q;
    }), a.d(n, "clearMessage", function () {
      return Z;
    });var r = a(0),
        o = a.n(r),
        l = a(59),
        c = a.n(l),
        s = a(450),
        i = a(451),
        u = a(449),
        d = a(17),
        m = a(183),
        p = a.n(m),
        h = a(49),
        f = a(201),
        v = [25e3, 12e4, 6e5, 36e5, 18e6, 864e5, 432e6, 216e7, 108e8, 648e8],
        g = [{ text: "Azerbaijan", value: "az" }, { text: "Albanian", value: "sq" }, { text: "Amharic", value: "am" }, { text: "English", value: "en" }, { text: "Arabic", value: "ar" }, { text: "Armenian", value: "hy" }, { text: "Afrikaans", value: "af" }, { text: "Basque", value: "eu" }, { text: "Bashkir", value: "ba" }, { text: "Belarusian", value: "be" }, { text: "Bengali", value: "bn" }, { text: "Burmese", value: "my" }, { text: "Bulgarian", value: "bg" }, { text: "Bosnian", value: "bs" }, { text: "Welsh", value: "cy" }, { text: "Hungarian", value: "hu" }, { text: "Vietnamese", value: "vi" }, { text: "Haitian (Creole)", value: "ht" }, { text: "Galician", value: "gl" }, { text: "Dutch", value: "nl" }, { text: "Hill Mari", value: "mrj" }, { text: "Greek", value: "el" }, { text: "Georgian", value: "ka" }, { text: "Gujarati", value: "gu" }, { text: "Danish", value: "da" }, { text: "Hebrew", value: "he" }, { text: "Yiddish", value: "yi" }, { text: "Indonesian", value: "id" }, { text: "Irish", value: "ga" }, { text: "Italian", value: "it" }, { text: "Icelandic", value: "is" }, { text: "Spanish", value: "es" }, { text: "Kazakh", value: "kk" }, { text: "Kannada", value: "kn" }, { text: "Catalan", value: "ca" }, { text: "Kyrgyz", value: "ky" }, { text: "Chinese", value: "zh" }, { text: "Korean", value: "ko" }, { text: "Xhosa", value: "xh" }, { text: "Khmer", value: "km" }, { text: "Laotian", value: "lo" }, { text: "Latin", value: "la" }, { text: "Latvian", value: "lv" }, { text: "Lithuanian", value: "lt" }, { text: "Luxembourgish", value: "lb" }, { text: "Malagasy", value: "mg" }, { text: "Malay", value: "ms" }, { text: "Malayalam", value: "ml" }, { text: "Maltese", value: "mt" }, { text: "Macedonian", value: "mk" }, { text: "Maori", value: "mi" }, { text: "Marathi", value: "mr" }, { text: "Mari", value: "mhr" }, { text: "Mongolian", value: "mn" }, { text: "German", value: "de" }, { text: "Nepali", value: "ne" }, { text: "Norwegian", value: "no" }, { text: "Punjabi", value: "pa" }, { text: "Papiamento", value: "pap" }, { text: "Persian", value: "fa" }, { text: "Polish", value: "pl" }, { text: "Portuguese", value: "pt" }, { text: "Romanian", value: "ro" }, { text: "Russian", value: "ru" }, { text: "Cebuano", value: "ceb" }, { text: "Serbian", value: "sr" }, { text: "Sinhala", value: "si" }, { text: "Slovakian", value: "sk" }, { text: "Slovenian", value: "sl" }, { text: "Swahili", value: "sw" }, { text: "Sundanese", value: "su" }, { text: "Tajik", value: "tg" }, { text: "Thai", value: "th" }, { text: "Tagalog", value: "tl" }, { text: "Tamil", value: "ta" }, { text: "Tatar", value: "tt" }, { text: "Telugu", value: "te" }, { text: "Turkish", value: "tr" }, { text: "Udmurt", value: "udm" }, { text: "Uzbek", value: "uz" }, { text: "Ukrainian", value: "uk" }, { text: "Urdu", value: "ur" }, { text: "Finnish", value: "fi" }, { text: "French", value: "fr" }, { text: "Hindi", value: "hi" }, { text: "Croatian", value: "hr" }, { text: "Czech", value: "cs" }, { text: "Swedish", value: "sv" }, { text: "Scottish", value: "gd" }, { text: "Estonian", value: "et" }, { text: "Esperanto", value: "eo" }, { text: "Javanese", value: "jv" }, { text: "Japanese", value: "ja" }],
        E = a(16),
        b = Object(h.c)({ dictionary: function dictionary() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.data;switch (a) {case "TRANSLATE":
            return e.every(function (e) {
              return !e || e._id !== n._id;
            }) ? Object(f.a)(e).concat([n]) : e;case "GET_FIFTY":case "GET_DICTIONARY":
            if (n.dictionary) return n.dictionary;break;case "REMOVE_TEXT":
            return e.filter(function (e) {
              return e._id !== n.removedElement._id;
            });case "CHECK_WORDS_TO_REPEAT":
            return n.updatedDictionary;case "LOGOUT":
            return [];default:
            return e;}
      }, words: function words() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.data;switch (a) {case "GET_WORDS_TO_REPEAT":
            return n.wordsToRepeat;case "CHECK_WORDS_TO_REPEAT":
            return n.updatedDictionary.filter(function (e) {
              return !0 === e.isRepeatTime;
            });case "NEXT_STAGE":
            return e.map(function (e) {
              return e._id === n.updatedWord._id ? n.updatedWord : e;
            });case "LOGOUT":
            return [];default:
            return e;}
      }, user: function user() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.data;switch (a) {case "USER_LOGGED_IN":
            return Object(E.a)({}, e, n.user);case "LOGOUT":
            return localStorage.removeItem("JWT"), {};default:
            return e;}
      }, messages: function messages() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.data;switch (a) {case "SHOW_MESSAGE":
            return Object(E.a)({}, e, n);case "CLEAR_MESSAGE":
            return {};default:
            return e;}
      } }),
        y = a(18),
        O = a.n(y);function w(e) {
      e ? O.a.defaults.headers.common.authorization = "Bearer ".concat(e) : delete O.a.defaults.headers.common.authorization;
    }var x = "http://localhost:3000/api",
        _ = function _(e) {
      return function (e) {
        return function (t) {
          var a = t.type,
              n = t.payload;switch (a) {case "TRANSLATE":
              return O.a.post("".concat(x, "/translate"), Object(E.a)({}, n)).then(function (t) {
                return e({ type: "TRANSLATE", data: Object(E.a)({}, t.data) });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "GET_FIFTY":
              return O.a.get("".concat(x, "/get_fifty")).then(function (t) {
                return e({ type: "GET_FIFTY", data: { dictionary: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "GET_DICTIONARY":
              return O.a.get("".concat(x, "/get_dictionary")).then(function (t) {
                return e({ type: "GET_DICTIONARY", data: { dictionary: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "REMOVE_TEXT":
              return O.a.post("".concat(x, "/remove_text"), { id: n }).then(function (t) {
                return e({ type: "REMOVE_TEXT", data: { removedElement: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "GET_WORDS_TO_REPEAT":
              return O.a.get("".concat(x, "/get_words_to_repeat")).then(function (t) {
                return e({ type: "GET_WORDS_TO_REPEAT", data: { wordsToRepeat: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "CHECK_WORDS_TO_REPEAT":
              return O.a.patch("".concat(x, "/check_words_to_repeat")).then(function (t) {
                return e({ type: "CHECK_WORDS_TO_REPEAT", data: { updatedDictionary: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "NEXT_STAGE":
              return O.a.patch("".concat(x, "/next_stage"), Object(E.a)({}, n)).then(function (t) {
                return e({ type: "NEXT_STAGE", data: { updatedWord: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "SIGNUP":
              return O.a.post("".concat(x, "/signup"), Object(E.a)({}, n)).then(function (t) {
                var a = t.data,
                    n = a.token;a.message && e({ type: "SHOW_MESSAGE", data: Object(E.a)({}, t.data) }), n && (localStorage.JWT = n, w(n), e({ type: "USER_LOGGED_IN", data: { user: t.data } }));
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "FETCH_CURRENT_USER":
              return O.a.get("".concat(x, "/fetch_current_user")).then(function (t) {
                e({ type: "USER_LOGGED_IN", data: { user: t.data } });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "LOGIN":
              return O.a.post("".concat(x, "/login"), Object(E.a)({}, n)).then(function (t) {
                var a = t.data,
                    n = a.token;a.message && e({ type: "SHOW_MESSAGE", data: Object(E.a)({}, t.data) }), n && (localStorage.JWT = n, w(n), e({ type: "USER_LOGGED_IN", data: { user: t.data } }));
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "FORGOT_PASSWORD":
              return O.a.post("".concat(x, "/forgot_password"), Object(E.a)({}, n)).then(function (t) {
                if (t.data.message) return e({ type: "SHOW_MESSAGE", data: Object(E.a)({}, t.data) });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });case "RESET_PASSWORD":
              return O.a.post("".concat(x, "/reset_password"), Object(E.a)({}, n)).then(function (t) {
                if (t.data.message) return e({ type: "SHOW_MESSAGE", data: Object(E.a)({}, t.data) });
              }).catch(function (e) {
                return O.a.post("".concat(x, "/error"), { error: e });
              });default:
              return e(t);}
        };
      };
    };var T = a(37),
        S = a(19),
        j = a(20),
        R = a(22),
        C = a(21),
        N = a(23),
        A = a(445),
        k = a(440),
        G = a(441),
        W = a(179),
        D = a(444),
        P = a(438),
        I = a(184),
        M = a.n(I),
        L = function L(e, t) {
      return { type: "TRANSLATE", payload: { text: e, lang: t } };
    },
        H = function H() {
      return { type: "GET_FIFTY" };
    },
        U = function U() {
      return { type: "GET_DICTIONARY" };
    },
        F = function F(e) {
      return { type: "REMOVE_TEXT", payload: e };
    },
        z = function z() {
      return { type: "GET_WORDS_TO_REPEAT" };
    },
        V = function V() {
      return { type: "CHECK_WORDS_TO_REPEAT" };
    },
        Y = function Y(e, t) {
      return { type: "NEXT_STAGE", payload: { _id: e, success: t } };
    },
        J = function J(e) {
      return { type: "SIGNUP", payload: e };
    },
        B = function B() {
      return { type: "FETCH_CURRENT_USER" };
    },
        K = function K() {
      return { type: "LOGOUT" };
    },
        X = function X(e) {
      return { type: "LOGIN", payload: e };
    },
        q = function q(e) {
      return { type: "FORGOT_PASSWORD", payload: e };
    },
        Q = function Q(e) {
      return { type: "RESET_PASSWORD", payload: e };
    },
        Z = function Z() {
      return { type: "CLEAR_MESSAGE" };
    },
        $ = function $(e) {
      var t = e.text,
          a = e.translation,
          n = e._id;return o.a.createElement("div", { className: "card__word" }, o.a.createElement("div", { className: "card__word_text" }, o.a.createElement("span", { className: "lang1" }, t), " ", o.a.createElement(W.a, { color: "black", name: "caret right" }), " ", o.a.createElement("span", { className: "lang2" }, a)), o.a.createElement(W.a, { name: "x", className: "card__word_button", onClick: e.onRemoveText(n), color: "red" }));
    },
        ee = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).componentDidMount = function () {
          a.props.getFifty();
        }, a.onRemoveText = function (e) {
          return function () {
            a.props.removeText(e);
          };
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this,
              t = this.props.dictionary;return o.a.createElement("div", { className: "last-words" }, o.a.createElement("div", { className: "card" }, o.a.createElement("div", { className: "card__body" }, t.map(function (t) {
            return o.a.createElement($, Object.assign({ onRemoveText: e.onRemoveText, key: t._id }, t));
          }))), o.a.createElement("div", null));
        } }]), t;
    }(r.Component),
        te = Object(d.b)(null, { removeText: F, getFifty: H })(ee),
        ae = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { formValue: "", translation: "", lang: { from: "en", to: "ru" }, word: "", hidden: !1 }, a.componentDidMount = function () {
          var e = a.props,
              t = e.checkWordsToRepeat,
              n = e.getWordsToRepeat;t(), n(), window.innerWidth < 768 && a.setState({ hidden: !0 });
        }, a.onChangeInput = function (e) {
          a.setState({ formValue: e.target.value });
        }, a.onSubmit = function (e) {
          e.preventDefault();var t = a.props.translateRequest,
              n = a.state,
              r = n.formValue,
              o = n.lang;if (r) return r.length > 300 ? a.setState(function (e) {
            return { formValue: e.formValue.slice(0, 300) };
          }, function () {
            t(r);
          }) : void t(r, o);
        }, a.onSelectLanguage = function (e, t) {
          var n = t.value,
              r = t.name;a.setState({ lang: Object(E.a)({}, a.state.lang, Object(T.a)({}, r, n)) });
        }, a.turnLang = function () {
          a.setState(function (e) {
            return { lang: { from: e.lang.to, to: e.lang.from } };
          });
        }, a.renderTranslatedFromAnotherLanguage = function () {
          var e = a.state,
              t = e.word,
              n = e.lang;if (t && t.langFrom !== n.from) return o.a.createElement("div", { className: "message_translated-from" }, "Translated from", " ", M.a.find(g, function (e) {
            return e.value === t.langFrom;
          }).text);
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "componentDidUpdate", value: function value(e) {
          var t = this.props.dictionary;t && this.state.formValue && t.length && t.length !== e.dictionary.length && this.setState({ translation: t[t.length - 1].translation, word: t[t.length - 1] });
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.state,
              a = t.formValue,
              n = t.translation,
              r = t.lang,
              l = t.hidden,
              c = this.props,
              s = c.dictionary,
              i = c.words;return o.a.createElement(A.a, { className: "main-page" }, o.a.createElement(A.a.Row, null, o.a.createElement(A.a.Column, { mobile: 16, tablet: 9, computer: 11, largeScreen: 12, widescreen: 12, style: { paddingTop: "70px" } }, o.a.createElement(k.a, { onSubmit: this.onSubmit, method: "POST" }, o.a.createElement(k.a.Group, { className: "lang" }, o.a.createElement(G.a, { search: !0, selection: !0, onChange: this.onSelectLanguage, placeholder: "From", value: r.from, name: "from", options: g }), o.a.createElement(W.a, { onClick: this.turnLang, name: "arrows alternate horizontal", size: "large", className: "turn-lang-icon" }), o.a.createElement(G.a, { search: !0, selection: !0, onChange: this.onSelectLanguage, placeholder: "To", name: "to", value: r.to, options: g })), o.a.createElement(k.a.Group, { widths: "equal", inline: !0, className: "main__input" }, o.a.createElement(k.a.Field, { className: "main__input_text", value: a, onChange: this.onChangeInput, control: "input", placeholder: "Enter word to translate" }), o.a.createElement(D.a, { type: "sumbit", className: "main__btn_translate", primary: !0 }, "Translate")), o.a.createElement("div", { className: "main__output" }, o.a.createElement("div", { className: "main__output_translation" }, n), this.renderTranslatedFromAnotherLanguage()))), o.a.createElement(A.a.Column, { mobile: 16, tablet: 7, computer: 5, largeScreen: 4, widescreen: 4 }, o.a.createElement("div", { className: "main__button-turn_wrapper" }, o.a.createElement(D.a, { className: "main__button-turn", onClick: function onClick() {
              e.setState(function (e) {
                return { hidden: !e.hidden };
              });
            } }, "Last words")), !l && o.a.createElement(te, { dictionary: s }))), i.length ? o.a.createElement("div", { className: "main__link_repeat" }, o.a.createElement("span", null, "You have ", i.length, " words to repeat"), o.a.createElement(W.a, { name: "long arrow alternate right" }), o.a.createElement(P.a, { to: "/repeat" }, " Repeat words")) : o.a.createElement("div", null));
        } }]), t;
    }(r.Component),
        ne = Object(d.b)(function (e) {
      return { dictionary: e.dictionary, words: e.words };
    }, Object(E.a)({}, n))(ae),
        re = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { path: "" }, a.onLogout = function () {
          a.props.logout();
        }, a.renderColorStyle = function () {
          return { color: "#fff " };
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.user.token;return o.a.createElement(A.a, null, o.a.createElement(A.a.Row, { className: "head" }, o.a.createElement(A.a.Column, { mobile: 16, tablet: 9, computer: 7, largeScreen: 6, widescreen: 4, floated: "right" }, e ? o.a.createElement("div", { role: "button", style: this.renderColorStyle(), className: "logout-link", onClick: this.onLogout }, "Logout") : o.a.createElement("span", { style: { color: "#474749" } }, o.a.createElement(P.a, { style: this.renderColorStyle(), to: "/login" }, "Login"), " ", "|", o.a.createElement(P.a, { style: this.renderColorStyle(), to: "/signup" }, " ", "Signup")), "|", " ", o.a.createElement(P.a, { style: this.renderColorStyle(), to: "/dashboard" }, "Dashboard"), " ", "|", o.a.createElement(P.a, { style: this.renderColorStyle(), to: "/dictionary" }, "Dictionary"), " ", "|", o.a.createElement(P.a, { style: this.renderColorStyle(), to: "/repeat" }, "Repeat"))));
        } }]), t;
    }(r.Component),
        oe = Object(d.b)(function (e) {
      return { user: e.user };
    }, { logout: K })(re),
        le = a(443),
        ce = a(448),
        se = a(447),
        ie = a(34),
        ue = function ue(e) {
      return Object.values(e).some(function (e) {
        return "" !== e;
      });
    },
        de = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { data: { email: "", password: "" }, errors: { email: "", password: "" } }, a.componentDidMount = function () {
          a.props.logout();
        }, a.componentWillUnmount = function () {
          a.props.clearMessage();
        }, a.componentDidUpdate = function () {
          var e = a.props,
              t = e.history;e.messages.success && (a.timer = setTimeout(function () {
            t.push("/dashboard");
          }, 1e3));
        }, a.inputHandler = function (e) {
          a.setState({ data: Object(E.a)({}, a.state.data, Object(T.a)({}, e.target.name, e.target.value)) });
        }, a.onSubmit = function (e) {
          var t = a.state.data;a.setState({ errors: {} }, function () {
            a.validate(t) && a.props.login(t);
          });
        }, a.validate = function (e) {
          var t = {};return Object(ie.isEmail)(e.email) && e.email || (t.email = "Not valid email"), (!Object(ie.isAlphanumeric)(e.password) || e.password.length < 4 || e.password.length > 16) && (t.password = "Not valid password"), a.setState({ errors: Object(E.a)({}, t) }), "{}" === JSON.stringify(t);
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.messages,
              t = this.state,
              a = t.errors,
              n = t.data,
              r = Object.values(a);return o.a.createElement("div", { className: "login-form" }, o.a.createElement(A.a, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" }, o.a.createElement(A.a.Column, { style: { maxWidth: 450 } }, e.message && o.a.createElement(le.a, { color: e.success ? "green" : "red" }, e.message), ue(a) && r.map(function (e, t) {
            return o.a.createElement(le.a, { key: t, negative: !0 }, e);
          }), o.a.createElement(ce.a, { as: "h2", color: "teal", textAlign: "center" }, "Log in"), o.a.createElement(k.a, { onSubmit: this.onSubmit, size: "large" }, o.a.createElement(se.a, { stacked: !0 }, o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.email, fluid: !0, name: "email", icon: "mail", iconPosition: "left", placeholder: "E-mail address" }), o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.password, fluid: !0, name: "password", icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }), o.a.createElement(D.a, { type: "submit", color: "teal", fluid: !0, size: "large" }, "LOG IN!"))), o.a.createElement(le.a, null, o.a.createElement(P.a, { to: "/forgot_password" }, "forgot password?")))));
        } }]), t;
    }(r.PureComponent),
        me = Object(d.b)(function (e) {
      return { user: e.user, messages: e.messages };
    }, { login: X, clearMessage: Z, logout: K })(de),
        pe = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { data: { email: "", password: "", password2: "", username: "" }, errors: { email: "", password: "", username: "" } }, a.componentDidMount = function () {
          a.props.logout();
        }, a.componentDidUpdate = function () {
          var e = a.props,
              t = e.history;e.messages.success && (a.timer = setTimeout(function () {
            t.push("/dashboard");
          }, 3e3));
        }, a.componentWillUnmount = function () {
          clearTimeout(a.timer), a.props.clearMessage();
        }, a.inputHandler = function (e) {
          a.setState({ data: Object(E.a)({}, a.state.data, Object(T.a)({}, e.target.name, e.target.value)) });
        }, a.onSubmit = function (e) {
          var t = a.state.data;a.setState({ errors: {} }, function () {
            a.validate(t) && a.props.signup(t);
          });
        }, a.validate = function (e) {
          var t = {};return e.username && Object(ie.isAlphanumeric)(e.username) || (t.username = "Not valid username"), Object(ie.isEmail)(e.email) && e.email || (t.email = "Not valid email"), e.password !== e.password2 && (t.password = "Not equal passwords"), (!Object(ie.isAlphanumeric)(e.password) || e.password.length < 4 || e.password.length > 16) && (t.password = "Not valid password"), a.setState({ errors: Object(E.a)({}, t) }), "{}" === JSON.stringify(t);
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.messages,
              t = this.state,
              a = t.errors,
              n = t.data,
              r = Object.values(a);return o.a.createElement("div", { className: "signup-form" }, o.a.createElement(A.a, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" }, o.a.createElement(A.a.Column, { style: { maxWidth: 450 } }, e.message && o.a.createElement(le.a, { color: e.success ? "green" : "red" }, e.message), ue(a) && r.map(function (e) {
            return o.a.createElement(le.a, { key: e, negative: !0 }, e);
          }), o.a.createElement(ce.a, { as: "h2", color: "teal", textAlign: "center" }, "Sign up"), o.a.createElement(k.a, { onSubmit: this.onSubmit, size: "large" }, o.a.createElement(se.a, { stacked: !0 }, o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.username, fluid: !0, name: "username", icon: "user", iconPosition: "left", placeholder: "Your name" }), o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.email, fluid: !0, name: "email", icon: "mail", iconPosition: "left", placeholder: "E-mail address" }), o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.password, fluid: !0, name: "password", icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }), o.a.createElement(k.a.Input, { onChange: this.inputHandler, value: n.password2, fluid: !0, name: "password2", icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }), o.a.createElement(D.a, { type: "submit", color: "teal", fluid: !0, size: "large" }, "SIGN UP!"))), o.a.createElement(le.a, null, "Already have account? ", o.a.createElement(P.a, { to: "/login" }, "Log in")))));
        } }]), t;
    }(r.Component),
        he = Object(d.b)(function (e) {
      return { messages: e.messages };
    }, { signup: J, clearMessage: Z, logout: K })(pe),
        fe = a(442),
        ve = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) {
          r[l] = arguments[l];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).componentDidMount = function () {
          a.props.getDictionary(), a.props.getWordsToRepeat();
        }, a.componentWillUnmount = function () {
          a.props.checkWordsToRepeat();
        }, a.updateNextRepeatIn = function () {
          a.props.checkWordsToRepeat();
        }, a.onRemoveClick = function (e) {
          return function () {
            return a.props.removeText(e);
          };
        }, a.renderAddTime = function (e) {
          if (!e) return "";var t = new Date(e);return "".concat(t.toLocaleDateString(), " at ").concat(t.toLocaleTimeString());
        }, a.renderNextRepeatIn = function (e, t, n) {
          if (n) return "Ready to repeat";var r = Math.floor((Date.parse(e) + v[t] - Date.now()) / 1e3);return r > 0 ? a.renderTime(r) : (a.props.checkWordsToRepeat(), "Ready to repeat");
        }, a.renderTime = function (e) {
          var t = "".concat(e % 60, " sec "),
              a = e < 86400 ? "" : "".concat(~~(e / 86400), " d "),
              n = e < 3600 ? "" : "".concat(~~(e / 3600), " h "),
              r = e < 60 ? "" : "".concat(~~(e / 60), " min ");return o.a.createElement("div", { className: "add-time" }, a, " ", n, " ", r, " ", t);
        }, a.renderTable = function () {
          return o.a.createElement(fe.a, { textAlign: "center", celled: !0, selectable: !0 }, o.a.createElement(fe.a.Header, null, o.a.createElement(fe.a.Row, null, o.a.createElement(fe.a.HeaderCell, null, "Text"), o.a.createElement(fe.a.HeaderCell, null, "Translation"), o.a.createElement(fe.a.HeaderCell, null, "Stage"), o.a.createElement(fe.a.HeaderCell, null, "Time added"), o.a.createElement(fe.a.HeaderCell, null, "Next repeat in", " ", o.a.createElement(D.a, { onClick: a.updateNextRepeatIn }, "Update")), o.a.createElement(fe.a.HeaderCell, null, "Remove"))), o.a.createElement(fe.a.Body, null, a.props.dictionary.map(function (e) {
            var t = e.text,
                n = e.translation,
                r = e._id,
                l = e.addTime,
                c = e.stage,
                s = e.lastRepeat,
                i = e.isRepeatTime;return o.a.createElement(fe.a.Row, { key: r }, o.a.createElement(fe.a.Cell, null, t), o.a.createElement(fe.a.Cell, null, n), o.a.createElement(fe.a.Cell, { width: 1 }, c), o.a.createElement(fe.a.Cell, { width: 2 }, a.renderAddTime(l)), o.a.createElement(fe.a.Cell, { width: 2 }, a.renderNextRepeatIn(s, c, i)), o.a.createElement(fe.a.Cell, { width: 1 }, o.a.createElement(W.a, { name: "x", className: "dictionary__button_remove", onClick: a.onRemoveClick(r), color: "red" })));
          })));
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props,
              t = e.dictionary,
              a = e.words;return t.length ? o.a.createElement("div", { className: "dictionary" }, o.a.createElement(A.a, null, o.a.createElement(A.a.Row, null, o.a.createElement(A.a.Column, null, o.a.createElement("h1", null, "Dictionary"))), o.a.createElement(A.a.Row, null, o.a.createElement(A.a.Column, null, o.a.createElement("div", null, "Words in dictionary: ", t.length), o.a.createElement("div", null, "Ready to repeat: ", a.length))), o.a.createElement(A.a.Row, null, o.a.createElement(A.a.Column, null, this.renderTable())))) : o.a.createElement("div", { className: "empty-message" }, "There is no words in your dictionary yet");
        } }]), t;
    }(r.Component),
        ge = Object(d.b)(function (e) {
      return { dictionary: e.dictionary, words: e.words };
    }, Object(E.a)({}, n))(ve),
        Ee = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { flag: "", hidden: !0 }, a.componentDidMount = function () {
          a.setState({ flag: Math.random() > .5 });
        }, a.handleClick = function (e) {
          return function () {
            a.setState({ hidden: !1 }), a.props.showResult(a.props._id, e);
          };
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.state,
              t = e.flag,
              a = e.hidden,
              n = this.props,
              r = n.text,
              l = n.translation;return o.a.createElement("div", { className: "word" }, o.a.createElement("div", { className: "word__text" }, o.a.createElement("span", { className: "word__text_one" }, " ", t ? r : l), o.a.createElement("span", { className: "word__text_translate", hidden: a }, " ", "- ", t ? l : r)), a && o.a.createElement("div", { className: "word__buttons" }, o.a.createElement(D.a, { className: "word__buttons_know", onClick: this.handleClick(!0) }, "I know"), o.a.createElement(D.a, { className: "word__buttons_remind", onClick: this.handleClick(!1) }, "Remind")), !a && o.a.createElement(D.a, { onClick: this.props.nextWord, className: "word__button_next" }, "Next word"));
        } }]), t;
    }(r.Component),
        be = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).componentDidMount = function () {
          a.props.getWordsToRepeat();
        }, a.nextWord = function () {
          a.props.getWordsToRepeat();
        }, a.showResult = function (e, t) {
          a.props.nextStage(e, t);
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.words;return o.a.createElement("div", null, o.a.createElement(A.a, { className: "repeat-page" }, o.a.createElement(A.a.Row, { centered: !0 }, o.a.createElement(A.a.Column, null, o.a.createElement("h1", null, "Memory check!"), o.a.createElement("div", { className: "repeat__list" }, e.length ? o.a.createElement(Ee, { text: e[0].text, translation: e[0].translation, _id: e[0]._id, key: e[0]._id, showResult: this.showResult, nextWord: this.nextWord }) : o.a.createElement("div", { className: "empty-message" }, "There is no words to repeat"))))));
        } }]), t;
    }(r.Component),
        ye = Object(d.b)(function (e) {
      return { words: e.words };
    }, Object(E.a)({}, n))(be);a.e(1).then(a.bind(null, 439));var Oe = function Oe() {
      return o.a.createElement("canvas", { id: "c" });
    },
        we = function we() {
      return o.a.createElement("div", { className: "home-page" }, o.a.createElement(A.a, null, o.a.createElement(A.a.Row, { className: "home-page__header" }, o.a.createElement(A.a.Column, null, o.a.createElement("h1", null, "Repemorizer"), o.a.createElement("h3", null, "Translate, repeat and memorize new words"))), o.a.createElement(A.a.Row, null, o.a.createElement(Oe, null))));
    },
        xe = function (e) {
      function t() {
        return Object(S.a)(this, t), Object(R.a)(this, Object(C.a)(t).apply(this, arguments));
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          return o.a.createElement("div", null, "This page doesn't exist", o.a.createElement("hr", null), o.a.createElement(P.a, { to: "/dashboard" }, "Go to dashboard"));
        } }]), t;
    }(r.Component),
        _e = a(60),
        Te = a(446);var Se = Object(d.b)(function (e) {
      return { isAuthenticated: !!e.user.token };
    })(function (e) {
      var t = e.isAuthenticated,
          a = e.component,
          n = Object(_e.a)(e, ["isAuthenticated", "component"]);return o.a.createElement(u.a, Object.assign({}, n, { render: function render(e) {
          return t ? o.a.createElement(a, e) : o.a.createElement(Te.a, { to: "/confirmation" });
        } }));
    });var je = Object(d.b)(function (e) {
      return { isConfirmed: e.user.confirmed, isAuthenticated: !!e.user.token };
    })(function (e) {
      var t = e.isConfirmed,
          a = e.isAuthenticated;return o.a.createElement(r.Fragment, null, function (e, t) {
        return e ? o.a.createElement("div", { className: "empty-message" }, "You've already confirmed your email. Enjoy the app.") : t ? o.a.createElement("div", { className: "empty-message" }, "Please confirm your email to get access to dictionary and repetition.", o.a.createElement(P.a, { to: "/dashboard" }, " Go to dashboard ")) : o.a.createElement("div", { className: "empty-message" }, "Please sign up or log in");
      }(t, a));
    });var Re = Object(d.b)(function (e) {
      return { isConfirmed: e.user.confirmed };
    })(function (e) {
      var t = e.isConfirmed,
          a = e.component,
          n = Object(_e.a)(e, ["isConfirmed", "component"]);return o.a.createElement(u.a, Object.assign({}, n, { render: function render(e) {
          return t ? o.a.createElement(a, e) : o.a.createElement(Te.a, { to: "/confirmation" });
        } }));
    });var Ce = Object(d.b)(function (e) {
      return { isAuthenticated: !!e.user.token, messages: e.messages };
    })(function (e) {
      var t = e.isAuthenticated,
          a = e.component,
          n = Object(_e.a)(e, ["isAuthenticated", "component"]);return o.a.createElement(u.a, Object.assign({}, n, { render: function render(e) {
          return t ? o.a.createElement(Te.a, { to: "/dashboard" }) : o.a.createElement(a, e);
        } }));
    }),
        Ne = (a(425), a(428), function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { data: { email: "" }, error: { email: "" } }, a.componentDidUpdate = function () {
          var e = a.props,
              t = e.history;e.messages.success && setTimeout(function () {
            t.push("/");
          }, 3e3);
        }, a.componentWillUnmount = function () {
          a.props.clearMessage();
        }, a.emailHandler = function (e) {
          a.setState({ data: { email: e.target.value } });
        }, a.onSubmit = function (e) {
          var t = a.state.data;a.setState({ error: {} }, function () {
            a.validate(t) && a.props.forgotPassword(t);
          });
        }, a.validate = function (e) {
          var t = {};return Object(ie.isEmail)(e.email) || (t.email = "Not valid email"), a.setState({ error: Object(E.a)({}, t) }), !t.email;
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.messages,
              t = this.state,
              a = t.error,
              n = t.data;return o.a.createElement("div", { className: "login-form" }, o.a.createElement(A.a, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" }, o.a.createElement(A.a.Column, { style: { maxWidth: 450 } }, e.message && o.a.createElement(le.a, { color: e.success ? "green" : "red" }, e.message), a.email && o.a.createElement(le.a, { negative: !0 }, a.email), o.a.createElement(ce.a, { as: "h2", color: "teal", textAlign: "center" }, "Forgot password"), o.a.createElement(k.a, { onSubmit: this.onSubmit, size: "large" }, o.a.createElement(se.a, { stacked: !0 }, o.a.createElement(k.a.Input, { onChange: this.emailHandler, value: n.email, fluid: !0, icon: "mail", iconPosition: "left", placeholder: "E-mail address" }), o.a.createElement(D.a, { type: "submit", color: "teal", fluid: !0, size: "large" }, "Send confirmation email!"))))));
        } }]), t;
    }(r.PureComponent)),
        Ae = Object(d.b)(function (e) {
      return { messages: e.messages };
    }, { forgotPassword: q, clearMessage: Z })(Ne),
        ke = function (e) {
      function t() {
        var e, a;Object(S.a)(this, t);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = arguments[o];
        }return (a = Object(R.a)(this, (e = Object(C.a)(t)).call.apply(e, [this].concat(r)))).state = { data: { password1: "", password2: "" }, error: { password: "" } }, a.componentDidUpdate = function () {
          a.props.messages.success && setTimeout(function () {
            a.props.history.push("/login");
          }, 3e3);
        }, a.componentWillUnmount = function () {
          a.props.clearMessage();
        }, a.passwordHandler = function (e) {
          a.setState({ data: Object(E.a)({}, a.state.data, Object(T.a)({}, e.target.name, e.target.value)) });
        }, a.onSubmit = function (e) {
          a.setState({ error: {} }, function () {
            a.validate(a.state.data) && a.props.resetPassword({ token: a.props.match.params.token, password: a.state.data.password1 });
          });
        }, a.validate = function (e) {
          var t = {};return e.password1 !== e.password2 && (t.password = "Not equal passwords"), (!Object(ie.isAlphanumeric)(e.password1) || !Object(ie.isAlphanumeric)(e.password2) || e.password1.length < 4 || e.password1.length > 16 || e.password2.length < 4 || e.password2.length > 16) && (t.password = "Not valid password"), a.setState({ error: Object(E.a)({}, t) }), !t.password;
        }, a;
      }return Object(N.a)(t, e), Object(j.a)(t, [{ key: "render", value: function value() {
          var e = this.props.messages,
              t = this.state,
              a = t.error,
              n = t.data;return o.a.createElement("div", { className: "login-form" }, o.a.createElement(A.a, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" }, o.a.createElement(A.a.Column, { style: { maxWidth: 450 } }, e.message && o.a.createElement(le.a, { color: e.success ? "green" : "red" }, e.message), a.password && o.a.createElement(le.a, { negative: !0 }, a.password), o.a.createElement(ce.a, { as: "h2", color: "teal", textAlign: "center" }, "Reset password"), o.a.createElement(k.a, { onSubmit: this.onSubmit, size: "large" }, o.a.createElement(se.a, { stacked: !0 }, o.a.createElement(k.a.Input, { onChange: this.passwordHandler, value: n.password1, fluid: !0, name: "password1", icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }), o.a.createElement(k.a.Input, { onChange: this.passwordHandler, value: n.password2, fluid: !0, name: "password2", icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }), o.a.createElement(D.a, { type: "submit", color: "teal", fluid: !0, size: "large" }, "Reset password!"))))));
        } }]), t;
    }(r.Component),
        Ge = Object(d.b)(function (e) {
      return { user: e.user, messages: e.messages };
    }, { resetPassword: Q, clearMessage: Z })(ke),
        We = p()(),
        De = Object(h.d)(b, Object(h.a)(_));if (localStorage.JWT) {
      var Pe = We.location.pathname;"/signup" !== Pe && "/login" !== Pe && (w(localStorage.JWT), De.dispatch(B()));
    } else De.dispatch(K());var Ie = function Ie() {
      return o.a.createElement(d.a, { store: De }, o.a.createElement(s.a, { history: We }, o.a.createElement(r.Fragment, null, o.a.createElement(oe, { history: We }), o.a.createElement(i.a, null, o.a.createElement(u.a, { path: "/", exact: !0, component: we }), o.a.createElement(Se, { path: "/dashboard", exact: !0, component: ne }), o.a.createElement(u.a, { path: "/login", exact: !0, component: me }), o.a.createElement(u.a, { path: "/signup", exact: !0, component: he }), o.a.createElement(u.a, { path: "/confirmation", exact: !0, component: je }), o.a.createElement(Re, { path: "/dictionary", exact: !0, component: ge }), o.a.createElement(Re, { path: "/repeat", exact: !0, component: ye }), o.a.createElement(Ce, { path: "/forgot_password", exact: !0, component: Ae }), o.a.createElement(Ce, { path: "/reset_password/:token", component: Ge }), o.a.createElement(u.a, { component: xe })))));
    };c.a.render(o.a.createElement(Ie, null), document.getElementById("root"));
  } }, [[213, 3, 2]]]);
//# sourceMappingURL=main.0db51fdf.chunk.js.map