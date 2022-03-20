import { Link, Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footerNav">
        <ul className="footerItems">
          <li className="footerList">
            <Link className="footerLink" to="/">
              <span>2022 ©</span> CBC EMEA
            </Link>
          </li>
          <li className="footerList">
            <Link className="footerLink" to="/about">
              About
            </Link>
            <Link className="footerLink" to="/team">
              Team
            </Link>
            <Link className="footerLink" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </footer>
  );
};

export default Footer;
