import { useContext } from "react";
import { Bookcontext } from "../context/bookcontext";
import { Link } from "react-router-dom";

export default function BookList() {
  const { books } = useContext(Bookcontext);

console.log(books,"booodd");

  return (
    <div
      className="row g-4"
      style={{ maxHeight: "80vh", overflowY: "auto", padding: "10px" }}
    >
      {books?.map((book) => (
        <div className="col-sm-12 col-md-6 col-lg-4" key={book.index}>
          <div
            className="card h-100 shadow-sm border-0"
            style={{
              borderRadius: "15px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            
            <img
              src={book.cover}
              className="card-img-top"
              alt={book.title}
              style={{ height: "300px", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
            />

            <div className="card-body d-flex flex-column bg-light">
             
              <h5
                className="card-title"
                style={{ color: "#1a1a72", fontWeight: "600" }}
              >
                {book.title}
              </h5>
              {book.originalTitle && (
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.originalTitle}
                </h6>
              )}

            
              <p className="mb-1 text-secondary">
                <strong>Release Date:</strong> {book.releaseDate}
              </p>
              <p className="mb-2 text-secondary">
                <strong>Pages:</strong> {book.pages}
              </p>

            
              <p
                className="card-text text-truncate"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  color: "#333",
                }}
              >
                {book.description}
              </p>

           
              <div className="mt-auto">
                <Link
                  to={`/book/${book.number}`}
                  className="btn"
                  style={{
                    backgroundColor: "#4e7efc",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

      
       
        </div>
      ))}
    </div>
  );
}
