import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link className="logo" to="/">
        CollegeCompass
      </Link>

      <div className="navlinks">
        <Link to="/">Colleges</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/predictor">Predictor</Link>
      </div>

    </nav>
  );
}

export default Navbar;