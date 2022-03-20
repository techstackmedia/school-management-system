import Button from "../Button/Button";
import Input from "../Input/Input";

import "./GraphTimeline.css";
const GraphTimeline = () => {
  return (
    <div className="graph">
      <form>
        <p>Best Performing School in Attendance</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Input type="text" htmlFor="" id="date" placeholder="Choose a date" />
          <Button background="#5d78ff" text="Filter" color="#fff" />
          <Button background="#fff" text="Reset" color="#000" />
        </div>
      </form>
    </div>
  );
};
export default GraphTimeline;
