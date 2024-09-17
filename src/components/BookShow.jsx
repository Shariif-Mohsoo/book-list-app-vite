import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-book-context";
const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    //give an id of the current book.
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    //give an id  || title of the current book.
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = showEdit ? (
    <BookEdit onSubmit={handleSubmit} book={book} />
  ) : (
    <h3>{book.title}</h3>
  );
  // IT PROVIDES USE FREE IMAGE SERVICE VISIT (https://picsum.photos) for documentation.
  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}></button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};

export default BookShow;
