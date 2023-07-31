import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Spinnner from '../Components/Spinnner';

function PNF() {
  return (
    <div>
      <div classname="container-xxl bg-white p-0">
        {/* <Spinnner/> */}
        {/* Navbar & banner */}
        <div className="container-xxl position-relative p-0">
          <Header />
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Page Not Found
              </h1>
            </div>
          </div>
        </div>
        {/* nav & banner end */}
        <Footer />
      </div>
    </div>
  )
}

export default PNF