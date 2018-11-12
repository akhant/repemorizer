class CanvasAnimation {
  constructor() {
    this.timer = null;
    this.c = document.getElementById("c");
    this.ctx = this.c.getContext("2d");
  }

  go() {
    this.c.width = window.innerWidth;
    this.c.height = window.innerHeight - 14;

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
    //matrix = matrix.split("");
    const font_size = 16;
    //const magic = 25
    let columns = this.c.width / font_size;
    let drops = [];

    for (let x = 0; x < columns; x++)
      drops[x] = Math.floor(Math.random() * this.c.height);
    //drops[x] = Math.floor(Math.random() * magic);

    function draw() {
      //let font_size = Math.floor(Math.random() * magic);
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      this.ctx.fillRect(0, 0, this.c.width, this.c.height);

      this.ctx.fillStyle = "#0074E8";
      this.ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        let text = matrixWords[Math.floor(Math.random() * matrixWords.length)];

        this.ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > this.c.height && Math.random() > 0.995)
          drops[i] = 0;

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

const anim = new CanvasAnimation();
anim.go();

window.onresize = function () {
  anim.stop();
  anim.go();
};




/* const fun = function() {

  let c = document.getElementById("c");
 
  let ctx = c.getContext("2d");

  

  c.width = window.innerWidth;
  c.height = window.innerHeight - 7;

  // let matrix =
  //  "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%æøåλςερτυθιοπαλδξφγηκζψχωβνμףשךגלכיגלחוראט-'ןםפץתצמנהבסかあさたらまらゆむるつふうくすしせきえねほもよめみちをわ";
  

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
    "first"
  ];
  //matrix = matrix.split("");
  const font_size = 16;
  //const magic = 25
  let columns = c.width / font_size;
  let drops = [];

  for (let x = 0; x < columns; x++)
    drops[x] = Math.floor(Math.random() * c.height);
  //drops[x] = Math.floor(Math.random() * magic);

  function draw() {
    //let font_size = Math.floor(Math.random() * magic);
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0074E8";
    ctx.font = font_size + "px arial";

    for (let i = 0; i < drops.length; i++) {
      let text = matrixWords[Math.floor(Math.random() * matrixWords.length)];

      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > c.height && Math.random() > 0.995)
        drops[i] = 0;

      drops[i]++;
    }
  }


  this.timer = setInterval(draw, 50);
 
} */


/* (function() {
  function sendNotification(title, options) {
// Проверим, поддерживает ли браузер HTML5 Notifications
if (!("Notification" in window)) {
alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
}

// Проверим, есть ли права на отправку уведомлений
else if (Notification.permission === "granted") {
// Если права есть, отправим уведомление
let notification = new Notification(title, options);

function clickFunc() { alert('Пользователь кликнул на уведомление'); }

notification.onclick = clickFunc;
}

// Если прав нет, пытаемся их получить
else if (Notification.permission !== 'denied') {
Notification.requestPermission(function (permission) {
// Если права успешно получены, отправляем уведомление
if (permission === "granted") {
let notification = new Notification(title, options);

} else {
alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
}
});
} else {
// Пользователь ранее отклонил наш запрос на показ уведомлений
// В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
}



sendNotification('Верните Линуса!', {
body: 'Тестирование HTML5 Notifications',
icon: 'icon.jpg',
dir: 'auto'
});

})(); */
