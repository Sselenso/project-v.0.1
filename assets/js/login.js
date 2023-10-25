document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    // Проверка логина и пароля для администратора
    if (login === 'admin' && password === 'admin') {
      window.location.href = './main.html';
      return;
    }

    // Хэширование пароля для обычных пользователей
    // var hash = sha256(password);

    // Отправка данных на сервер
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (xhr.responseText === 'success') {
            window.location.href = './main.html';
          } else {
            document.querySelector('.error-message').innerHTML = 'Invalid login or password.';
            document.querySelector('.error-message').style.display = 'block';
          }
        }
      }
    };
    xhr.send('login=' + encodeURIComponent(login) + '&password=' + encodeURIComponent(password));
  });
});
