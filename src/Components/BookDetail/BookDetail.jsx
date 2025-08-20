import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredList } from "../../util/stordToDB";

function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    image,
    author,
    rating,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredList(id);
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-base-100 p-10 rounded-2xl shadow-md ">
          {/* Left: Book Image */}
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt="Book Cover"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Book Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {bookName}
              </h1>
              <p className="text-gray-700 font-medium mb-4">By : {author}</p>
              <p className="text-lg font-semibold border-b border-gray-200 pb-2 mb-4">
                {category}
              </p>

              {/* Review */}
              <p className="mb-4 text-gray-700 text-justify">
                <span className="font-bold">Review : </span>
                {review}
                <br />
                <br />
                Id neque neque pretium enim platea urna non dictum. Faucibus
                dignissim ridiculus nibh tristique massa non.
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      class="bg-green-100 text-green-700 mr-2 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </span>
              </div>

              {/* Info List */}
              <div className="space-y-2 mb-6">
                <p>
                  <span className="font-medium">Number of Pages: </span>{" "}
                  <span className="font-bold">{totalPages}</span>
                </p>
                <p>
                  <span className="font-medium">Publisher: </span>{" "}
                  <span className="font-bold">{publisher}</span>
                </p>
                <p>
                  <span className="font-medium">Year of Publishing: </span>{" "}
                  <span className="font-bold">{yearOfPublishing}</span>
                </p>
                <p>
                  <span className="font-medium">Rating: </span>{" "}
                  <span className="font-bold">{rating}</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleMarkAsRead(bookId)}
                className="btn btn-primary"
              >
                Mark as Read
              </button>
              <button className="btn btn-outline">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
