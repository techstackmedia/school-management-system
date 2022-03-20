import { BsCalendarDate } from "react-icons/bs";
import inputSet from "./Input.module.css";
const Input = (props: any) => {
  return (
    <>
      <label className={inputSet.label} htmlFor="date">
        {" "}
        {props.htmlFor}
        <BsCalendarDate className={inputSet.calendaSvg} />
        <input
          className={inputSet.input}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
        />
      </label>
    </>
  );
};

export default Input;
