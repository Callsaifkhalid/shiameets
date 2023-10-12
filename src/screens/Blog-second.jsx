import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Blogheader from "../components/Blog-header";
import BlogSecondFirst from "../components/Blog-second-first";
import BlogSecondSecondSection from "../components/Blog-second-second-section";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function BlogSecond() {
  // const { state } = useLocation();
  // let mydata = state && state.cardObj ? state.cardObj : null;
  // console.log("mydata", mydata);
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar navComponent={<Blogheader />} />
      <BlogSecondFirst />
      <BlogSecondSecondSection />
      <Footer />
    </div>
  );
}
