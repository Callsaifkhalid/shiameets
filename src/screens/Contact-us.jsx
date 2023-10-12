import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contactheader from "../components/Contact-header";
import Footer from "../components/Footer";
import ContactInner from "../components/Contact-inner";

export default function ContactUs() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar navComponent={<Contactheader />} />
      <ContactInner />
      <Footer />
    </>
  );
}
