import React,{useEffect,useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [profileData, setProfileData] = useState({});
  const redirect = useNavigate();
  
  useEffect(()=>{
      if(localStorage.getItem('id')){
        fetch()
      }
      else{
        redirect('/')
      }
  },[])

  const fetch = async() => {
    const response = await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    console.log(response)
    setProfileData(response.data);
    console.log(profileData)
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
                Profile
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* nav & banner end */}

        {/* body */}
        <div>
          {/* About Start */}
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-12">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    Profile
                  </h5>
                  <h1 className="mb-4">
                    Welcome to{" "}
                    <i className="fa fa-utensils text-primary me-2" />
                    Restoran
                  </h1>
                  <h2 className="mb-4">
                    {profileData.name}
                  </h2>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h3
                          className="flex-shrink-0 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          Email
                        </h3>
                        <div className="ps-4">
                          <h6 className="text-uppercase mb-0">{profileData.email}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h3
                          className="flex-shrink-0 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          Mobile
                        </h3>
                        <div className="ps-4">
                          <h6 className="text-uppercase mb-0">{profileData.mobile}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-primary py-3 px-5 mt-2" href={'javascript:void(0)'} onClick={()=>{redirect(`/editprofile/${profileData.id}`)}}>
                    Edit Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
        </div>

        {/* body end */}
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
