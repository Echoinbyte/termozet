import PropTypes from "prop-types";
import "./TerminalHistory.css";

const TerminalHistory = ({ ioHistory }) => {
  return (
    <div className="terminal-history">
      {ioHistory.map((entry) => (
        <div key={entry.id} className="history-entry">
          {entry.type === "input" && (
            <div className="input-entry">
              <span className="prompt-info">
                <span className="username">{entry.username || "flame"}</span>
                <span className="at">@</span>
                <span className="hostname">{entry.hostname || "Nitro"}</span>
                <span className="path">:{entry.path || "~"}</span>
                <span className="dollar">$ </span>
              </span>
              <span className="command">{entry.command}</span>
            </div>
          )}
          {entry.type === "output" && (
            <div className="output-entry">
              {entry.component ? (
                entry.component
              ) : (
                <pre className="output-text">{entry.text}</pre>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

TerminalHistory.propTypes = {
  ioHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.oneOf(["input", "output"]).isRequired,
      command: PropTypes.string,
      text: PropTypes.string,
      component: PropTypes.node,
      username: PropTypes.string,
      hostname: PropTypes.string,
      path: PropTypes.string,
      timestamp: PropTypes.instanceOf(Date),
    })
  ).isRequired,
};

export default TerminalHistory;
