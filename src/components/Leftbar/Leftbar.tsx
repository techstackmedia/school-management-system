import { FiHome } from "react-icons/fi";
import { BsWindowSidebar } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import logo from "../../images/logo.jpeg";
import arrorSidebarImg from "../../images/arror-sidebar.svg";
import leftSidebar from "./Leftbar.module.css";

const Leftbar = () => {
  return (
    <header className={leftSidebar.sidebarHeader}>
      <nav>
        <div className={leftSidebar.sidebarTop}>
          <div>
            <img
              className={leftSidebar.logoSidebarImg}
              src={logo}
              alt="cbc logo"
            />
          </div>
          <div>
            <img
              className={leftSidebar.arrorSidebarImg}
              src={arrorSidebarImg}
              alt="arror sidebar"
            />
          </div>
        </div>
        <div className={leftSidebar.sidebarSubItems}>
          <div className={leftSidebar.sidebarSubItemsMainActive}>Dashboard</div>
          <ul>
            <li>
              {/* to="/users" */}
              <div className={leftSidebar.leftSidebarLink}>
                <FiHome className={leftSidebar.sidebarReactIcon} />{" "}
                <span>User Management</span>
              </div>
            </li>
            <li>
              {/* to="/teachers" */}
              <div className={leftSidebar.leftSidebarLink}>
                <GoLinkExternal className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Schools</span>
              </div>
            </li>
            <li>
              {/*  to="/students" */}
              <div className={leftSidebar.leftSidebarLink}>
                <GoLinkExternal className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Teachers</span>
              </div>
            </li>
            <li>
              {/* to="/teachers" */}
              <div className={leftSidebar.leftSidebarLink}>
                <GoLinkExternal className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Students</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={leftSidebar.sidebarSubItems}>
          <div className={leftSidebar.sidebarSubItemsMain}>Reports</div>
          <ul>
            <li>
              <div className={leftSidebar.leftSidebarLink}>
                <BsWindowSidebar className={leftSidebar.sidebarReactIcon} />{" "}
                <span>School</span>
                <IoIosArrowForward className={leftSidebar.sidebarDropdown} />
              </div>
            </li>
            <li>
              <div className={leftSidebar.leftSidebarLink}>
                <BsWindowSidebar className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Teacher</span>
                <IoIosArrowForward className={leftSidebar.sidebarDropdown} />
              </div>
            </li>
            <li>
              <div className={leftSidebar.leftSidebarLink}>
                <BsWindowSidebar className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Student</span>
                <IoIosArrowForward className={leftSidebar.sidebarDropdown} />
              </div>
            </li>
          </ul>
        </div>
        <div className={leftSidebar.sidebarSubItems}>
          <div className={leftSidebar.sidebarSubItemsMain}>Attendance</div>
          <ul>
            <li>
              {/*  to="/students/attendance-report" */}
              <div className={leftSidebar.leftSidebarLink}>
                <GoLinkExternal className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Student Attendance</span>
              </div>
            </li>
            <li>
              {/* to="/teachers/attendance-report" */}
              <div className={leftSidebar.leftSidebarLink}>
                <GoLinkExternal className={leftSidebar.sidebarReactIcon} />{" "}
                <span>Teacher Attendance</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Outlet /> */}
    </header>
  );
};

export default Leftbar;
