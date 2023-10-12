import React from "react";
import ContactInformationInner from "./Contact-information-inner";
import MailOpen from "../SVG/MailOpen";
import { BiPhoneCall } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
// import { TbMapPin2 } from "react-icons/tb";
import Map from "../SVG/Map";
export default function ContactInner() {
  return (
    <>
      <div className="contactinner-main">
        <div className="contactinner-mainChild1">
          <div className="mainChild1Inner">
            <h2 className="contactH1">Contact Information</h2>
            <p className="contactP1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>

            <div className="iconsMain">
              <ContactInformationInner
                img={<MailOpen />}
                title="sample@gmail.com"
              />
              <ContactInformationInner
                img={<BiPhoneCall fill="white" size={23} />}
                title="+1(361)-260-6000"
              />
              <ContactInformationInner
                img={<Map />}
                title="6113 Saratoga Blvd, Ste F PMB #193 Christi, TX 78414"
              />
            </div>
            <div className="whiteBoxMain">
              <div className="footerChild2">
                <div className="iconsFooter1">
                  <div className="pinterest margright whiteBox">
                    <FaPinterestP fill="black" size={20} />
                  </div>
                  <div className="insta margright whiteBox">
                    <PiInstagramLogoFill fill="black" size={20} />
                  </div>
                </div>

                <div className="iconsFooter2">
                  <div className="twitter margright whiteBox">
                    <RiTwitterXFill fill="black" size={20} />
                  </div>
                  <div className="facebook margright whiteBox">
                    <FaFacebookF fill="black" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactinner-mainChild2">
          <h2 className="mainChild2Heading">Get In Touch !</h2>
          <form action="">
            <div className="input1Main">
              <div className="input1Child">
                <input
                  className="contactInput"
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="input2Child">
                <input
                  className="contactInput1"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="textAreaMain">
              <input
                className="contactInput2"
                type="text"
                placeholder="Subject"
              />

              <textarea
                className="contacttextarea"
                name=""
                id=""
                cols="50"
                rows="10"
                placeholder="Messages"
              ></textarea>
            </div>

            <button className="contactBtn" type="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
