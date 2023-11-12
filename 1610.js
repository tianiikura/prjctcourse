"use strict";

// DOM змінні
const bookForm = document.querySelector(".book-form");
const bookList = document.querySelector(".book-list");
const title = bookForm.querySelector(".title");
const author = bookForm.querySelector(".author");
const isbn = bookForm.querySelector(".isbn");
const container = document.querySelector(".container");

// Класи
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList({ title, author, isbn }) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    bookList.append(row);

    // альтернативний варіант
    this.clearFields();
  }

  clearFields() {
    title.value = "";
    author.value = "";
    isbn.value = "";
  }

  deleteBook(target) {
    if (target.classList.contains("delete")) {
      // const tr = target.closest("tr");
      // tr.remove();
      target.closest("tr").remove();
    }
  }

  showAlert(message, type, timeout = 3000) {
    const div = document.createElement("div");
    div.classList.add("alert", type);
    div.textContent = message;

    container.insertBefore(div, bookForm);

    setTimeout(this.hideAlert, timeout);
  }

  hideAlert() {
    const div = document.querySelector(".alert");
    div.remove();
  }
}

// Event listeners
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const ui = new UI();
  if (!title.value.trim() || !author.value.trim() || !isbn.value.trim()) {
    ui.showAlert("Заповніть всі поля!", "error");
    return;
  }
  
  const book = new Book(title.value.trim(), author.value.trim(), isbn.value.trim());
  console.log("new book: ", book);

  ui.addBookToList(book);
  // ui.clearFields();

  ui.showAlert("Книгу додано!", "success");
});

bookList.addEventListener("click", (event) => {
  event.preventDefault();

  const ui = new UI();
  ui.deleteBook(event.target);

  ui.showAlert("Книгу видалено!", 1500);
});
