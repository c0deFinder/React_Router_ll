import { NavLink } from "react-router-dom";


const NavBar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <nav className="navbar">
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      {" - "}
      <NavLink to="/pokemon" className={setActive}>
        Pokemons
      </NavLink>
    </nav>
  );
};
export default NavBar