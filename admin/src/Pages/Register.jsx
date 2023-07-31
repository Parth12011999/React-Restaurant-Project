import React,{useState} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Register() {
    const [formData,setFormData] = useState({
        id:'',
        name:'',
        email:'',
        username:'',
        password:'',
        terms:''
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
        if(formData.username == "" || formData.username == null){
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
          const result = await axios.post(`http://localhost:3000/admin`, formData);
          // console.log(result);
          if(result.status >200 && result.status<300){
            toast.success('Success');
            setFormData({...formData,name:"",username:"",terms:"",password:"",email:""});
            redirect('/')
          }
        }
      }
    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-4">
                                        <a href="index.html" className="logo d-flex align-items-center w-auto">
                                            <img src="assets/img/logo.png" alt="not"/>
                                            <span className="d-none d-lg-block">Admin</span>
                                        </a>
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create account</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">Your Name</label>
                                                    <input type="text" name="name" value={formData.name} onChange={onchange} className="form-control" id="yourName" required />
                                                    <div className="invalid-feedback">Please, enter your name!</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                    <input type="email" name="email"  value={formData.email} onChange={onchange} className="form-control" id="yourEmail" required />
                                                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text" name="username" value={formData.username} onChange={onchange} className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Please choose a username.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" value={formData.password} onChange={onchange} className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="terms" value={formData.terms} onChange={onchange} type="checkbox" defaultValue id="acceptTerms" required />
                                                        <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div className="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <a className="btn btn-primary w-100" type="submit" href='javascript: void(0)' onClick={onsubmit}>Create Account</a>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Already have an account? <Link to="/">Log in</Link></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        {/* All the links in the footer should remain intact. */}
                                        {/* You can delete the links only if you purchased the pro version. */}
                                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>{/* End #main */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

        </>
    )
}

export default Register