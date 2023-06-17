import { useBookContext } from "../../context/BookContext/BookContext";
import { BookCard } from "../index";
import styles from "./CurrentlyReading.module.css";

const CurrentlyReading = () => {
  const { state } = useBookContext();

  const CurrentlyReadingBooks = state.filter(
    ({ currentlyReading }) => currentlyReading
  );

  return (
    <>
      <h1>Currently Reading</h1>
      <div className={styles.bookGrid}>
        {CurrentlyReadingBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export { CurrentlyReading };
