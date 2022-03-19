import { Link, Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <span>2022 ©</span> <Link to="/">CBC EMEA</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </footer>
  );
};

export default Footer;
