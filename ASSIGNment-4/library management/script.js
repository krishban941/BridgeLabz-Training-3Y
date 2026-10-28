
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return "Book is already issued.";
        }

        this.isIssued = true;
        return "Book issued successfully.";
    }

    returnBook() {
        if (!this.isIssued) {
            return "Book is already available.";
        }

        this.isIssued = false;
        return "Book returned successfully.";
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Web Development", "Alex Brown", "102"),
    new Book("Learning HTML", "Mary Jones", "103")
];

function displayAvailableBooks() {
    console.log("Available Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ISBN: ${book.ISBN}`);
    });
}

displayAvailableBooks();

const isbn = prompt("Enter ISBN to issue a book:");

if (isbn !== null) {
    const book = books.find(book => book.ISBN === isbn.trim());

    if (book) {
        console.log(book.issueBook());
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();