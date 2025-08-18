import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../../Utls/ScrollToTopButton";

function Root() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Nav bar  */}
      <Navbar></Navbar>

      {/* Outlet */}
      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>

      {/* Scroll to top button */}
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default Root;
