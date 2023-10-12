import React from "react";
// import Contactheader from "./Contact-header";
import { AiOutlineSearch } from "react-icons/ai";

export default function Blogheader() {
  return (
    <>
      <div className="contactCenter">
        <p className="blogWelcome">Welcome to</p>
        <h1 className="blogHeader">Our Blogs</h1>

        <div className="blogInputMain">
          <div className="blogInputChild1">
            <AiOutlineSearch fill="white" size={15} />
          </div>
          <div className="blogInputChild2">
            <input className="blogInput" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </>
  );
}
