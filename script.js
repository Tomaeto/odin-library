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

const form = document.getElementById("new-book-form");
const dialog = document.getElementById("dialog");
const lib = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    dialog.close();
    addBookToLibrary(formData.get("booktitle"), formData.get("bookauthor"), formData.get("bookpagecount"), formData.get("bookread"));
    form.reset();
});

function addBookToLibrary(title, author, pageCount, read = null) {
    console.log(title, author, pageCount, read);
    if (read == null) read = "Unread";
    else read = "Read";
    const book = new Book(title, author, pageCount, read);
    lib.push(book);
    displayAllBooks(lib);
}

function addBookToTable(tbody, book) {
    const row = tbody.insertRow();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pageCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    titleCell.innerText = book.getTitle();
    authorCell.innerText = book.getAuthor();
    pageCell.innerText = book.getPageCount();
    readCell.innerText = book.getRead();
}

function displayAllBooks(lib) {
    tbody = document.querySelector("table").getElementsByTagName("tbody")[0];
    tbody.innerText = '';
    for (const book of lib) {
        addBookToTable(tbody, book);
    }
}
addBookToLibrary("Title", "Author", 100, null);





