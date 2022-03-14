import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import ImageCarousel from "./Carousel/Carousel";
import TeleMed from "./Telemedicine/TeleMed";
import Footer from "./Footer/Footer.js";
import OurServices from "./OurServices/Our-Services";
import EmotionalHealth from "./EmotionalHealth/EmotionalHlth";
import PatientEdu from "./PatientEducation/PatientEdu";

export default function Main() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageCarousel />} />
        <Route path="/tele-medicine" element={<TeleMed />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/emotional-health" element={<EmotionalHealth />} />
        <Route path="/patient-education" element={<PatientEdu />} />
      </Routes>
      <Footer />
    </>
  );
}
