import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Bookcontext } from "../context/bookcontext";

export default function BookDetails() {
  const { id } = useParams();
  const { books } = useContext(Bookcontext);

  const book = books.find((b) => b.number == id);

 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
        padding: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#f8f9fa",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
       
        <img
          src={book.cover}
          alt={book.title}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />

        <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: "#1a1a72", fontWeight: "700", marginBottom: "5px" }}>
            {book.title}
          </h2>

          {book.originalTitle && (
            <h5 style={{ color: "#555", marginBottom: "15px" }}>
              {book.originalTitle}
            </h5>
          )}

          <p style={{ marginBottom: "5px", color: "#555" }}>
            <strong>Release Date:</strong> {book.releaseDate}
          </p>

          <p style={{ marginBottom: "15px", color: "#555" }}>
            <strong>Pages:</strong> {book.pages}
          </p>

          <p
            style={{
              color: "#333",
              lineHeight: "1.5",
              maxHeight: "200px",
              overflowY: "auto",
              marginBottom: "20px",
              paddingRight: "5px",
            }}
          >
            {book.description}
          </p>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/"
              style={{
                backgroundColor: "#4e7efc",
                color: "white",
                fontWeight: "500",
                padding: "10px 25px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              
            >
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
