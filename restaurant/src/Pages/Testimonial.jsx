import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from "../Components/TestimonialCard";
import '../css/testimonial.css'

function Testimonial() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    fetch()
  }, [])

  const [data, setData] = useState([])

  const fetch = async () => {
    const response = await axios.get(`http://localhost:3000/testimonial`);
    setData(response.data)
  }

  const testimonials = data.map(item => <TestimonialCard name={item.name} description={item.description} image={item.image} profession={item.profession} />)
  return (
    <>
      <div>
        <div classname="container-xxl bg-white p-0">
          {/* <Spinnner/> */}
          {/* Navbar & banner */}
          <div className="container-xxl position-relative p-0">
            <Header />
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
              <div className="container text-center my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Testimonial
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Pages</a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Testimonial
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* nav & banner end */}

          {/* body */}
          <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="text-center">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                <h1 className="mb-5">Our Clients Say!!!</h1>
              </div>
              <Carousel
              responsive={responsive}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              arrows={false}
              className="carousel"
              >
                {testimonials}
              </Carousel>
            </div>
          </div>


          {/* body end */}
          <Footer />
        </div>
      </div>

    </>
  );
}

export default Testimonial;
