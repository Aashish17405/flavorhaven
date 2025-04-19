import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2"
        >
          <span className="text-black font-sans">🍽️ FlavorHaven</span> 
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-secondary transition duration-300"
          >
            Home
          </Link>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
