import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Index from './Pages/Index';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Form_editor from './Pages/Form/Form_editor';
import AddProduct from './Pages/Form/AddProduct';
import AddTestimonial from './Pages/Form/AddTestimonial';
import Form_validation from './Pages/Form/Form_validation';
import User_table from './Pages/Table/User_table';
import General_table from './Pages/Table/General_table';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error_404 from './Pages/Error_404';
import Contact_table from './Pages/Table/Contact_table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Links from './Components/Links';
import Product_table from './Pages/Table/Product_table';
import Testimonial_table from './Pages/Table/Testimonial_table';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/index' element={<><Header /><Index /><Footer /><Links/></>}></Route>
        <Route path='/profile' element={<><Header /><Profile /><Footer /><Links/></>}></Route>
        <Route path='/contact' element={<><Header /><Contact /><Footer /><Links/></>}></Route>
        <Route path='/addproduct' element={<><Header /> <AddProduct /> <Footer /><Links/></>}></Route>
        <Route path='/form_validation' element={<><Header /> <Form_validation /> <Footer /><Links/></>}></Route>
        <Route path='/form_editor' element={<><Header /> <Form_editor /> <Footer /><Links/></>}></Route>
        <Route path='/addtestimonial' element={<><Header /> <AddTestimonial /> <Footer /><Links/></>}></Route>
        <Route path='/general_table' element={<><Header /> <General_table /> <Footer /><Links/></>}></Route>
        <Route path='/user_table' element={<><Header /> <User_table /> <Footer /><Links/></>}></Route>
        <Route path='/contact_table' element={<><Header /> <Contact_table/> <Footer /><Links/></>}></Route>
        <Route path='/product_table' element={<><Header /> <Product_table/> <Footer /><Links/></>}></Route>
        <Route path='/testimonial_table' element={<><Header /> <Testimonial_table/> <Footer /><Links/></>}></Route>
        <Route index path='/' element={<><Login /><Links/></>}></Route>
        <Route path='/register' element={<><Register /><Links/></>}></Route>
        <Route path='*' element={<><Error_404 /><Links/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
