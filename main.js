const myLibrary = [];
const bookCard = document.querySelector(".book-card");
const booksContainer = document.querySelector(".container");

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.coverImage = `https://picsum.photos/seed/${this.id}/250/120`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  // take params, create a book then store it in the array
}

const book1 = new Book("Milena", "Kafka", 125, "read");
addBookToLibrary(book1);

function createBookCard(book) {
  bookCard.innerHTML = `
    <img src="${book.coverImage}" alt="${book.title} cover">
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not read yet"}</p>
  `;
  bookCard;
}

createBookCard(book1);

myLibrary.forEach((book) => {
  booksContainer.appendChild(createBookCard(book));
});

console.log(book1);

console.log(myLibrary);
