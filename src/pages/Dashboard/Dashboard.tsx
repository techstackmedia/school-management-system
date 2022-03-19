import Navbar from "../../components/Navbar/Navbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import LineCurve from "../../components/LineCurve/LineCurve";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="Dashboard">
        <Leftbar />
        <LineCurve />
        <Navbar />
      </div>
    </>
  );
}

export default Dashboard;
