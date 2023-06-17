import { CurrentlyReading, Read, WantToRead } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeLayout}>
      <CurrentlyReading />
      <WantToRead />
      <Read />
    </div>
  );
};

export { Home };
