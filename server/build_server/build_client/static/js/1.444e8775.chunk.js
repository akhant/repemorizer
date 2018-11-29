"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[1], { 439: function _(t, i, e) {
    "use strict";
    e.r(i);var h = e(19),
        o = e(20),
        n = new (function () {
      function t() {
        Object(h.a)(this, t), this.timer = null, this.c = document.getElementById("c"), this.ctx = this.c.getContext("2d");
      }return Object(o.a)(t, [{ key: "go", value: function value() {
          this.c.width = window.innerWidth, this.c.height = window.innerHeight;for (var t = ["do", "hi", "have", "go", "be", "can", "hello", "he", "she", "you", "we", "say", "memory", "repeat", "who", "power", "will", "yes", "like", "love", "know", "take", "give", "people", "good", "up", "forward", "well", "way", "want", "first", "\u0447\u0435\u043B\u043E\u0432\u0435\u043A", "\u0431\u044B\u0442\u044C", "\u0432\u0440\u0435\u043C\u044F", "\u0434\u0435\u043B\u043E", "\u0436\u0438\u0437\u043D\u044C", "\u0441\u043B\u043E\u0432\u043E", "\u0440\u0430\u0431\u043E\u0442\u0430", "\u0434\u043E\u043C", "\u0441\u043A\u0430\u0437\u0430\u0442\u044C", "\u0437\u043D\u0430\u0442\u044C", "\u0435\u0441\u0442\u044C", "\u0434\u0443\u043C\u0430\u0442\u044C", "\u0441\u0434\u0435\u043B\u0430\u0442\u044C", "\u0443\u0447\u0438\u0442\u044C", "\u043F\u0430\u043C\u044F\u0442\u044C", "\u0433\u043E\u043B\u043E\u0432\u0430", "\u0434\u043E\u043C", "\u0432\u043E\u043F\u0440\u043E\u0441", "\u0434\u0440\u0443\u0433", "\u0441\u0438\u043B\u0430", "\u0438\u043C\u0435\u0442\u044C", "\u0445\u043E\u0442\u0435\u0442\u044C", "\u043C\u043E\u0433\u0443", "\u0434\u0430\u0442\u044C", "\u0432\u0437\u044F\u0442\u044C", "\u0445\u043E\u0440\u043E\u0448\u0438\u0439", "\u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C", "\u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C", "\u043B\u044E\u0431\u043E\u0432\u044C"], i = 16, e = this.c.width / i, h = [], o = 0; o < e; o++) {
            h[o] = Math.floor(Math.random() * this.c.height);
          }this.timer = setInterval(function () {
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.06)", this.ctx.fillRect(0, 0, this.c.width, this.c.height), this.ctx.fillStyle = "#0074E8", this.ctx.font = i + "px arial";for (var e = 0; e < h.length; e++) {
              var o = t[Math.floor(Math.random() * t.length)];this.ctx.fillText(o, e * i, h[e] * i), h[e] * i > this.c.height && Math.random() > .995 && (h[e] = 0), h[e]++;
            }
          }.bind(this), 50);
        } }, { key: "stop", value: function value() {
          clearInterval(this.timer), this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        } }]), t;
    }())();n.go(), window.onresize = function () {
      n.stop(), n.go();
    };
  } }]);
//# sourceMappingURL=1.444e8775.chunk.js.map