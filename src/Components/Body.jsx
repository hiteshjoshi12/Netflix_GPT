import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Body;
