import React,{useState} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from 'react-router-dom';
import axios, { Axios } from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Booking() {

  const [formData,setFormData] = useState({
    id:'',
    name:'',
    email:'',
    datetime:'',
    people:'',
    message:''
  })

  const onchange = (e) => {
    setFormData({...formData,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formData)
  }

  const validate = () => {
    var res = true
    if(formData.name == "" || formData.name == null){
      res = false;
      toast.error('name required');
    }
    if(formData.email == "" || formData.email == null){
      res = false;
      toast.error('email required');
    }
    if(formData.datetime == "" || formData.datetime == null){
      res = false;
      toast.error('datetime required');
    }
    if(formData.message == "" || formData.message == null){
      res = false;
      toast.error('message required');
    }
    if(formData.people == "" || formData.people == null){
      res = false;
      toast.error('please select no. of people')
    }
    return res;
  }

  const onsubmit = async(e) => {
    e.preventDefault();
    if(validate()){
      const result = await axios.post(`http://localhost:3000/bookings`, formData);
      console.log(result);
      if(result.status >200 && result.status<300){
        toast.success('Success');
        setFormData({...formData,name:"",email:"",message:"",datetime:"", people:""});
      }
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
                Booking
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
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* nav & banner end */}

        {/* body */}
        <div>
          {/* Reservation Start */}
          <div
            className="container-xxl py-5 px-0 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="row g-0">
              <div className="col-md-6">
                <div className="video">
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-bs-target="#videoModal"
                  >
                    <span />
                  </button>
                </div>
              </div>
              <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    Reservation
                  </h5>
                  <h1 className="text-white mb-4">Book A Table Online</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={onchange}
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={onchange}
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating date"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <input
                            type="datetime-local"
                            className="form-control "
                            name="datetime"
                            value={formData.datetime}
                            onChange={onchange}
                            placeholder="Date & Time"
                            data-target="#date3"
                          />
                          <label htmlFor="datetime">Date &amp; Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select className="form-select" name="people" id="select1" value={formData.people} onChange={onchange}>
                            <option value={1}>People 1</option>
                            <option value={2}>People 2</option>
                            <option value={3}>People 3</option>
                          </select>
                          <label htmlFor="select1">No Of People</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Special Request"
                            name="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                            value={formData.message}
                            onChange={onchange}
                          />
                          <label htmlFor="message">Special Request</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          onClick={onsubmit}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src
                      id="video"
                      allowFullScreen
                      allowscriptaccess="always"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Start */}
        </div>

        {/* body end */}
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
