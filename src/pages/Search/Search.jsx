import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import { BookCard } from "../../components";

import styles from "./Search.module.css";
import { useBookContext } from "../../context/BookContext/BookContext";
import { useNavigate } from "react-router";

const Search = () => {
  const { state } = useBookContext();

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const searchResults = searchValue.trim()
    ? [...state].filter(({ title }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : state;

  return (
    <div className={styles.search}>
      <h1>Search Page</h1>
      <button onClick={() => navigate("/")}>
        <BiArrowBack />
      </button>
      <input
        onChange={searchHandler}
        type="text"
        placeholder="search books by name here"
      />
      <div className={styles.bookGrid}>
        {searchValue.trim().length > 0 &&
          searchResults.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};
export { Search };
