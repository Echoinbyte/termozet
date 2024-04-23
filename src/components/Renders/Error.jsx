import "../Styling/Error.css";
import PropTypes from "prop-types";
import Prompt from "./../Prompt";

function Error(props) {
  return (
    <>
      <p className="error-message">
        bash: &ldquo;
        <span className="command-not-found">{props.value}</span>
        &rdquo; : command not found ! Instead type{" "}
        <span className="available-commands">&ldquo;ls&rdquo;</span>
        <span className="available-commands"> or </span>
        <span className="available-commands">&ldquo;.help&rdquo;</span>
      </p>

      <Prompt placeholder={"Type 'ls' or '.help'"} value="" cd="" />
    </>
  );
}

Error.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.any.isRequired,
  cd: PropTypes.any.isRequired,
};

export default Error;
