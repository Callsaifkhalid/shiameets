import React from "react";
// import { NavLink } from "react-router-dom";
export default function BlogFirstSection() {
  return (
    <div>
      <div className="blogSection1">
        <div className="section1Child1">
          <p className="child1Para">All Categories</p>
        </div>
        <div className="section1Child1">
          <p className="child1Para">Life Skills</p>
        </div>
        <div className="section1Child1">
          <p
            // to="/blogsecond"
            className="child1Para"
            // style={({ isActive }) => {
            //   return {
            //     backgroundColor: isActive ? "black" : "",
            //     color: isActive ? "white" : "",
            //     textDecoration: "none",
            //   };
            // }}
          >
            Energy Healers
          </p>
          {/* <p className="child1Para">Energy Healers</p> */}
        </div>
        <div className="section1Child1">
          <p className="child1Para">Service Guides</p>
        </div>
        <div className="section1Child1">
          <p className="child1Para">Spiritual Healing</p>
        </div>
        <div className="section1Child1">
          <p className="child1Para">Life Coaches</p>
        </div>
        <div className="section1Child1">
          <p className="child1Para">Sound Helaing</p>
        </div>
      </div>
      <div className="hrMarg">
        <hr />
      </div>
    </div>
  );
}
