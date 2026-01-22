import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./Componets/BookList";
import BookDetails from "./Componets/BookDetails";
import AddBook from "./Componets/AddBook";
import Navbar from "./Componets/Navbar";
import { BookProvider } from "./context/bookcontext";

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
