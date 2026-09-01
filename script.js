class Book {
    constructor(title, author, pageCount, read = "unread") {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    toggleRead() {
        this.read = "unread" ? this.read = "read" : this.read = "unread";
    }
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.read}`;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getPageCount() {
        return this.pageCount;
    }
    getRead() {
        return this.read;
    }
    getID() {
        return this.id;
    }
}

function addBookToLibrary() {
    const book = new Book(window.prompt("Title: "), window.prompt("Author: "), window.prompt("Page count: "));
    lib.push(book);
}

function addBookToTable(table, book) {
    const row = table.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pageCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    titleCell.innerText = book.getTitle();
    authorCell.innerText = book.getAuthor();
    pageCell.innerText = book.getPageCount();
    readCell.innerText = book.getRead();
}

function addAllBooksToTable(table, lib) {

    for (const book of lib) {
        addBookToTable(table, book);
    }
}

const lib = [];
const book = new Book("Title", "Author", 12);
lib.push(book);
const table = document.getElementById("myTable");
addAllBooksToTable(table, lib);