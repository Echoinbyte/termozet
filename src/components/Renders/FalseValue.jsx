import "../Styling/FalseValue.css";
import PropTypes from "prop-types";
import Prompt from "./../Prompt";

function FalseValue(props) {
  return (
    <>
      <p className="false-value-message">
        <span className="error-text">Sorry</span> for inconvenience! The &ldquo;
        <span className="command">{props.value}</span>
        &rdquo; Command is in{" "}
        <span className="development-phase">development</span> phase. Instead
        type <span className="available-commands">&ldquo;ls&rdquo;</span>
        <span className="available-commands"> or </span>
        <span className="available-commands">&ldquo;.help&rdquo;</span>
      </p>

      <Prompt placeholder={"Type 'ls' or '.help'"} value="" cd="" />
    </>
  );
}

FalseValue.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.any.isRequired,
  cd: PropTypes.any.isRequired,
};

export default FalseValue;
