import React from "react";
import Bookimage from "../../assets/books.jpg";
function Banner() {
  return (
    <div className="my-5">
      <div className="hero bg-base-200 lg:p-10 md:p-10">
        <div className="hero-content py-10 flex-col lg:flex-row-reverse">
          <img src={Bookimage} className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
