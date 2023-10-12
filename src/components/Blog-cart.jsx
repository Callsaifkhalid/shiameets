import React from "react";
import { useNavigate } from "react-router-dom";

export default function Blogcart({ cartImg }) {
  const navigate = useNavigate("");

  const handleCart = () => {
    let obj = {
      image: cartImg,
    };
    console.log("obj", obj);

    navigate("/blogsecond", { state: { cardObj: obj } });
  };

  // const handleCartData = () => {
  // };
  return (
    <>
      <div onClick={handleCart} className="cartMain">
        <div className="cartImg">
          <img className="imgResponsive" src={cartImg} alt="" />
        </div>
        <div className="cartText">
          <h3 className="innerCartText">
            What's the difference between Healers and Doctors?
          </h3>
          <p className="innerCartPara">
            From removals to assembling furniture, healers’s consumer trends
            report reveals what made the top of India.
          </p>
          <p className="innerRead">Read more</p>
        </div>
      </div>
    </>
  );
}
