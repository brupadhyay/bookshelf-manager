import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Bookshelf Manager</h1>
      <button onClick={() => navigate("/search")}>Search</button>
    </>
  );
};

export { Navbar };
