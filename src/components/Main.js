import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import ImageCarousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer.js";

export default function Main() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageCarousel />} />
        <Route path="/helow" element={<h1>hhh</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
