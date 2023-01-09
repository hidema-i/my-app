import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "James Clear",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break BadOnes",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "Colleen Hoover",
    title: "It Ends with Us: A Novel (1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
