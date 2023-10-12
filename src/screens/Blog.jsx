import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Blogheader from "../components/Blog-header";
import Footer from "../components/Footer";
import BlogFirstSection from "../components/Blog-first-section";
import BlogSecondSection from "../components/Blog-second-section";
import Blogcart from "../components/Blog-cart";
import blogcart1Img from "../assests/blogCart1Img.svg";
import blogcart2Img from "../assests/blogCart2Img.svg";
import blogcart3Img from "../assests/blogCart3Img.svg";
import blogcart4Img from "../assests/blogCart4Img.svg";
import blogcart5Img from "../assests/blogCart5Img.svg";
import blogcart6Img from "../assests/blogCart6Img.svg";
import blogcart7Img from "../assests/blogCart7Img.svg";
import blogcart8Img from "../assests/blogCart8Img.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar navComponent={<Blogheader />} />
      <BlogFirstSection />
      <BlogSecondSection />
      <div className="latestBlogMain">
        <h2 className="latestBlog">Latest Blogs</h2>
      </div>

      <div data-aos="fade-up" className="blogCartMain">
        <div className="blogCartChild1">
          <Blogcart cartImg={blogcart1Img} />
        </div>
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart2Img} />
        </div>
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart3Img} />
        </div>
      </div>
      <div data-aos="fade-up" className="blogCartMain margTop">
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart4Img} />
        </div>
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart5Img} />
        </div>
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart6Img} />
        </div>
      </div>
      <div data-aos="fade-up" className="blogCartMain1 margTop">
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart7Img} />
        </div>
        <div className="blogCartChild1">
          {" "}
          <Blogcart cartImg={blogcart8Img} />
        </div>
      </div>

      <Footer />
    </>
  );
}
