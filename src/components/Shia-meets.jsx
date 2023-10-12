import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Shiameets({ isReverse, ...props }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="imgTxtMain"
        style={{ flexDirection: isReverse ? "row-reverse" : "" }}
      >
        <div className="imgMain">
          <img className="imgResponsive1" src={props.shiaImg} alt="" />
        </div>
        <div className="txtMain">
          <h2 className="txtMainh2">{props.title}</h2>
          <h2 className="txtMainh2-1">{props.title1}</h2>
          <p className="paraMain">{props.content}</p>
        </div>
      </div>
    </>
  );
}
