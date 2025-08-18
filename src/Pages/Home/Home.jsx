import React from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../../Components/Books/Books";

function Home() {
  return (
    <div>
      {/* Banner Part */}
      <Banner></Banner>
      {/* Books Part */}
      <Books></Books>
    </div>
  );
}

export default Home;
