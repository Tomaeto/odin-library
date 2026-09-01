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
}

const lib = [];
function addBookToLibrary() {
    const book = new Book(window.prompt("Title: "), window.prompt("Author: "), window.prompt("Page count: "));
    lib.push(book);
}

const book = new Book("Title", "Author", 12);
console.log(book.getInfo());
book.toggleRead();
console.log(book.getInfo());