import React from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "./bookProvider";

export default function ListBooks() {
    const { books, deleteBook, loading, error } = useBookContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading books.</p>;

    return (
        <div style={{ padding: "20px" }}>
            <Link to="/add">
                <button style={{ marginBottom: "20px" }}>Add New Book</button>
            </Link>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", color: "black" }}>
                {books.map(b => (
                    <div key={b.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", backgroundColor: "#f9f9f9", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                        <h3>{b.title}</h3>
                        <p>by {b.author}</p>
                        <p>${b.price}</p>
                        <Link to={`/edit/${b.id}`}><button>Edit</button></Link>
                        <button onClick={() => deleteBook(b.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}