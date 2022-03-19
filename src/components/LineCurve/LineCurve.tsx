// import LineChatType from "../../interfaces/LineChatType";
import linecurve from "../../data/linecurve";
import "./LineCurve.css";

const lineCurveChatArr = linecurve.data.chatDetails;
const LineChatCurves = lineCurveChatArr.map((item: any, index) => {
  return (
    <div className="totalCountChat">
      <div className="totalCount">{item.totalCount}</div>
      <div className="totalCountTitle">{item.totalCountTitle}</div>
    </div>
  );
});

const LineCurve = () => {
  return <div className="chat">{LineChatCurves}</div>;
};

export default LineCurve;
