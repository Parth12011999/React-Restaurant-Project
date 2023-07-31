import React, { useState, useEffect} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Await, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const redirect = useNavigate();  //Redirection

  useEffect(()=>{
    if (localStorage.getItem('id')) {
      redirect('/')
    }
  },[])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData)
  }

  const validate = () => {
    var res = true

    if (formData.email == "" || formData.email == null) {
      res = false;
      toast.error('email required');
    }

    if (formData.password == "" || formData.password == null) {
      res = false;
      toast.error('password required');
    }
    return res;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const result = await axios.get(`http://localhost:3000/user?email=${formData.email}`);
      // console.log(result);
      if (result.data.length > 0) {
        if(formData.password == result.data[0].password){
            if (result.data[0].status == "unblock") {
              localStorage.setItem('id', result.data[0].id);
              localStorage.setItem('name', result.data[0].name);
              toast.success('login successful');
              return redirect('/');
            }
            else{
              toast.error("User blocked");
              setFormData({...formData, email:'', password:''});
            }
        }
        else{
          toast.error("Password doesn't match");
          setFormData({...formData, password:''});
        }
      }
      else{
        toast.error("Email not found");
        setFormData({...formData, email:'', password:''});
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
                    <h1 className="mb-5 text-white">Login</h1>
                  </div>
                  <div className="row g-4">
                    <div className="offset-md-3 col-md-6">
                      <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <form>
                          <div className="row g-3">
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
                            <div className="col-12">
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
                              <span className='text-white'>Didn't have an account? <Link to="/signup" >Click Here</Link> </span>
                            </div>
                            <div className="col-12">
                              <button
                                className="btn btn-primary w-100 py-3"
                                type="submit"
                                onClick={onsubmit}
                              >
                                Log In
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

export default Login;