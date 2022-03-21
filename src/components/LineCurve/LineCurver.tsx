import "./LineCurve.css";

const LineCurver = (props: any) => {
  return (
    <div className="totalCountChat">
      <div className="totalCount">{props.totalCount}</div>
      <div className="totalCountTitle">Total {props.totalCountTitle}</div>
    </div>
  );
};

export default LineCurver;
