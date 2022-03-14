import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import ImageCarousel from "./Carousel/Carousel";
import TeleMed from "./Telemedicine/TeleMed";
import Footer from "./Footer/Footer.js";

export default function Main() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageCarousel />} />
        <Route path="/helow" element={<TeleMed />} />
      </Routes>
      <Footer />
    </>
  );
}
