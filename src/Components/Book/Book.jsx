import React from "react";

function Book({ book }) {
  const { bookName, author, rating } = book;

  return (
    <div className="py-5">
      <h2>{bookName}</h2>
    </div>
  );
}

export default Book;
