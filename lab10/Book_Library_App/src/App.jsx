// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookProvider from "./components/bookProvider";
import ListBooks from "./components/ListBooks";
import AddBook from "./components/addBook";
import EditBook from "./components/editBook";

function App() {
    return (
        <BookProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ListBooks />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                </Routes>
            </Router>
        </BookProvider>
    );
}

export default App;
