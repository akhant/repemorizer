(function () {
  // notification prototype
  function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
      console.log("Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.");
    }

    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
      // Если права есть, отправим уведомление
      const notification = new Notification(title, options);

      function clickFunc() {
        alert("Пользователь кликнул на уведомление");
      }

      notification.onclick = clickFunc;
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(permission => {
        // Если права успешно получены, отправляем уведомление
        if (permission === "granted") {
          const notification = new Notification(title, options);
        } else {
          alert("Вы запретили показывать уведомления"); // Юзер отклонил наш запрос на показ уведомлений
        }
      });
    } else {
      // Пользователь ранее отклонил наш запрос на показ уведомлений
      // В этом месте мы можем, но не будем его беспокоить. Уважайте решения своих пользователей.
    }
  }

  sendNotification("Верните Линуса!", {
    body: "Тестирование HTML5 Notifications",
    icon: "icon.jpg",
    dir: "auto"
  });
}());
