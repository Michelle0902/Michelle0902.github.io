import React, { useState } from "react";
import { useBookContext } from "./bookProvider";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const { addBook } = useBookContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, price: parseFloat(price) };
        addBook(newBook);
        setTitle("");
        setAuthor("");
        setPrice("");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <h2>Add New Book</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">Add Book</button>
            <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </form>
    );
}