// Создаём новый элемент h1
const header = document.createElement('h1');

// Добавляем текст в заголовок h1
header.textContent = 'Hello World';

// Удаляем все элементы со страницы, кроме заголовка h1
while (document.body.firstChild) {
  if (document.body.firstChild === header) {
    // оставляем элемент с заголовком h1 нетронутым
    break;
  }
  
  // Удаляем все остальные элементы
  document.body.removeChild(document.body.firstChild);
}

// Добавляем новый элемент h1 на страницу
document.body.appendChild(header);

// Очищаем задний фон страницы
document.body.style.backgroundColor = 'transparent';