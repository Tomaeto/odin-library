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
let lib = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    dialog.close();
    addBookToLibrary(formData.get("booktitle"), formData.get("bookauthor"), formData.get("bookpagecount"), formData.get("bookread"));
    form.reset();
});

function addBookToLibrary(title, author, pageCount, read = null) {
    if (read == null) read = "Unread";
    else read = "Read";
    const book = new Book(title, author, pageCount, read);
    lib.push(book);
    displayAllBooks(lib);
}

function addBookToTable(tbody, book) {
    const row = tbody.insertRow();
    row.dataset.id = book.getID();
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pageCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerText = book.getTitle();
    authorCell.innerText = book.getAuthor();
    pageCell.innerText = book.getPageCount();
    readCell.innerText = book.getRead();

    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.innerText = "Delete Book";
    delBtn.addEventListener('click', () => {
        const id = row.dataset.id;
        lib = lib.filter(book => {return book.getID() != id});
        displayAllBooks(lib);
    });
    deleteCell.appendChild(delBtn);
}

function displayAllBooks(lib) {
    tbody = document.querySelector("table").getElementsByTagName("tbody")[0];
    tbody.innerText = '';
    for (const book of lib) {
        addBookToTable(tbody, book);
    }
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 320, "Read");
addBookToLibrary("Eragon", "Christopher Paolini", 544, null);





