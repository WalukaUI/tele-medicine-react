import React from "react";
import "./_our_services.scss";
import TeleMedservices from "./telemed.jpg";

export default function OurServices() {
  return (
    <div className="ourservices">
      <div className="row ourserviceImage">
        <div className="col col-md-6 col-sm-12 col-xs-12 serviceImage">
          <img src={TeleMedservices} alt="services" />
        </div>
        <div className="col col-md-6 col-sm-12 col-xs-12">
          <h5>
            Our Services What can you get consulted and treated here for ?{" "}
          </h5>
          <ul>
            <li>Allergic Reactions</li>
            <li>Mild to moderate Asthma</li>
            <li>Arthritis aches and pain</li>
            <li>Acute Respiratory Infections / Sinus Infections</li>
            <li>Conjunctivitis ( Pink eye)</li>
            <li>Earaches</li>
            <li>Flu/ Influenza</li>
            <li>MinorInjuries</li>
            <li>Skin Conditions ( Rashes, Skin Infections, Acne)</li>
            <li>Stomach conditions ( Vomiting, Diarrhea, Stomach Pain)</li>
            <li>Sore throat</li>
            <li>Urinary Tract / Bladder Infections</li>
          </ul>
        </div>
      </div>
      <div className="attribute">
        Photo by{" "}
        <a href="https://unsplash.com/@scottwebb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Scott Webb
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}
