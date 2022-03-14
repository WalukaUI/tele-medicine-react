import { Carousel } from "react-bootstrap";
import "./_carousel.scss";

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
          <Carousel.Caption className="caption">
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

          <Carousel.Caption className="caption">
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

          <Carousel.Caption className="caption">
            <h3>Third slide labegggl</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
