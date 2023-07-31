import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Await, useNavigate} from 'react-router-dom'

function Menu() {
  const [data, setData] = useState([])
  // const[count,setCount] = useState(1)
  const redirect = useNavigate()
  //Adding to cart by changing in isclicked value
  const datapatch = async (productid) => {
    try {
      await axios.patch(`http://localhost:3000/userProduct/${productid}`, {
        isclicked: true
      });
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])


  //fetching
  const fetch = async () => {
    if (localStorage.getItem('id')) {
      const response = await axios.get(`http://localhost:3000/userProduct`)
      setData(response.data)
    }
    else{
      const response = await axios.get(`http://localhost:3000/product`)
      console.log(response)
      setData(response.data)
    }
  }


  //add to cart
  const handleCart = async (productid, index) => {

    if(localStorage.getItem('id')){
    datapatch(productid, index)
    const filtered = await axios.get(`http://localhost:3000/userProduct?id=${productid}`);
    console.log(filtered.data)
    const product = { ...filtered.data[0] }
    const cartdata = { ...product, userid: localStorage.getItem('id'), username: localStorage.getItem('name')}
    await axios.post(`http://localhost:3000/cart`,cartdata)
    window.location.reload()
  }
    else{
      redirect('/login')
    }
  }

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
                Food Menu
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
                    Menu
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* nav & banner end */}

        {/* body */}
        {/* Menu Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Food Menu
              </h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <i className="fa fa-coffee fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 pb-3"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <i className="fa fa-hamburger fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <i className="fa fa-utensils fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {
                      data.map((item, index) => {
                        return (
                          <div className="col-lg-6" key={item.id}>
                            <div className="d-flex align-items-center">
                              <img
                                className="flex-shrink-0 img-fluid rounded"
                                src={item.image}
                                alt
                                style={{ width: 80 }}
                              />
                              <div className="w-100 d-flex flex-column text-start ps-4">
                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                  <span>{item.name}</span>
                                  <span className="text-primary">${item.price}</span>
                                </h5>
                                <div className="d-flex justify-content-between">
                                  <small className="fst-italic">
                                    {item.description}
                                  </small>
                                  {
                                    item.isclicked ? (
                                      <button className="btn btn-dark">Added</button>
                                    ) : <button className="btn btn-dark" onClick={() => { handleCart(item.id, index) }}>Add to Cart</button>

                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-1.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-2.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-3.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-4.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-5.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-6.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-7.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-8.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-1.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-2.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-3.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-4.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-5.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-6.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-7.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-8.jpg"
                          alt
                          style={{ width: 80 }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
        {/* body end */}
        <Footer />
      </div>
    </div>
  );
}

export default Menu;
