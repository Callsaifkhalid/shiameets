import React from "react";
// import { IoMailOpenOutline } from "react-icons/io5";
// import MailOpen from "../SVG/MailOpen";
export default function ContactInformationInner(props) {
  return (
    <div>
      <div className="icons-main">
        <div className="icons-main-child1">
          {/* <IoMailOpenOutline fill="white" size={23} /> */}
          {/* <MailOpen /> */}
          {props.img}
        </div>
        <div className="icons-main-child2">
          <p className="contactIconsPara">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
