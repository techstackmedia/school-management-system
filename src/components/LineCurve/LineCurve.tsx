import LineCurver from "./LineCurver";
import GraphTimeline from "../GraphTimeline/GraphTimeline";

const LineCurve = () => {
  return (
    <div className="chat">
      <LineCurver totalCount={1} totalCountTitle="Schools" />
      <LineCurver totalCount={15} totalCountTitle="Teachers" />
      <LineCurver totalCount={0} totalCountTitle="Students" />
      <LineCurver totalCount={19} totalCountTitle="Users" />
      <GraphTimeline />
    </div>
  );
};

export default LineCurve;
