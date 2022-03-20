// import Button from "../Button/Button";
// import Input from "../Input/Input";
import GraphTimeline from "../GraphTimeline/GraphTimeline";
import "./LineCurve.css";

const LineCurver = () => {
  return (
    <div className="chat">
      <div className="totalCountChat">
        <div className="totalCount">1</div>
        <div className="totalCountTitle">Total Schools</div>
      </div>

      <div className="totalCountChat">
        <div className="totalCount">15</div>
        <div className="totalCountTitle">Total Teachers</div>
      </div>

      <div className="totalCountChat">
        <div className="totalCount">0</div>
        <div className="totalCountTitle">Total Students</div>
      </div>

      <div className="totalCountChat">
        <div className="totalCount">19</div>
        <div className="totalCountTitle">Total Users</div>
      </div>

      <GraphTimeline />
    </div>
  );
};

export default LineCurver;
