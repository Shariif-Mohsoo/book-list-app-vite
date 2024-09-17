import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) createBook(title);
    setTitle("");
  };

  return (
    <div
      className="book-create"
      style={{ zIndex: 10, background: "#000", color: "#fff" }}
    >
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          autoFocus
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
