import React, { useState } from 'react';
import DownloadApp from "../components/DownloadApp";
import FeaturedOpp from "../components/FeaturedOpp";
import GetHired from "../components/GetHired";
import HomeHero from "../components/HomeHero";
// import LPM from "../components/LPM";
// import Opportunities from "../components/Opportunities";
import OurNumbers from "../components/OurNumbers";
// import Showcase from "../components/Showcase";
import SlidingBrands from "../components/SlidingBrands";
// import Navbar from "../components/Navbar";
import NavHover from'../components/NavHover';

const Home = () => {
  // const [isHoverVisible, setHoverVisible] = useState(false);

  // const openHover = () => {
  //   setHoverVisible(true);
  // };

  // const closeHover = () => {
  //   setHoverVisible(false);
  // };
  return (
    <>
    <div className="Home">
      {/* {isHoverVisible && <NavHover closeHover={closeHover} />} */}
      {/* <Navbar openHover={openHover} />- */}
      <HomeHero />
      </div>
      <SlidingBrands
        title={"Prepare and Crack This"}
        // small={"This companies"}
      />
      <DownloadApp />
      {/* <Opportunities /> */}
      {/* <Showcase type={"home"} /> */}
      {/* <LPM /> */}
      <FeaturedOpp type={"home"} />
      <GetHired />
      <OurNumbers />
      
    </>
  );
};

export default Home;
