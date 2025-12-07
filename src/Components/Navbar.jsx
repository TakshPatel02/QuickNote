import React from "react";
import { Link } from "react-router-dom";
import { Sun , Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-(--bg) text-(--text-main) border-b border-(--border) sticky top-0 z-50">
      <div className="max-w-[1400px] flex justify-between items-center mx-auto py-4"> 
        <div className="text-2xl font-bold">QuickNote</div>
        <div className="flex items-center justify-center gap-12 text-lg">
          <Link to='/'>Home</Link>
          <Link to='/notes'>Notes</Link>
          <Link to='/wishlist'>Wishlist</Link>
          <button 
            className="flex"
            onClick={() => {
              document.documentElement.classList.toggle('light');
            }}
          >
            <Sun />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
