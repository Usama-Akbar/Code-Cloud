import React, { useEffect } from "react";
import "../styles/WavyNav.css";
import Wave from "react-wavify";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import cloudImage from "../assets/cloud.png";
import { Carousel } from "react-responsive-carousel";
import carouselImageOne from "../assets/carousel1.png";
import carouselImageTwo from "../assets/carousel2.png";
import carouselImageThree from "../assets/carousel3.png";
import carouselImageFour from "../assets/carousel4.png";
import carouselImageFive from "../assets/carousel5.png";

export default function WavyNav() {
  const colors = ["#444cce", "#7831bf", "#444cce"];

  function changeGradientColors() {
    const stops = document.querySelectorAll("#gradient stop");
    let i = 0;
    setInterval(() => {
      stops.forEach((stop) => {
        stop.setAttribute("stop-color", colors[i]);
      });
      i = (i + 1) % colors.length;
    }, 1000); // change colors every 1 second
  }

  useEffect(() => {
    changeGradientColors();
  }, [null]);

  return (
    <>
      <div>
        <div class="image-container">
          <img src={cloudImage} alt="" className="image_animation" />
        </div>
        <div className="carousel_show">
          {/* caoursel here */}
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            stopOnHover={true}
            swipeable={true}
          >
            <div>
              <div className="carousel-main-div">
                <div
                  className="carousel-text-div"
                  style={{ color: "white", width: "50%" }}
                >
                  <h2>Application Development IT Company</h2>
                  <span>
                    Best Branding solutions with a wide gamut of services
                    including logo design, brochure design, stationery design,
                    banner/leaflet design
                  </span>
                  <div
                    style={{ width: "160px" }}
                    className="learn_more_button "
                  >
                    Learn More
                  </div>
                </div>
                <img
                  src={carouselImageOne}
                  className="carousel-images-div"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div>
              <div className="carousel-main-div">
                <div
                  className="carousel-text-div"
                  style={{ color: "white", width: "50%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letras
                </div>
                <img
                  src={carouselImageTwo}
                  className="carousel-images-div"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div>
              <div className="carousel-main-div">
                <div
                  className="carousel-text-div"
                  style={{ color: "white", width: "50%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letras
                </div>
                <img
                  src={carouselImageThree}
                  className="carousel-images-div"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div>
              <div className="carousel-main-div">
                <div
                  className="carousel-text-div"
                  style={{ color: "white", width: "50%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letras
                </div>
                <img
                  src={carouselImageFour}
                  className="carousel-images-div"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div>
              <div className="carousel-main-div">
                <div
                  className="carousel-text-div"
                  style={{ color: "white", width: "50%" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letras
                </div>
                <img
                  src={carouselImageFive}
                  className="carousel-images-div"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </Carousel>
        </div>

        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#">Code Cloud</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              className="ml-auto"
              style={{ justifyContent: "end" }}
            >
              <Nav
                className="ml-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>

                <NavDropdown title="Company" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Our Process
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Industries We Serve
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Service" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    UX/UI Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Graphic Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    SEO Service
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Custom Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Software Product Development
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#action1">Partner With Us</Nav.Link>
              </Nav>
              <div className="custom_contact_button">Contact Us</div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <div className='wave_container'> */}
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 400,
            amplitude: 100,
            speed: 0.15,
            points: 3,
          }}
          className="wave-div"
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#444cce">
                <animate
                  attributeName="stop-color"
                  values="#444cce; #7831bf; #444cce"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stop-color="#7831bf">
                <animate
                  attributeName="stop-color"
                  values="#7831bf; #ff4e50; #7831bf"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stop-color="#444cce">
                <animate
                  attributeName="stop-color"
                  values="#444cce; #7831bf; #444cce"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
        {/* </div> */}
      </div>
    </>
  );
}
