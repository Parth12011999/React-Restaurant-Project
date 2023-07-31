import React, { useState,useEffect } from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

    const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('adminid'))
        {
            redirect('/index');
        }
      
    },[])

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const onchange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(formData)
    }

    const validate = () => {
        var res = true
        if (formData.username == "" || formData.username == null) {
            res = false;
            toast.error('username required');
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
            const result = await axios.get(`http://localhost:3000/admin?username=${formData.username}`);
            if (result.data.length > 0) {
                if (formData.password == result.data[0].password) {
                        localStorage.setItem('adminid', result.data[0].id);
                        localStorage.setItem('adminname', result.data[0].name);
                        localStorage.setItem('adminusername', result.data[0].username)
                        toast.success('login successful');
                        redirect('/index');
                }
                else {
                    toast.error("Password doesn't match");
                    setFormData({ ...formData, password: '' });
                }
            }
            else {
                toast.error("Email not found");
                setFormData({ ...formData, username: '', password: '' });
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
                                            <img src="assets/img/logo.png" alt />
                                            <span className="d-none d-lg-block">Admin</span>
                                        </a>
                                    </div>{/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p className="text-center small">Enter your username &amp; password to login</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text" name="username" value={formData.username}
                                                            onChange={onchange} className="form-control" id="yourUsername" required />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Password</label>
                                                    <input type="password" name="password" value={formData.password}
                                                        onChange={onchange} className="form-control" id="yourPassword" required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="remember"  defaultValue="true" id="rememberMe" />
                                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <Link className="btn btn-primary w-100" type="submit" onClick={onsubmit}>Login</Link>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="credits">
                                        {/* All the links in the footer should remain intact. */}
                                        {/* You can delete the links only if you purchased the pro version. */}
                                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                        Designed by <a href="https://bootstrapmade.com/">Parth Shinde</a>
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

export default Login