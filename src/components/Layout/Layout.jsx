import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import TerminalPrompt from "../TerminalPrompt/TerminalPrompt";
import TerminalHistory from "../TerminalHistory/TerminalHistory";
import { useTerminal } from "../../contexts/TerminalContext";
import "./Layout.css";
import PropTypes from "prop-types";

const Layout = ({
  children,
  showPrompt = true,
  terminalTitle = "Termozet",
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ioHistory } = useTerminal();
  const terminalContentRef = useRef(null);

  // Auto-scroll to keep prompt in view after navigation
  useEffect(() => {
    if (terminalContentRef.current && showPrompt) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const promptElement = terminalContentRef.current.querySelector(
          ".terminal-prompt-sticky"
        );
        if (promptElement) {
          promptElement.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
          // Focus the input after scrolling
          const inputElement = promptElement.querySelector("input");
          if (inputElement) {
            inputElement.focus();
          }
        }
      }, 150);
    }
  }, [location.pathname, showPrompt, ioHistory.length]);

  const handleCommand = (command) => {
    // Route mapping based on terminal commands
    const routes = {
      home: "/",
      about: "/about",
      portfolio: "/portfolio",
      projects: "/projects",
      contact: "/contact",
      blog: "/blog",
      "blog/tech": "/blog/tech",
      "blog/personal": "/blog/personal",
      skills: "/skills",
      experience: "/experience",
    };

    // Handle special commands
    if (command === "home") {
      handleBackNavigation();
      return true;
    }

    if (command === "clear") {
      window.location.reload();
      return true;
    }

    // Handle route navigation
    if (routes[command]) {
      navigate(routes[command]);
      return true;
    }

    return false;
  };

  const handleBackNavigation = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      pathSegments.pop();
      const newPath =
        pathSegments.length > 0 ? `/${pathSegments.join("/")}` : "/";
      navigate(newPath);
    }
  };

  const getCurrentDirectory = () => {
    const path = location.pathname;
    if (path === "/") return "";
    return path.replace("/", "/");
  };

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
          <div className="terminal-title">{terminalTitle}</div>
        </div>

        <div className="terminal-content" ref={terminalContentRef}>
          {/* Display terminal I/O history */}
          <TerminalHistory ioHistory={ioHistory} />

          {children}

          {showPrompt && (
            <div className="terminal-prompt-sticky">
              <TerminalPrompt
                onCommand={handleCommand}
                currentPath={getCurrentDirectory()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showPrompt: PropTypes.bool,
  terminalTitle: PropTypes.string,
};

export default Layout;
