import PropTypes from "prop-types";

const InvalidCommand = ({ command }) => {
  return (
    <div className="text-red-400 font-mono">
      <div className="mb-2">
        bash: &ldquo;<span className="text-white font-bold">{command}</span>
        &rdquo;: command not found
      </div>
      <div className="text-gray-400 text-sm">
        💡 <span className="text-yellow-400">Quick tips:</span>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>
            Type <span className="text-green-400 font-bold">help</span> to see
            all available commands
          </li>
          <li>
            Type <span className="text-green-400 font-bold">ls</span> to see
            what&rsquo;s in the current directory
          </li>
          <li>
            Use <span className="text-blue-400 font-bold">Tab</span> for
            autocompletion
          </li>
          <li>
            Use <span className="text-blue-400 font-bold">↑/↓</span> arrow keys
            for command history
          </li>
        </ul>
      </div>
      <div className="text-gray-500 text-xs mt-2">
        Did you mean one of these? Try: about, portfolio, contact, ls, help
      </div>
    </div>
  );
};

InvalidCommand.propTypes = {
  command: PropTypes.string.isRequired,
};

export default InvalidCommand;
