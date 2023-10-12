import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
export default function Navbar({ navComponent, bgimg }) {
  const [isShow, setIsShow] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function hamburger() {
    setIsShow(!isShow);
    // window.alert("Hamburger is clicked");
  }
  return (
    <>
      {/* <div className={scrolling ? "navBgColo" : "navBgImg"}></div> */}
      <div className={bgimg ? "navBgColo" : "navBgImg"}>
        <nav
          className={`nav ${scrolling ? "change_nav_bag" : ""}`}
          style={{ backgroundColor: scrolling ? "#43AD90" : "" }}
        >
          <div className="homeNavMain">
            <div className="homeNavMainChild1">
              <img src={logo} alt="" />
            </div>
            <div className="homeNavMainChild2">
              <NavLink
                to="/"
                className="navlink hideNavLink"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "black" : "",
                    color: isActive ? "white" : "",
                    textDecoration: "none",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className="navlink hideNavLink"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "black" : "",
                    color: isActive ? "white" : "",
                    textDecoration: "none",
                  };
                }}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="navlink hideNavLink"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "black" : "",
                    color: isActive ? "white" : "",
                    textDecoration: "none",
                  };
                }}
              >
                Contact Us
              </NavLink>
            </div>
            <div onClick={hamburger} className="hemburger hide-ico">
              {isShow ? (
                <AiOutlineClose fill="black" size={25} />
              ) : (
                <GiHamburgerMenu fill="black" size={25} />
              )}
            </div>
          </div>
          <div
            className="responsive-nav"
            style={{
              height: isShow ? "250px" : "0px",
              width: isShow ? "70%" : "0%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // transition: "0.5s",
            }}
          >
            <NavLink
              to="/"
              className="navlink"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className="navlink"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                };
              }}
            >
              Blog
            </NavLink>
            {/* <span className="link">Investments</span> */}
            <NavLink
              to="/contact"
              className="navlink"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#011039" : "",
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "25px",
                };
              }}
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
        <div>{navComponent}</div>
      </div>
    </>
  );
}
