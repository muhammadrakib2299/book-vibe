import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

function Books() {
  //   state for books
  const [books, setBooks] = useState([]);

  //   Declare Useeffect
  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-bold pb-8">Books</h1>
      <div>
        {/* Books container */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
