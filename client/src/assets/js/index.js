class CanvasAnimation {
  constructor() {
    this.timer = null;
    this.c = document.getElementById("c");
    this.ctx = this.c.getContext("2d");
  }

  go() {
    this.c.width = window.innerWidth;
    this.c.height = window.innerHeight;

    const matrixWords = [
      "do",
      "hi",
      "have",
      "go",
      "be",
      "can",
      "hello",
      "he",
      "she",
      "you",
      "we",
      "say",
      "memory",
      "repeat",
      "who",
      "power",
      "will",
      "yes",
      "like",
      "love",
      "know",
      "take",
      "give",
      "people",
      "good",
      "up",
      "forward",
      "well",
      "way",
      "want",
      "first",
      "человек",
      "быть",
      "время",
      "дело",
      "жизнь",
      "слово",
      "работа",
      "дом",
      "сказать",
      "знать",
      "есть",
      "думать",
      "сделать",
      "учить",
      "память",
      "голова",
      "дом",
      "вопрос",
      "друг",
      "сила",
      "иметь",
      "хотеть",
      "могу",
      "дать",
      "взять",
      "хороший",
      "понимать",
      "запоминать",
      "любовь"
    ];

    const font_size = 16;

    const columns = this.c.width / font_size;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = Math.floor(Math.random() * this.c.height);

    function draw() {
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      this.ctx.fillRect(0, 0, this.c.width, this.c.height);

      this.ctx.fillStyle = "#0074E8";
      this.ctx.font = `${font_size}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixWords[Math.floor(Math.random() * matrixWords.length)];

        this.ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > this.c.height && Math.random() > 0.995) drops[i] = 0;

        drops[i]++;
      }
    }

    this.timer = setInterval(draw.bind(this), 50);
  }

  stop() {
    clearInterval(this.timer);
    this.ctx.clearRect(0, 0, this.c.width, this.c.height);
  }
}

if (document.getElementById("c")) {
  const anim = new CanvasAnimation();
  anim.go();

  window.onresize = function () {
    anim.stop();
    anim.go();
  };
}
