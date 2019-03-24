export const isError = errors => Object.values(errors).some(val => val !== "");

export const showNotification = (title, options) => {
  const HOST = process.env.NODE_ENV === "development"
      ? "http://localhost:8000/repeat"
      : "https://repemorizer.herokuapp.com";

  // Проверим, поддерживает ли браузер HTML5 Notifications
  if (!("Notification" in window)) {
    console.log("Ваш браузер не поддерживает HTML Notifications");
  }

  // Проверим, есть ли права на отправку уведомлений
  else if (Notification.permission === "granted") {
    // Если права есть, отправим уведомление
    const notification = new Notification(title, options);

    function clickFunc() {
      window.location = `${HOST}/repeat`;
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
};
