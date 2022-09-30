import ispotify from "../../../assets/icons/ispotify.png";
import "./style.css";

const NavbarS = () => {
  return (
    <nav className="navbar">
      <header>
        <img src={ispotify} className="ispotify" alt="ispotify" />
        <h1 className="logoName">iSpotify®</h1>
      </header>
    </nav>
  );
};

export default NavbarS;
