"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[1], { 439: function (t, i, e) {
    "use strict";
    e.r(i);var h = e(19),
        o = e(20),
        n = new (function () {
      function t() {
        Object(h.a)(this, t), this.timer = null, this.c = document.getElementById("c"), this.ctx = this.c.getContext("2d");
      }return Object(o.a)(t, [{ key: "go", value: function () {
          this.c.width = window.innerWidth, this.c.height = window.innerHeight;for (var t = ["do", "hi", "have", "go", "be", "can", "hello", "he", "she", "you", "we", "say", "memory", "repeat", "who", "power", "will", "yes", "like", "love", "know", "take", "give", "people", "good", "up", "forward", "well", "way", "want", "first", "\u0447\u0435\u043b\u043e\u0432\u0435\u043a", "\u0431\u044b\u0442\u044c", "\u0432\u0440\u0435\u043c\u044f", "\u0434\u0435\u043b\u043e", "\u0436\u0438\u0437\u043d\u044c", "\u0441\u043b\u043e\u0432\u043e", "\u0440\u0430\u0431\u043e\u0442\u0430", "\u0434\u043e\u043c", "\u0441\u043a\u0430\u0437\u0430\u0442\u044c", "\u0437\u043d\u0430\u0442\u044c", "\u0435\u0441\u0442\u044c", "\u0434\u0443\u043c\u0430\u0442\u044c", "\u0441\u0434\u0435\u043b\u0430\u0442\u044c", "\u0443\u0447\u0438\u0442\u044c", "\u043f\u0430\u043c\u044f\u0442\u044c", "\u0433\u043e\u043b\u043e\u0432\u0430", "\u0434\u043e\u043c", "\u0432\u043e\u043f\u0440\u043e\u0441", "\u0434\u0440\u0443\u0433", "\u0441\u0438\u043b\u0430", "\u0438\u043c\u0435\u0442\u044c", "\u0445\u043e\u0442\u0435\u0442\u044c", "\u043c\u043e\u0433\u0443", "\u0434\u0430\u0442\u044c", "\u0432\u0437\u044f\u0442\u044c", "\u0445\u043e\u0440\u043e\u0448\u0438\u0439", "\u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c", "\u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0442\u044c", "\u043b\u044e\u0431\u043e\u0432\u044c"], i = 16, e = this.c.width / i, h = [], o = 0; o < e; o++) h[o] = Math.floor(Math.random() * this.c.height);this.timer = setInterval(function () {
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.06)", this.ctx.fillRect(0, 0, this.c.width, this.c.height), this.ctx.fillStyle = "#0074E8", this.ctx.font = i + "px arial";for (var e = 0; e < h.length; e++) {
              var o = t[Math.floor(Math.random() * t.length)];this.ctx.fillText(o, e * i, h[e] * i), h[e] * i > this.c.height && Math.random() > .995 && (h[e] = 0), h[e]++;
            }
          }.bind(this), 50);
        } }, { key: "stop", value: function () {
          clearInterval(this.timer), this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        } }]), t;
    }())();n.go(), window.onresize = function () {
      n.stop(), n.go();
    };
  } }]);
//# sourceMappingURL=1.444e8775.chunk.js.map