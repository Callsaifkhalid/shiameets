import React from "react";
import footerImg from "../assests/footer-img.svg";
import { FaPinterestP } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
export default function Footer({ marg }) {
  return (
    <>
      <div className="footerBgColor">
        <div className="footerMain">
          <div className="footerChild1">
            <img src={footerImg} alt="" />
          </div>
          <div className="footerChild2">
            <div className="pinterest margright">
              <FaPinterestP size={25} stroke="currentColor" />
            </div>
            <div className="insta margright">
              <PiInstagramLogoFill stroke="currentColor" size={25} />
            </div>
            <div className="twitter margright">
              <RiTwitterXFill stroke="currentColor" size={25} />
            </div>
            <div className="facebook margright">
              <FaFacebookF stroke="currentColor" size={25} />
            </div>
          </div>
          <div className="footerChild3">
            <p className="footerPara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea laboris commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate
            </p>
          </div>
        </div>
        <p className="footerEnd">© All Rights Reserved 2023 ShiaMeets</p>
      </div>
    </>
  );
}
