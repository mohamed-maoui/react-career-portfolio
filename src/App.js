import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
