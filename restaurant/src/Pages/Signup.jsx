import React,{useState} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function Signup() {
  const [formData,setFormData] = useState({
    id:'',
    name:'',
    email:'',
    mobile:'',
    password:'',
    status:''
  })

  const onchange = (e) => {
    setFormData({...formData,id:new Date().getTime().toString(),status:"unblock",[e.target.name]:e.target.value});
    // console.log(formData)
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
    if(formData.mobile == "" || formData.mobile == null){
      res = false;
      toast.error('mobile required');
    }
    if(formData.password == "" || formData.password == null){
      res = false;
      toast.error('password required');
    }
    return res;
  }

  const redirect = useNavigate();
  const onsubmit = async(e) => {
    e.preventDefault();
    if(validate()){
      const result = await axios.post(`http://localhost:3000/user`, formData);
      // console.log(result);
      if(result.status >200 && result.status<300){
        toast.success('Success');
        setFormData({...formData,name:"",mobile:"",password:"",email:""});
        redirect('/login')
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
            <div className="container text-center pt-5 pb-4">
              <div className="container-xxl py-5">
                <div className="container">
                  <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5 text-white">Sign Up</h1>
                  </div>
                  <div className="row g-4">
                    <div className="offset-md-3 col-md-6">
                      <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <form>
                          <div className="row g-3">
                            <div className="col-md-12">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  placeholder="Your Name"
                                  value={formData.name}
                                  onChange={onchange}
                                />
                                <label htmlFor="name">Name</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Your Email"
                                  value={formData.email}
                                  onChange={onchange}
                                />
                                <label htmlFor="email">Your Email</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-floating">
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Mobile"
                                  name='mobile'
                                  value={formData.mobile}
                                  onChange={onchange}
                                />
                                <label htmlFor="subject">Mobile</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-floating">
                              <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  name='password'
                                  value={formData.password}
                                  onChange={onchange}
                                />
                                <label htmlFor="message">Password</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <span className='text-white'>Already have an account? <Link to="/login" >Click Here</Link> </span>
                            </div>
                            <div className="col-md-12">
                              <button
                                className="btn btn-primary w-100 py-3"
                                type="submit"
                                onClick={onsubmit}
                              >
                                Sign Up
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Signup;