import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

function Books() {
  //   state for books
  const [books, setBooks] = useState([]);

  //   Declare Useeffect
  useEffect(() => {
    fetch("../../../public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl py-10 font-bold">Books</h1>

      <div>
        <h2 className="text-2xl py-10">Total Books : {books.length}</h2>
        <div>
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
