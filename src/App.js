import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import Signup from "./pages/signup/Signup";
import NavHover from'./components/NavHover';
import Courses from './pages/Courses';


function App() {
  const [isHoverVisible, setHoverVisible] = useState(false);

  const openHover = () => {
    setHoverVisible(true);
  };

  const closeHover = () => {
    setHoverVisible(false);
  };


  return (
    <>
    <Router>
       <Navbar openHover={openHover} />
      <Routes>
        
        <Route
          path="/"
          element={<Home />}
        />
        
        <Route
          path="/Courses-list"
          element={<NavHover/>}
        />

        <Route path='/courses' element={<Courses/>}/>

        <Route
          path="/practice"
          element={<Practice />}
        />
        <Route
          path="/job-portal"
          element={<JobPortal />}
        />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
      <MobileNav />
      
      <Footer /> 
      {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}

    </Router>
    </>
  );
}

export default App;
