import { CurrentlyReading, Read, WantToRead } from "../../components";
import { useBookContext } from "../../context/BookContext/BookContext";
import styles from "./Home.module.css";

const Home = () => {
  const { state } = useBookContext();

  console.log(state);

  return (
    <div className={styles.homeLayout}>
      <CurrentlyReading />
      <hr />
      <WantToRead />
      <hr />
      <Read />
    </div>
  );
};

export { Home };
