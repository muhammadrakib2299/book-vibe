import React from "react";
import Bookimage from "../../assets/books.jpg";

function Banner() {
  return (
    <div className="my-8">
      <div className="hero bg-base-200 px-5 py-10 lg:p-16">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
          {/* Image */}
          <img
            src={Bookimage}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
            alt="Books"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
