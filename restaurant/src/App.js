import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index';
import About from './Pages/About';
import Service from './Pages/Service';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Booking from './Pages/Booking';
import PNF from './Pages/PNF';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Cart from './Pages/Cart';
function App() {
  return (
    <BrowserRouter>
            <ToastContainer></ToastContainer>
      <Routes>
        <Route index path='/' element={<> <Index /> </>}></Route>
        <Route path='/about' element={<>  <About /> </>}></Route>
        <Route path='/service' element={<>  <Service /> </>}></Route>
        <Route path='/menu' element={<>  <Menu /> </>}></Route>
        <Route path='/cart' element={<>  <Cart /> </>}></Route>
        <Route path='/contact' element={<>  <Contact /> </>}></Route>
        <Route path='/team' element={<>  <Team /> </>}></Route>
        <Route path='/testimonial' element={<>  <Testimonial /> </>}></Route>
        <Route path='/booking' element={<>  <Booking /> </>}></Route>
        <Route path='/login' element={<>  <Login/> </>}></Route>
        <Route path='/signup' element={<>  <Signup/> </>}></Route>
        <Route path='/profile' element={<>  <Profile /> </>}></Route>
        <Route path='/editprofile/:userid' element={<>  <EditProfile/> </>}></Route>
        <Route path='*' element={<>  <PNF /> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
