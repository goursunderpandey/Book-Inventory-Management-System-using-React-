import { useContext, useState } from "react";
import { Bookcontext } from "../context/bookcontext";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const { addBook, books } = useContext(Bookcontext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    number: "",
    title: "",
    originalTitle: "",
    releaseDate: "",
    description: "",
    pages: "",
    cover: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.pages || isNaN(form.pages)) {
      alert("Please fill Title and valid Pages");
      return;
    }

    if (books.find((el) => el.number === Number(form.number))) {
      alert("Number for books already exists");
      return;
    }

    addBook({
      number: Number(form.number),
      title: form.title,
      originalTitle: form.originalTitle,
      releaseDate: form.releaseDate,
      description: form.description,
      pages: Number(form.pages),
      cover: form.cover,
    });

    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow p-4">
            <h3 className="text-primary mb-4">Add New Book</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="number"
                  name="number"
                  className="form-control"
                  placeholder="Book Number / ID"
                  value={form.number}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="originalTitle"
                  className="form-control"
                  placeholder="Original Title"
                  value={form.originalTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  name="releaseDate"
                  className="form-control"
                  value={form.releaseDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  name="pages"
                  className="form-control"
                  placeholder="Pages"
                  value={form.pages}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="cover"
                  className="form-control"
                  placeholder="Cover Image URL"
                  value={form.cover}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
