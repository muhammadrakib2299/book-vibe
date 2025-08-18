import React from "react";
import { FcRating } from "react-icons/fc";

function Book({ book }) {
  const { bookName, author, rating, image, tags, category } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img className="h-[166px] " src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex  gap-5">
          {tags.map((tag) => (
            <button class="btn btn-sm bg-green-100 rounded-4xl outline-0 text-green-600 font-bold">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title font-bold pt-3">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold text-gray-600">By: {author}</p>

        <div className="my-2 border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge">{category}</div>
          <div className="flex justify-around items-center gap-2 ">
            <div>{rating}</div>
            <div className="text-2xl text-green-500">
              <FcRating className="text-green-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
