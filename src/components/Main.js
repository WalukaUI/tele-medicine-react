import { React } from "react";
import { Route, Routes } from "react-router-dom";
import ImageCarousel from "./Carousel/Carousel";
import TeleMed from "./Telemedicine/TeleMed";
import Footer from "./Footer/Footer.js";
import OurServices from "./OurServices/Our-Services";
import EmotionalHealth from "./EmotionalHealth/EmotionalHlth";
import PatientEdu from "./PatientEducation/PatientEdu";
import GetAppointment from "./HowtoGetAppointment/GetAppointment";
import AboutUs from "./AboutUs/AboutUs";
import Login from "./Login/Login";
import BookanAppointment from "./BookanAppointment/BookAppointment";
import Payments from "./Payments/Payments";
import Signup from "./Signup/Signup";
import Nav2 from "./Nav2/Nav2.js";

export default function Main() {
  return (
    <>
      <Nav2 />
      <Routes>
        <Route path="/" element={<ImageCarousel />} />
        <Route path="/tele-medicine" element={<TeleMed />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/emotional-health" element={<EmotionalHealth />} />
        <Route path="/patient-education" element={<PatientEdu />} />
        <Route path="/get-appointment" element={<GetAppointment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-an-appointment" element={<BookanAppointment />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
      <Footer />
    </>
  );
}
