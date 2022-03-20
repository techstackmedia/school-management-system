import { BsFilter } from "react-icons/bs";
import PropTypes from "prop-types";
import buttonSet from "./Button.module.css";
const Button = (props: any) => {
  return (
    <>
      <BsFilter className={buttonSet.buttonsFilter}/>
      <button
        className={buttonSet.button}
        type="button"
        style={{ backgroundColor: props.background, color: props.color }}
      >
        {props.text}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "#000",
  background: "#fff",
  text: "Click",
};

Button.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
