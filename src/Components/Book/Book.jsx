import React from "react";

function Book({ book }) {
  const { bookName, author, rating, image, tags } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-gray-300 py-8 rounded-2xl">
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default Book;
