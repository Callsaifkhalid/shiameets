import React from "react";
// import blogMainImg from "../assests/blogSection1MainImg.svg";
import blogChildImg from "../assests/blogSection1ChildImg.svg";
import blogChild2Img from "../assests/blogSection1Child2Img.svg";
import { useLocation } from "react-router-dom";
export default function BlogSecondFirst() {
  const { state } = useLocation();
  let mydata = state && state.cardObj ? state.cardObj : null;
  console.log("mydata", mydata);

  return (
    <>
      <div className="blogSection2Main-1">
        <div className="blogSection2child1">
          <img className="imgResponsive" src={mydata.image} alt="" />
        </div>
        <div className="blogSection2child2-1">
          <div className="energyHealer">
            <p className="energyHealerPara">Energy Healers</p>
          </div>
          <h2 className="energyHealerH2">
            What is Holistic Healing and Where to Find Help?
          </h2>
          <p className="blogSecondPara">
            We exist to turn pain into gain by giving the world a place to
            connect with top-rated professional healers and fellow advocates of
            natural healing. We want to lighten the load on the world while
            bringing communities is closer around the world, through a range of
            holistic healing courses, free wellness e-books, and beyond. Ultra
            Healers makes mental healing affordable and advocates those
            accessible. <span className="blogSecondSpan"> Read More </span>
          </p>

          <div className="imgTextMain">
            <div className="imgTextMainChild1-1">
              <div className="imgTextMaiInnerChild1">
                <img src={blogChildImg} alt="" />
              </div>
              <div className="imgTextMaiInnerChild1">
                <p className="InnerChild1Para">Frankie Sullivan</p>
                <p className="InnerChild1Para1">Ultra Healers Author</p>
              </div>
            </div>
            <div className="imgTextMainChild1-1">
              <div className="imgTextMaiInnerChild1">
                <img src={blogChild2Img} alt="" />
              </div>
              <div className="imgTextMaiInnerChild1">
                <p className="innerChild1Para2">25 Jan 2023</p>
              </div>
            </div>
            <div className="imgTextMainChild1-1">
              <div className="imgTextMaiInnerChild1-1">
                <p className="innerChild1Para3">Healing, Pattern</p>
              </div>
              {/* <div className="imgTextMaiInnerChild1"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
