import { useState, useCallback, createContext } from "react";
import axios from "axios";
const booksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const fetchBooks = useCallback(async () => {
    const { data } = await axios.get("http://localhost:3001/books");
    // console.log(data);
    setBooks(data);
  }, []);
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    // console.log(data);
    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...data };
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    //ID'S FOR THE RECORD  WILL BE GENERATED RANDOMLY B JSON SERVER.
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };
  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };
  return (
    <booksContext.Provider value={valueToShare}>
      {children}
    </booksContext.Provider>
  );
};

export { Provider };
export { booksContext };
