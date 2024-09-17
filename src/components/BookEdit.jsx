import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        value={title}
        className="input"
        onChange={handleChange}
        autoFocus
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
