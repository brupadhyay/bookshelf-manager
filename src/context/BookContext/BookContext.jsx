import { createContext, useContext, useReducer } from "react";

import { books as initialBooks } from "../../database/books";
import { bookreducer } from "../../reducer/bookreducer";

const BookContext = createContext();

// eslint-disable-next-line react/prop-types
const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookreducer, initialBooks);

  return (
    <BookContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = () => useContext(BookContext);

export { useBookContext, BookContext, BookProvider };
