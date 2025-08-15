import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Root() {
  return (
    <div>
      {/* Nav bar  */}
      <Navbar></Navbar>

      {/* Outlet */}
      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Root;
