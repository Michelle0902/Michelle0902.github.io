const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, "data", "books.json");

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Helper function to read and write the JSON file
function readBooks() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
}

function writeBooks(books) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
}

// GET all books
app.get("/api/books", (req, res) => {
    const books = readBooks();
    res.json(books);
});

// GET a single book by ID
app.get("/api/books/:id", (req, res) => {
    const books = readBooks();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// ADD a new book
app.post("/api/books", (req, res) => {
    const books = readBooks();
    const newBook = {
        id: books.length ? books[books.length - 1].id + 1 : 1,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    };
    books.push(newBook);
    writeBooks(books);
    res.status(201).json(newBook);
});

// UPDATE a book by ID
app.put("/api/books/:id", (req, res) => {
    const books = readBooks();
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index !== -1) {
        const updatedBook = { ...books[index], ...req.body };
        books[index] = updatedBook;
        writeBooks(books);
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// DELETE a book by ID
app.delete("/api/books/:id", (req, res) => {
    let books = readBooks();
    const newBooks = books.filter(b => b.id !== parseInt(req.params.id));
    if (newBooks.length !== books.length) {
        writeBooks(newBooks);
        res.json({ message: "Book deleted" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
