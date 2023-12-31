import { useBookContext } from "../../context/BookContext/BookContext";
import { BookCard } from "../index";
import styles from "../CurrentlyReading/CurrentlyReading.module.css";

const WantToRead = () => {
  const { state } = useBookContext();

  const wantToReadBooks = state.filter(({ wantToRead }) => wantToRead);

  return (
    <div
      style={{
        marginTop: "1.5rem",
      }}
    >
      <h1>Want to Read</h1>
      <div className={styles.bookGrid}>
        {wantToReadBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export { WantToRead };
