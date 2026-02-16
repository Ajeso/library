const myLibrary = [];
const booksContainer = document.querySelector(".container");
const newBtn = document.getElementById("newBtn");
const form = document.getElementById("book-form");

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.coverImage = `https://picsum.photos/seed/${this.id}/200/280`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// addBookToLibrary();

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCard.innerHTML = `
    <img src="${book.coverImage}" alt="${book.title} cover">
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not read yet"}</p>
  `;
  booksContainer.appendChild(bookCard);
}

myLibrary.forEach((book) => {
  createBookCard(book);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;

  const read =
    document.querySelector('input[name="read"]:checked').value === "true";

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  const card = createBookCard(newBook);

  form.reset();
});
