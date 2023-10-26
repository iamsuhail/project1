import {React, useState} from "react";
import "../styles/navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from '../assets/HireXzo_Solutions_LLP_No_BG.png'
import Signup from "../pages/signup/Signup"
import { Outlet, Link } from "react-router-dom";
import HoverCard from "./HoverCard";


const Navbar = ({ openHover }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [hover, setHover] = useState(false);

  function hoverHandlerTrue(){
    setHover(true);
  }

  function hoverHandlerFalse(){
    setHover(false);
  }

    const openSignup = () => {
        setSignupOpen(true);
    };
    const closeSignup = () => {
      setSignupOpen(false);
  };
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <NavLink to={"/"}>
                <img
                  src={logo}
                  alt="logo"
                />
              </NavLink>
              <span>
                
                <br />
                <strong></strong>
              </span>
            </div>
            
          </div>
          <div className="nav-left">
            <div className="nav-tabs">
              <div className="learn-tab">
              <NavLink to="/courses" onClick={openHover} className="learn-tab-child" onMouseEnter={hoverHandlerTrue} onMouseLeave={hoverHandlerFalse}>
                  {/* <span className="tab-icon"></span> */}
                  <span className="tab-name">Courses</span>
                  {
                    hover && <HoverCard hover={hover}/>
                  }

                
                </NavLink>

                
              </div>
              {/* {
                 hover && <HoverCard hover={hover}/>
              } */}
           
              <div className="practice-tab">
                <NavLink to={"/practice"}>
                  {/* <span className="tab-icon"></span> */}
                  <span className="tab-name">Practice</span>
                </NavLink>
              </div>
              
              {/* <div className="mentorship-tab">
                <NavLink to={"/mentor"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">Hackathons</span>
                </NavLink>
              </div> */}
              <div className="jobs-tab">
                <NavLink to={"/job-portal"}>
                  {/* <span className="tab-icon"></span> */}
                  <span className="tab-name">Jobs</span>
                </NavLink>
              </div>
              <div className="compete-tab">
                <NavLink to={"/compete"}>
                  {/* <span className="tab-icon"></span> */}
                  <span className="tab-name">Assesments</span>
                </NavLink>
              </div>
            </div>
            
            <div className="nav-btns">
            {/* <div className="nav-search">
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="Search Opportunities"
              />
            </div> */}
              <button className="btn host-btn">
                {/* <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                  alt="host btn"
                /> */}
                <span>Post</span>
              </button>
              {/* <Link to="/signup" > */}
                <button className="btn host-btn" onClick={openSignup}>
                  <span>Login</span>
                  {/* <img
                    src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                    alt="host btn"
                  /> */}
                  
                </button>
              {/* </Link> */}
              <button className="menu-btn">
                
              </button>
            </div>
          </div>
        </div>
      <Signup isOpen={isSignupOpen} onClose={closeSignup}/>
      </nav>
    </>
  );
};

export default Navbar;
