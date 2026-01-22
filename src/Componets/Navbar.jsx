import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar-custom">
      <Link to="/" className="navbar-brand-custom">
        Book store
      </Link>

      <Link to="/add" className="navbar-btn">
        Add Book
      </Link>
    </nav>
  );
}
