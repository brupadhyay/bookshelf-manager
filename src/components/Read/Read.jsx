import { useBookContext } from "../../context/BookContext/BookContext";
import { BookCard } from "../index";
import styles from "../CurrentlyReading/CurrentlyReading.module.css";

const Read = () => {
  const { state } = useBookContext();

  const alreadyReadBooks = state.filter(({ read }) => read);

  return (
    <>
      <h1>Read Books</h1>
      <div className={styles.bookGrid}>
        {alreadyReadBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export { Read };
