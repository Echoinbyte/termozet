import { useState, useRef, useEffect } from "react";
import "./TerminalPrompt.css";
import PropTypes from "prop-types";

const TerminalPrompt = ({
  onCommand,
  currentPath = "",
  username = "flame",
  hostname = "Nitro",
}) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Command entered:", input);
      setInput("");
    }
  };

  return (
    <div className="terminal-prompt-container">
      <div className="prompt-line">
        <span className="prompt-info">
          <span className="username">{username}</span>
          <span className="at">@</span>
          <span className="hostname">{hostname}</span>
          <span className="path">:{currentPath || "~"}</span>
          <span className="dollar">$ </span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          style={{ color: "#00ff00" }}
          spellCheck={false}
          autoComplete="off"
          placeholder="Type commands here..."
        />
      </div>
    </div>
  );
};

TerminalPrompt.propTypes = {
  onCommand: PropTypes.func.isRequired,
  currentPath: PropTypes.string,
  username: PropTypes.string,
  hostname: PropTypes.string,
};

export default TerminalPrompt;
