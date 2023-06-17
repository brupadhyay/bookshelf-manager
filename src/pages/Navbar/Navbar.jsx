import { useNavigate } from "react-router";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <h1 onClick={() => navigate("/")}>Bookshelf Manager</h1>
      <button onClick={() => navigate("/search")}>Search</button>
    </div>
  );
};

export { Navbar };
