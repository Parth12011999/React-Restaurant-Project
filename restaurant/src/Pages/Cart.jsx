import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/cart.css'
function Cart() {
  const [data, setData] = useState([])


  // Not used
  const datapatch = async (productid) => {
    try {
      await axios.patch(`http://localhost:3000/product/${productid}`, {
        isclicked: true
      });
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [])



  // Fetch
  const fetch = async () => {
    const response = await axios.get(`http://localhost:3000/cart?userid=${localStorage.getItem('id')}`);
    console.log(response)
    setData(response.data)
  }




  // Product Api to default configuration
  const datapatch1 = async (productid) => {
    try {
      await axios.patch(`http://localhost:3000/userProduct/${productid}`, {
        isclicked: false,
        quantity: 1
      });
    } catch (error) {
      console.error(error)
      
    }
  }


  //Decrement Supporter
  const dataDecrement = async (productid, quantity) => {
          try {
        await axios.patch(`http://localhost:3000/cart/${productid}`, {
          quantity: quantity - 1
        });
      } catch (error) {
        console.error(error)
      }
    }


  //Increment Supporter
  const dataIncrement = async (productid, quantity) => {
    try {
      await axios.patch(`http://localhost:3000/cart/${productid}`, {
        quantity: quantity + 1
      });
    } catch (error) {
      console.error(error)
    }
  }



  // Remove Item
  const removeItem = async(productid) => {
    try {
      datapatch1(productid)
      await axios.delete(`http://localhost:3000/cart/${productid}`)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }




  // Increment
  const handleIncrement = (productid, quantity) => {
    dataIncrement(productid, quantity)
    window.location.reload()
  }



  // Decrement
  const handleDecrement = async (productid, quantity) => {
    if (quantity <= 1) {
      try {
        datapatch1(productid)
        removeItem(productid)
      } catch (error) {
        console.error(error)
      }
    }
    else {
      dataDecrement(productid, quantity)
      window.location.reload()
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
                Cart
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
                    Cart
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
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  {
                    data.map((item, index) => {
                      return (
                        <div className="row g-4 position-relative my-4 pt-5 ">
                          <div className="col-lg-12 mb-3" key={item.id}>
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
                                  <span className="text-primary" >${item.price * item.quantity}</span>
                                </h5>
                                <div className="d-flex justify-content-between">
                                  <small className="fst-italic">
                                    {item.description}
                                  </small>
                                      <div className="cart">
                                        <div className="btn btn-dark" onClick={() => { handleDecrement(item.id, item.quantity) }}>-</div>
                                        <b className="px-3">{item.quantity}</b>
                                        <div className="btn btn-dark" onClick={() => { handleIncrement(item.id, item.quantity) }}>+</div>
                                      </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button className="btn btn-dark close" onClick={()=>{removeItem(item.id)}}>X</button>
                          </div>
                        </div>
                      )
                    })
                  }
                  {
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-end">
                      <h3>
                      Total: 
                        {
                          data.reduce((acc, item) => {
                            return acc += parseInt(item.price * item.quantity);
                          },0)
                        }
                      </h3>
                      </div>
                    </div>
                  }
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

export default Cart;
