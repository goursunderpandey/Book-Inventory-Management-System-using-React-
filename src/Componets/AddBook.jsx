import { useContext, useEffect, useState } from "react";
import { Bookcontext } from "../context/bookcontext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddBook() {
  const { addBook, updateBook, books } = useContext(Bookcontext);
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    number: "",
    title: "",
    originalTitle: "",
    releaseDate: "",
    description: "",
    pages: "",
    cover: "",
  });


  useEffect(() => {
    if (isEdit) {
      const book = books.find((b) => b.number == id);
      if (book) {

        setForm(book);
      }
    }
  }, [id, books, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || isNaN(form.pages)) {
      alert("Invalid data");
      return;
    }

    if (isEdit) {
      updateBook({
        ...form,
        pages: Number(form.pages),
      });
    } else {
      if (books.find((b) => b.number === Number(form.number))) {
        alert("Book number already exists");
        return;
      }

      addBook({
        ...form,
        number: Number(form.number),
        pages: Number(form.pages),
      });
    }

    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow p-4">
            <h3 className="text-primary mb-4">
              {isEdit ? "Edit Book" : "Add New Book"}
            </h3>

            <form onSubmit={handleSubmit}>
              {!isEdit && (
                <input
                  className="form-control mb-3"
                  name="number"
                  placeholder="Book Number"
                  value={form.number}
                  onChange={handleChange}
                  required
                />
              )}

              <input
                className="form-control mb-3"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="originalTitle"
                placeholder="Original Title"
                value={form.originalTitle}
                onChange={handleChange}
              />

              <input
                type="date"
                className="form-control mb-3"
                name="releaseDate"
                value={form.releaseDate}
                onChange={handleChange}
              />

              <input
                className="form-control mb-3"
                name="pages"
                placeholder="Pages"
                value={form.pages}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="cover"
                placeholder="Cover URL"
                value={form.cover}
                onChange={handleChange}
              />

              <textarea
                className="form-control mb-3"
                name="description"
                rows="4"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />

              <button className="btn btn-primary w-100">
                {isEdit ? "Update Book" : "Add Book"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
