import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import WishList from "./Pages/WishList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
};

export default App;
