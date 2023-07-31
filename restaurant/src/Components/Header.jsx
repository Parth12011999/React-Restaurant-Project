import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import axios from 'axios';

function Header() {
    const [count, setCount] = useState(0);
    const redirect = useNavigate();
    useEffect(() => {
        fetch()
    }, [count]);

    const onlogout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('productid')
        localStorage.removeItem('cartid');
        redirect('/')
        toast.success("Logout successful")

    }

    const fetch = async () => {
        if (localStorage.getItem('id')) {
            const response = await axios.get(`http://localhost:3000/cart?userid=${localStorage.getItem('id')}`)
            setCount(response.data.length)
        }
        else {
            setCount(0)
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <NavLink to='/booking' className="btn btn-primary mx-2">Book A Table</NavLink>
                    {(() => {
                        if (localStorage.getItem('id')) {
                            return (
                                <>
                                    <a to='/login' className="btn btn-primary mx-2" href='javascript:void(0)' onClick={onlogout}>log out</a>
                                    <Link to={'/profile'} className="profile d-flex flex-column text-center">
                                        <i class="bi bi-person-circle text-warning"></i>
                                        <a to='/login' className="mx-2" href='javascript:void(0)'>Hi, {localStorage.getItem('name').toLocaleUpperCase()}</a>
                                    </Link>
                                </>
                            )
                        }
                        else {
                            return (
                                <NavLink to='/login' className="btn btn-primary">log in</NavLink>
                            )
                        }
                    })()}
                    <NavLink to={'/cart'} type="button" className="btn btn-primary position-relative mx-2">
                        <i className='bi bi-cart'></i>
                        {
                            localStorage.getItem('id') ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {count}
                                <span className="visually-hidden">unread messages</span>
                            </span> : null 
                        }
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header