import Navbar from "../../components/Navbar/Navbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Footer from "../../components/Footer/Footer";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="Dashboard">
        <Leftbar />
        <Navbar />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Dashboard;
