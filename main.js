let myLibrary = [];
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
  this.coverImage = `https://picsum.photos/seed/${this.id}/320/280`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookCard(book) {
  console.log("Book object:", book);
  console.log("Cover image:", book.coverImage);

  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-book-id", book.id);

  bookCard.innerHTML = `
    <img src="${book.coverImage}" alt="${book.title} cover">
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not read yet"}</p>
  <button class="btn btn-danger btn-remove">Remove</button>
  `;

  booksContainer.appendChild(bookCard);
  console.log(book.id);
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
  createBookCard(newBook);

  form.reset();
});

booksContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    const card = e.target.closest(".book-card");
    const bookIdToDelete = card.getAttribute("data-book-id");

    myLibrary = myLibrary.filter((book) => book.id !== bookIdToDelete);
    card.remove();
  }
});
