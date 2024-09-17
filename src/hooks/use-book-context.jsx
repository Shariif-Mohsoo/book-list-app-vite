import { useContext } from "react";
import { booksContext } from "../context/book";
function useBooksContext() {
  return useContext(booksContext);
}
export default useBooksContext;
