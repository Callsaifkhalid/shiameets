import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NavbarInnerHeader from "../components/Navbar-inner-header";
import Shiameets from "../components/Shia-meets";
import seonedPhoneImg from "../assests/second-section-phone-img.svg";
import thirdPhoneImg from "../assests/third-section-phone-img.svg";
import fourthPhoneImg from "../assests/fourth-section-phone-img.svg";
import fiveIcoImg from "../assests/five-section-ico-main-img.svg";
import sixShildImg from "../assests/shildeupdated.svg";
import Footer from "../components/Footer";
export default function Home() {
  // const [color, setColor] = useState(false);
  // const chnageColor = function() {
  //   setColor;
  // }

  const [activeIndex, setActiveIndex] = useState(0);

  const handleHeadingClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar navComponent={<NavbarInnerHeader />} bgimg />

      <div className="container">
        <div
          className={
            activeIndex === 0 ? "containerChild1 active" : "containerChild1"
          }
          onClick={() => handleHeadingClick(0)}
        >
          <h2 className="conChild2H2">ShiaMeets</h2>
        </div>
        <div
          className={
            activeIndex === 1 ? "containerChild2 active" : "containerChild2"
          }
          onClick={() => handleHeadingClick(1)}
        >
          <h2 className="conChild2H2">ShiaGreets</h2>
        </div>
      </div>

      <Shiameets
        shiaImg={seonedPhoneImg}
        title="Embrace"
        title1="Shia Values"
        content="Connect with individuals who share your devotion to Islam through the teachings of the Ahl al-Bayt. ShiaMeets celebrates the unique traditions and the diverse values of Shia Islam, ensuring a deeper connection based on your shared beliefs."
      />
      <Shiameets
        isReverse
        shiaImg={thirdPhoneImg}
        title="Free to Use"
        content="Browse especially curated profiles, use basic filters, and chat with matches for free. "
      />
      <Shiameets
        shiaImg={fourthPhoneImg}
        title="Holistic"
        title1="Compatibility"
        content="Our advanced compatibility assessment delves into not only your interests and goals but also your religious alignment and social and cultural compatibility. Find a partner who resonates with your identity on a profound level.
"
      />
      <Shiameets
        isReverse
        shiaImg={fiveIcoImg}
        title="Parental"
        title1="Participation"
        content="Parents can create profiles to browse available matches for their children. Users have the option to make their profiles available to either parents or candidates, or both."
      />
      <div style={{ marginBottom: "9rem" }}>
        <Shiameets
          shiaImg={sixShildImg}
          title="Safe and"
          title1="Inclusive"
          content="With an in-built anti-screenshot feature and a selfie verification method to validate profiles, feel secure in an environment that prioritizes your privacy and safety. "
        />
      </div>
      <Footer />
    </>
  );
}
