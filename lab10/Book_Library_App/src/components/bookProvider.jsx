import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from "axios";

const BookContext = createContext(null);

export default function BookProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await axios.get("http://localhost:3001/api/books");
                setBooks(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching books:", error);
                setError(error);
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    const addBook = async (newBook) => {
        try {
            const response = await axios.post("http://localhost:3001/api/books", newBook);
            setBooks(prevBooks => [...prevBooks, response.data]);
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book.");
        }
    };

    const deleteBook = useCallback(async (idToDelete) => {
        try {
            await axios.delete(`http://localhost:3001/api/books/${idToDelete}`);
            setBooks(prevBooks => prevBooks.filter(book => book.id !== idToDelete));
            alert("Book deleted successfully!");
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Failed to delete book.");
        }
    }, []);

     const updateBook = (updatedBook) => {
        setBooks(prevBooks => prevBooks.map(book =>
            book.id === updatedBook.id ? updatedBook : book
        ));
    };

    const contextValue = {
        books,
        loading,
        error,
        addBook,
        updateBook,
        deleteBook
    };

    return (
        <BookContext.Provider value={contextValue}>
            {children}
        </BookContext.Provider>
    );
}

export const useBookContext = () => useContext(BookContext);