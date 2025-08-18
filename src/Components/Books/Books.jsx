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
    <div>
      <h1 className="text-center text-4xl py-10 font-bold">Books</h1>

      <div>
        {/* Books container */}
        <div className="py-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
