import { createContext, useContext, useState, useRef } from "react";
import PropTypes from "prop-types";

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {
  const [ioHistory, setIoHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [terminalLines, setTerminalLines] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [clearCount, setClearCount] = useState(0);
  const [currentInput, setCurrentInput] = useState("");

  const addToIoHistory = (entry) => {
    setIoHistory((prev) => [
      ...prev,
      { ...entry, id: Date.now() + Math.random() },
    ]);
  };

  const addToCommandHistory = (command) => {
    setCommandHistory((prev) => [command, ...prev].slice(0, 50)); // Keep last 50 commands
  };

  const addTerminalLine = (line) => {
    setTerminalLines((prev) => [
      ...prev,
      {
        ...line,
        id: Date.now() + Math.random(),
      },
    ]);
  };

  const clearTerminal = () => {
    setTerminalLines([]);
    setClearCount((prev) => prev + 1);
    // Don't reset isInitialized to prevent welcome message from showing again
  };

  const initializeTerminal = () => {
    setIsInitialized(true);
  };

  const clearHistory = () => {
    setIoHistory([]);
    setCommandHistory([]);
    setTerminalLines([]);
  };

  const setTerminalInput = (input) => {
    setCurrentInput(input);
  };

  // Function to focus the terminal input - will be set by RealTerminal
  const [focusInput, setFocusInput] = useState(() => () => {});

  // Function to execute commands directly - will be set by RealTerminal
  const executeCommandRef = useRef(() => {});

  const value = {
    ioHistory,
    commandHistory,
    terminalLines,
    isInitialized,
    clearCount,
    currentInput,
    addToIoHistory,
    addToCommandHistory,
    addTerminalLine,
    clearTerminal,
    clearHistory,
    initializeTerminal,
    setTerminalInput,
    focusInput,
    setFocusInput,
    executeCommandRef,
  };

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};

TerminalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
};
