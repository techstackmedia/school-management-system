// import LineChatType from "../../interfaces/LineChatType";
import linecurve from "../../mocks/linecurve";
import "./LineCurve.css";

const lineCurveChatArr = linecurve.data.chatDetails;
const LineChatCurves = lineCurveChatArr.map((count: any, index) => {
  return (
    <>
      <div className="totalCountChat" key={index}>
        <div className="totalCount" key={count.totalCount}>
          {count.totalCount}
        </div>
        <div className="totalCountTitle" key={count.totalCountTitle}>
          {count.totalCountTitle}
        </div>
      </div>
    </>
  );
});

const LineCurver = () => {
  return <div className="chat">{LineChatCurves}</div>;
};

export default LineCurver;
