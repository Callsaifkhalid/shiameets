import React from "react";
import headerMain from "../assests/headerMainImg.svg";
// import pakFlag from "../assests/pak-flag.svg";
import { IoMdMail } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
import ReactSelect from "./React-select";
// import ReactSelect from "react-select";

export default function NavbarInnerHeader() {
  //   const [isChecked, setIsChecked] = useState(false);

  //   const handleChange = () => {
  //     setIsChecked(!isChecked);
  //   };

  return (
    <>
      <div className="navInnerMain posiAbsolute">
        <div className="navInnerChild1">
          <img className="imgResponsive" src={headerMain} alt="" />
        </div>

        <div className="navInnerChild2">
          <div className="width50">
            <h2 className="bolgHeading1">Find a Shia partner.</h2>
            <h2 className="bolgHeading2">Connect with purpose.</h2>

            <div className="navHeadInput1">
              <IoMdMail size={25} />{" "}
              <input
                className="navHeadMailInput1"
                placeholder="Emil Address"
                type="text"
              />
            </div>

            {/* <div className="navHeadInput1"> */}
            <ReactSelect />

            {/* <img className="imgright" src={pakFlag} alt="" />
              <IoIosArrowDown />

              <input
                className="navHeadMailInput2"
                placeholder="Phone Number (optional)"
                type="text"
              /> */}
            {/* </div> */}
            <div className="navLabel">
              <div className="navLabelChild1">
                <input type="checkbox" className="checkboxnav" />
              </div>

              <div className="navLabelChild2">
                <p>
                  I consent to receive promotional emails, newsletters, and
                  messages from ShiaMeets.
                </p>
              </div>
            </div>

            <button className="btn1">JOIN THE WAITLIST</button>

            {/* <ReactSelect /> */}

            {/* <label style={{ color: "black", background: "transparent" }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              Check me
            </label> */}
          </div>
        </div>
      </div>
    </>
  );
}
