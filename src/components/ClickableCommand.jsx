import { useTerminal } from "../contexts/TerminalContext";
import PropTypes from "prop-types";

const ClickableCommand = ({ command, children, className = "" }) => {
  const { executeCommandRef } = useTerminal();

  const handleClick = (e) => {
    e.preventDefault();
    if (executeCommandRef.current) {
      executeCommandRef.current(command);
    }
  };

  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer text-green-400 hover:text-green-300 hover:underline ${className}`}
      style={{
        color: "#66FF66",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = "underline";
        e.target.style.color = "#88FF88";
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = "none";
        e.target.style.color = "#66FF66";
      }}
    >
      {children || command}
    </span>
  );
};

ClickableCommand.propTypes = {
  command: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ClickableCommand;
