import { React, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./_carousel.scss";
import Dark from "./images/dark.jpg";
import Beach from "./images/beach.jpg";

export default function ImageCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block carousel"
            src="./Carousel/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption cap1">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel"
            src="./Carousel/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption cap2">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel"
            src="./Carousel/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption cap3">
            <h3>Third slide labegggl</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="separator" data-aos="fade-in"></div>
      <section>
        <div className="sec1MainDiv">
          <div className="col-sm-12 col-md-6 subDiv" data-aos="fade-up">
            <img src={Dark} alt="dd" />
          </div>
          <div className="col-sm-12 col-md-6 subDiv" data-aos="fade-up">
            <h4>Test words</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electroni
            </p>
            <h3>To make a type specimen </h3>
          </div>
        </div>
      </section>
      <div className="separator" data-aos="fade-in"></div>
      <section>
        <div
          className="row sec1MainDiv"
          style={{ backgroundColor: "rgb(25, 88, 104)" }}
        >
          <div className="col-sm-12 col-md-6 subDiv" data-aos="fade-right">
            <h4>Test section 2</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electroni
            </p>
            <h3>Add something</h3>
          </div>
          <div className="col-sm-12 col-md-6 subDiv" data-aos="fade-left">
            <img src={Beach} alt="dd" />
          </div>
        </div>
      </section>
      <div className="separator" data-aos="fade-in"></div>
    </>
  );
}
