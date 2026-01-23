import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Bookcontext } from "../context/bookcontext";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, deleteBook } = useContext(Bookcontext);

  const book = books.find((b) => b.number == id);

  if (!book) return <h2 style={{ textAlign: "center" }}>Book not found</h2>;

  const handleDelete = () => {
    deleteBook(book.number);
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
      >
        <img
          src={book.cover}
          alt={book.title}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />

        <div style={{ padding: "20px" }}>
          <h2 style={{ color: "#1a1a72" }}>{book.title}</h2>

          <p><strong>Release Date:</strong> {book.releaseDate}</p>
          <p><strong>Pages:</strong> {book.pages}</p>

          <p style={{ marginBottom: "20px" }}>{book.description}</p>

          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <Link
              to="/"
              className="btn btn-primary"
            >
              Back
            </Link>

            <Link
              to={`/add/${book.number}`}
              className="btn btn-warning"
            >
              Edit
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

