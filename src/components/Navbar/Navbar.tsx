import personProfile from "../../images/person-profile.jpeg";
// import NavbarItemsTypes from "../../interfaces/NavbarTypes";
import topNavbar from "./Navbar.module.css";
import leftSidebar from "../Leftbar/Leftbar.module.css";
import logo from "../../images/logo.jpeg";
import arrorSidebarImg from "../../images/arror-sidebar.svg";

const Navbar = () => {
  const navItemsArr = [
    "Dashboards",
    "Schools",
    "Teachers",
    "Students",
    "Reports",
  ];

  const navbarItems = navItemsArr.map((item: string, index: number) => (
    <li key={index} className={topNavbar.navItem}>
      {item}
    </li>
  ));
  return (
    <>
      <header className={topNavbar.header}>
        <nav className={topNavbar.topNavBar}>
          <div className={leftSidebar.sidebarTop}>
            <div className={topNavbar.topNavbarSideLogo}>
              <img
                className={leftSidebar.logoSidebarImg}
                src={logo}
                alt="cbc logo"
              />
            </div>
            <div className={topNavbar.arrow}>
              <img
                className={topNavbar.arrorSidebarImg}
                src={arrorSidebarImg}
                alt="arror sidebar"
              />
            </div>
          </div>
          <div>
            <ul>{navbarItems}</ul>
          </div>
          <div className={topNavbar.profileUser}>
            <ul>
              <li className={topNavbar.navItem}>
                <div className={topNavbar.navItemPosition}>
                  <span className={topNavbar.topbarSpan1}>Hi,</span>
                  <span className={topNavbar.topbarSpan2}>CBC</span>
                  <img src={personProfile} alt="person profile" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
