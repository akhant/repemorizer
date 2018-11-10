(function() {
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  c.width = window.innerWidth;

  //c.height = window.innerHeight;

  var matrix =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%æøåλςερτυθιοπαλδξφγηκζψχωβνμףשךגלכיגלחוראט-'ןםפץתצמנהבסかあさたらまらゆむるつふうくすしせきえねほもよめみちをわ";
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
  matrix = matrix.split("");

  var font_size = 15;
  var columns = c.width / font_size;
  var drops = [];

  for (var x = 0; x < columns; x++) drops[x] = 1;

  function draw() {
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0074E8";
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {
      var text = matrixWords[Math.floor(Math.random() * matrixWords.length)];

      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > c.height && Math.random() > 0.985)
        drops[i] = 0;

      drops[i]++;
    }
  }

  setInterval(draw, 50);
})();

/* (function() {
  function sendNotification(title, options) {
// Проверим, поддерживает ли браузер HTML5 Notifications
if (!("Notification" in window)) {
alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
}

// Проверим, есть ли права на отправку уведомлений
else if (Notification.permission === "granted") {
// Если права есть, отправим уведомление
var notification = new Notification(title, options);

function clickFunc() { alert('Пользователь кликнул на уведомление'); }

notification.onclick = clickFunc;
}

// Если прав нет, пытаемся их получить
else if (Notification.permission !== 'denied') {
Notification.requestPermission(function (permission) {
// Если права успешно получены, отправляем уведомление
if (permission === "granted") {
var notification = new Notification(title, options);

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
