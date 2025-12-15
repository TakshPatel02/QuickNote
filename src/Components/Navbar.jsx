import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-(--bg) text-(--text-main) border-b border-(--border) sticky top-0 z-50">
      <div className="max-w-[1400px] mx-4 flex justify-between items-center md:mx-8 lg:mx-auto py-4">
        <div className="text-xl sm:text-2xl font-bold">QuickNote</div>
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 text-base lg:text-lg">
          <Link to="/" className="hover:text-(--accent) transition-colors">
            Home
          </Link>
          <Link to="/notes" className="hover:text-(--accent) transition-colors">
            Notes
          </Link>
          <Link
            to="/wishlist"
            className="hover:text-(--accent) transition-colors"
          >
            Wishlist
          </Link>
          <button
            className="flex hover:text-(--accent) transition-colors"
            onClick={() => {
              document.documentElement.classList.toggle("light");
            }}
          >
            <Sun size={20} />
          </button>
        </div>
        <div className="md:hidden flex justify-center items-center gap-4">
          <button
            className="flex hover:text-(--accent) transition-colors"
            onClick={() => {
              document.documentElement.classList.toggle("light");
            }}
          >
            <Sun size={20} />
          </button>
          <button onClick={() => setOpen(!open)} className="z-50">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-(--bg) border-b border-(--border) shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-4">
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className="py-2 hover:text-(--accent) transition-colors"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/notes"
              className="py-2 hover:text-(--accent) transition-colors"
            >
              Notes
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/wishlist"
              className="py-2 hover:text-(--accent) transition-colors"
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
