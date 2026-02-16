const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  // take params, create a book then store it in the array
}

const book1 = new Book("Milena", "Kafka", 125, "read");
addBookToLibrary(book1);

console.log(book1);

console.log(myLibrary);
