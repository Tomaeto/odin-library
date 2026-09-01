class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    toggleRead() {
        this.read == "Unread" ? this.read = "Read" : this.read = "Unread";
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

form.addEventListener('submit', addNewBook);

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 320, "Read");
addBookToLibrary("Eragon", "Christopher Paolini", 544, "Unread");

function addBookToLibrary(title, author, pageCount, read) {
    if (read == null || read == "Unread") read = "Unread";
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
    let buttonCell = row.insertCell(4);

    titleCell.innerText = book.getTitle();
    authorCell.innerText = book.getAuthor();
    pageCell.innerText = book.getPageCount();
    readCell.innerText = book.getRead();

    const delBtn = document.createElement("button");
    delBtn.classList.add("table-btn");
    delBtn.innerText = "Delete from library";
    delBtn.addEventListener('click', deleteBtnEvent);


    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("table-btn");
    toggleBtn.innerText = "Toggle read status";
    toggleBtn.addEventListener('click', toggleBtnEvent);

    buttonCell.appendChild(toggleBtn);
    buttonCell.appendChild(delBtn);
}

function displayAllBooks(lib) {
    tbody = document.querySelector("table").getElementsByTagName("tbody")[0];
    tbody.innerText = '';
    for (const book of lib) {
        addBookToTable(tbody, book);
    }
}

//EVENT LISTENERS

function addNewBook(evt) {
    evt.preventDefault();
    const formData = new FormData(form);
    dialog.close();
    addBookToLibrary(formData.get("booktitle"), formData.get("bookauthor"), formData.get("bookpagecount"), formData.get("bookread"));
    form.reset();
}

function deleteBtnEvent(evt) {
    //button -> buttonCell -> row -> data-id
    const bookID = evt.currentTarget.parentNode.parentNode.dataset.id;
    lib = lib.filter(book => { return book.getID() != bookID });
    displayAllBooks(lib);
}

function toggleBtnEvent(evt) {
    //button -> buttonCell -> row -> data-id
    const bookID = evt.currentTarget.parentNode.parentNode.dataset.id;
    const curBook = lib.find(book => { return book.getID() == bookID });
    curBook.toggleRead();
    displayAllBooks(lib);
}






