import { useState, useRef, useEffect } from "react";
import "./TerminalPrompt.css";
import PropTypes from "prop-types";
import { useTerminal } from "../../contexts/TerminalContext";

// Import original render components - content only versions
import HelpContent from "../RenderContent/HelpContent";
import LsContent from "../RenderContent/LsContent";
import Repo from "../Renders/Social_repo";
import Error from "../Renders/Error";
import FalseValue from "../Renders/FalseValue";
import Social from "../Renders/Cd-Social";
import Play from "../Renders/Cd-Play";
import Dot from "../Renders/Cd-dot";
import Portfolio from "../Renders/Portfolio";
import Contact from "../Renders/Contact";
import About from "../Renders/About";
import Awards from "../Renders/Awards";
import Youtube from "../Renders/Social_Youtube";
import Easter from "../Renders/Play_easter";

const TerminalPrompt = ({
  onCommand,
  currentPath = "",
  username = "flame",
  hostname = "Nitro",
}) => {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [renderComponent, setRenderComponent] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const inputRef = useRef(null);

  const { commandHistory, addToIoHistory, addToCommandHistory } = useTerminal();

  // Commands that should navigate to their own routes/pages
  const navigationCommands = [
    "about",
    "portfolio",
    "contact",
    "blog",
    "skills",
    "experience",
    "blog/tech",
    "blog/personal",
  ];

  // Commands that should render inline in the terminal
  const inlineCommands = [
    "ls",
    ".help",
    "help",
    "reload",
    "awards",
    "cd social",
    "social/youtube",
    "social/repo",
    "cd play",
    "play/easter",
    "social/..",
    "play/..",
  ];

  // Built-in terminal commands
  const builtInCommands = ["clear", "whoami", "date", "pwd"];

  const allCommands = [
    ...navigationCommands,
    ...inlineCommands,
    ...builtInCommands,
  ];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Focus input when clicking anywhere in terminal
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Auto-scroll to keep prompt in view when render component changes
  useEffect(() => {
    if (renderComponent && inputRef.current) {
      setTimeout(() => {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        inputRef.current.focus();
      }, 150);
    }
  }, [renderComponent]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Show suggestions
    if (value.trim()) {
      const filtered = allCommands.filter((cmd) =>
        cmd.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        handleSubmit();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInput("");
        }
        break;
      case "Tab":
        e.preventDefault();
        if (suggestions.length > 0) {
          setInput(suggestions[0]);
          setSuggestions([]);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const command = input.trim();
    if (command) {
      // Show execution state
      setIsExecuting(true);

      // Add command to history context
      addToCommandHistory(command);
      setHistoryIndex(-1);

      // Add input to I/O history
      addToIoHistory({
        type: "input",
        command,
        username,
        hostname,
        path: currentPath,
        timestamp: new Date(),
      });

      // Handle built-in commands first
      if (command === "clear") {
        window.location.reload();
        return;
      } else if (command === "whoami") {
        addToIoHistory({
          type: "output",
          text: `${username}`,
          timestamp: new Date(),
        });
        setInput("");
        setSuggestions([]);
        setIsExecuting(false);
        return;
      } else if (command === "date") {
        addToIoHistory({
          type: "output",
          text: new Date().toString(),
          timestamp: new Date(),
        });
        setInput("");
        setSuggestions([]);
        setIsExecuting(false);
        return;
      } else if (command === "pwd") {
        addToIoHistory({
          type: "output",
          text: `/home/${username}${currentPath}`,
          timestamp: new Date(),
        });
        setInput("");
        setSuggestions([]);
        setIsExecuting(false);
        return;
      }

      // Handle navigation commands - these redirect to routes
      if (navigationCommands.includes(command)) {
        const handled = onCommand(command);
        if (!handled) {
          addToIoHistory({
            type: "output",
            component: <Error value={command} />,
            timestamp: new Date(),
          });
        } else {
          // Clear render component when navigating to prevent confusion
          setRenderComponent(null);
        }
        setInput("");
        setSuggestions([]);
        setIsExecuting(false);
        return;
      }

      // Handle inline rendering commands
      if (inlineCommands.includes(command)) {
        handleInlineCommand(command);
        setInput("");
        setSuggestions([]);
        setIsExecuting(false);
        // Ensure input stays focused after inline command
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
        return;
      }

      // If command not recognized, show error
      setRenderComponent(<Error value={command} />);
      addToIoHistory({
        type: "output",
        component: <Error value={command} />,
        timestamp: new Date(),
      });
      setIsExecuting(false);
    }

    setInput("");
    setSuggestions([]);
    setIsExecuting(false);
  };

  const handleInlineCommand = (command) => {
    let outputComponent = null;

    if (allCommands.includes(command)) {
      if (command === ".help" || command === "help") {
        outputComponent = <HelpContent />;
      } else if (command === "") {
        window.location.reload();
        return;
      } else if (command === "ls") {
        outputComponent = <LsContent />;
      } else if (command === "portfolio") {
        // This should now navigate, but keeping for backward compatibility
        outputComponent = <Portfolio />;
      } else if (command === "about") {
        // This should now navigate, but keeping for backward compatibility
        outputComponent = <About />;
      } else if (command === "contact") {
        // This should now navigate, but keeping for backward compatibility
        outputComponent = <Contact />;
      } else if (command === "awards") {
        outputComponent = <Awards />;
      } else if (command === "reload") {
        window.location.reload();
        return;
      } else if (command === "cd social") {
        outputComponent = <Social />;
      } else if (command === "social/repo") {
        outputComponent = <Repo />;
      } else if (command === "social/youtube") {
        outputComponent = <Youtube />;
      } else if (command === "cd play") {
        outputComponent = <Play />;
      } else if (command === "play/easter") {
        outputComponent = <Easter />;
      } else if (command === "social/.." || command === "play/..") {
        outputComponent = <Dot />;
      } else {
        outputComponent = <FalseValue value={command} />;
      }
    } else {
      outputComponent = <Error value={command} />;
    }

    // Set component for immediate display
    if (outputComponent) {
      setRenderComponent(outputComponent);
      // Also add to I/O history
      addToIoHistory({
        type: "output",
        component: outputComponent,
        timestamp: new Date(),
      });
    }
  };

  const getInputColor = () => {
    if (!input.trim()) return "#00ff00";
    return allCommands.some((cmd) =>
      cmd.toLowerCase().startsWith(input.toLowerCase())
    )
      ? "#00ff00"
      : "#ff6666";
  };

  return (
    <div className="terminal-prompt-container">
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <span
              key={index}
              className="suggestion"
              onClick={() => {
                setInput(suggestion);
                setSuggestions([]);
                inputRef.current?.focus();
              }}
            >
              {suggestion}
            </span>
          ))}
        </div>
      )}

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
          className={`terminal-input ${isExecuting ? "executing" : ""}`}
          style={{ color: getInputColor() }}
          spellCheck={false}
          autoComplete="off"
          disabled={isExecuting}
          placeholder={isExecuting ? "Executing..." : ""}
        />
      </div>

      {/* Render the inline component */}
      {renderComponent && (
        <div className="render-output">{renderComponent}</div>
      )}
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
