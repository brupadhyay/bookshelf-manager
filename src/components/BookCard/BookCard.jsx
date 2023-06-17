/* eslint-disable react/prop-types */

import styles from "./BookCard.module.css";
import { useBookContext } from "../../context/BookContext/BookContext";

const BookCard = ({ book }) => {
  const options = ["currentlyReading", "wantToRead", "read", "none"];

  const { dispatch } = useBookContext();

  const optionsToDisplay = options.filter((type) => !book[type]);

  const category = options.find((type) => book[type]);

  const dropdownHandler = (e, bookId) => {
    const value = e.target.value;
    if (value) {
      dispatch({
        type: "move",
        payload: { value, bookId },
      });
    }
  };

  return (
    <div className={styles.bookcard}>
      <img className={styles.bookPhoto} src={book.bookImage} alt="book-photo" />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <div className={styles.control}>
        <p>
          Current Category is <span>{category}</span>
        </p>
        <select
          onChange={(e) => dropdownHandler(e, book.id)}
          className={styles.dropdown}
          name="books"
          id="movement"
        >
          <option value="">--Move to--</option>
          {optionsToDisplay.map((optionVal) => (
            <option key={optionVal} value={optionVal}>
              {optionVal}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { BookCard };
