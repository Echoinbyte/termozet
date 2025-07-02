import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTerminal } from "../../contexts/TerminalContext";
import {
  getBuiltInCommandOutput,
  builtInCommands,
} from "../../utils/builtInCommands";
import PropTypes from "prop-types";

// Import components for inline rendering
import HelpContent from "../RenderContent/HelpContent";
import LsContent from "../RenderContent/LsContent";
import InvalidCommand from "../RenderContent/InvalidCommand";
import Awards from "../Renders/Awards";

// Import page content components for same-route navigation
import AboutContent from "../RenderContent/AboutContent";
import PortfolioContent from "../RenderContent/PortfolioContent";
import ContactContent from "../RenderContent/ContactContent";

import SkillsContent from "../RenderContent/SkillsContent";
import ExperienceContent from "../RenderContent/ExperienceContent";
import BlogContent from "../RenderContent/BlogContent";
import { blogList } from "../RenderContent/BlogPosts";
import SocialHub from "../RenderContent/SocialHub";
import SocialGithub from "../RenderContent/SocialGithub";
import SocialLinkedin from "../RenderContent/SocialLinkedin";
import SocialYouTube from "../RenderContent/SocialYouTube";
import SocialX from "../RenderContent/SocialX";
import SocialFacebook from "../RenderContent/SocialFacebook";
import SocialNpm from "../RenderContent/SocialNpm";
import ClickableCommand from "../ClickableCommand";

const RealTerminal = ({ username = "flame", hostname = "Nitro" }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPath, setCurrentPath] = useState("~");
  const navigate = useNavigate();
  const location = useLocation();
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const hasInitialized = useRef(false); // Track if we've already initialized

  const {
    terminalLines,
    isInitialized,
    currentInput,
    addTerminalLine,
    clearTerminal,
    setTerminalInput,
    commandHistory,
    addToCommandHistory,
    initializeTerminal,
    setFocusInput,
    executeCommandRef,
  } = useTerminal();

  // Register focus function with context
  useEffect(() => {
    const focusFunction = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    setFocusInput(() => focusFunction);
  }, [setFocusInput]);

  // Register executeCommand function with context
  useEffect(() => {
    executeCommandRef.current = executeCommand;
  });

  const generateWelcomeMessage = useCallback(() => {
    return (
      <div className="text-white font-mono whitespace-pre-wrap">
        {`Welcome to Termozet Terminal! 🚀
╔══════════════════════════════════════════════════════════════╗
║                    Enhanced Terminal Portfolio               ║
╚══════════════════════════════════════════════════════════════╝

🖥️  System: Ubuntu 20.04 LTS | User: ${username}@${hostname}
📅 Last login: ${new Date().toLocaleString()}
📧 Contact: echoinbyte@gmail.com

✨ FEATURES:
  • Real-time weather with 'curl wttr.in'
  • Enhanced system info with actual browser/device data
  • Improved social media integration
  • Instant command execution (no typing animation)
  • Real command history and auto-completion

🌐 QUICK START:
  • Type 'help' for comprehensive command reference
  • Type 'ls' to explore available directories and commands
  • Type 'neofetch' for detailed system information
  • Use 'social/<platform>' for direct social links

📱 SOCIAL PROFILES:
  • GitHub: echoinbyte | Facebook: possiblearyal | NPM: sambhavaryal
  • LinkedIn, YouTube, X(Twitter): echoinbyte`}

        <div
          style={{
            textAlign: "center",
            padding: "20px 0",
            fontSize: "14px",
            color: "#888",
            fontFamily: "monospace",
            marginTop: "20px",
            borderTop: "1px solid #333",
            paddingTop: "20px",
          }}
        >
          <div style={{ marginBottom: "10px", color: "#66FF66" }}>
            🚀 QUICK NAVIGATION:
          </div>
          <ClickableCommand command="home">home</ClickableCommand>
          {" | "}
          <ClickableCommand command="about">about</ClickableCommand>
          {" | "}
          <ClickableCommand command="portfolio">portfolio</ClickableCommand>
          {" | "}
          <ClickableCommand command="contact">contact</ClickableCommand>
          {" | "}
          <ClickableCommand command="skills">skills</ClickableCommand>
          {" | "}
          <ClickableCommand command="experience">experience</ClickableCommand>
          {" | "}
          <ClickableCommand command="blog">blog</ClickableCommand>
        </div>

        {`

📍 QUICK COMMANDS:
  Type any of the navigation commands above to explore!
  Use 'help' for comprehensive command reference
  Use 'ls' to see all available directories and commands

Ready to explore! Type a command below or 'help' for assistance:`}
      </div>
    );
  }, [username, hostname]);

  // Update current path when location changes
  useEffect(() => {
    const routeMap = {
      "/": "~",
      "/about": "~/about",
      "/portfolio": "~/portfolio",
      "/contact": "~/contact",
      "/blog": "~/blog",
      "/skills": "~/skills",
      "/experience": "~/experience",
      "/social": "~/social",
      "/social/github": "~/social/github",
      "/social/linkedin": "~/social/linkedin",
      "/social/youtube": "~/social/youtube",
      "/social/x": "~/social/x",
      "/social/facebook": "~/social/facebook",
      "/social/npm": "~/social/npm",
    };

    setCurrentPath(routeMap[location.pathname] || "~");
  }, [location.pathname]);

  // Add welcome message on component mount - only once and only on home route
  useEffect(() => {
    if (
      !isInitialized &&
      !hasInitialized.current &&
      location.pathname === "/"
    ) {
      hasInitialized.current = true;
      initializeTerminal();
      addTerminalLine({
        type: "output",
        content: generateWelcomeMessage(),
        timestamp: new Date(),
      });
    } else if (!isInitialized && !hasInitialized.current) {
      // Initialize terminal without welcome message for non-home routes
      hasInitialized.current = true;
      initializeTerminal();
    }
  }, [
    isInitialized,
    initializeTerminal,
    addTerminalLine,
    username,
    hostname,
    location.pathname,
    generateWelcomeMessage,
  ]);

  // Commands that navigate to different routes
  const navigationCommands = [
    "home",
    "about",
    "portfolio",
    "contact",
    "blog",
    "skills",
    "experience",
    "social",
    "social/github",
    "social/linkedin",
    "social/youtube",
    "social/x",
    "social/facebook",
    "social/npm",
    "blog/terminal-portfolio",
    "blog/modern-javascript",
    "blog/clean-code",
    "blog/css-grid",
    "blog/api-design",
  ];

  // Commands that show inline output (non-navigation)
  const inlineCommands = ["ls", "help", ".help", "awards"];

  // All available commands for autocompletion
  const allCommands = [
    ...navigationCommands,
    ...inlineCommands,
    ...builtInCommands,
  ];

  // Auto-scroll to bottom when new terminal lines are added
  useEffect(() => {
    if (terminalRef.current) {
      const scrollToBottom = () => {
        terminalRef.current.scrollTo({
          top: terminalRef.current.scrollHeight,
          behavior: "smooth",
        });
      };

      // Small delay to ensure content is rendered
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [terminalLines]);

  // Keep input focused - focus after each command and when component mounts
  useEffect(() => {
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus();
    }
  }, [isProcessing]);

  // Focus input when component mounts and when terminal lines change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Focus input after new content is added
  useEffect(() => {
    if (inputRef.current && !isProcessing) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [terminalLines, isProcessing]);

  useEffect(() => {
    // Scroll to bottom when new content is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const getCurrentPath = () => {
    return currentPath;
  };

  const getCommandOutput = async (command) => {
    // Handle special cases that need local context
    if (command === "pwd") {
      const currentPath = getCurrentPath();
      // Convert terminal path to full system path
      if (currentPath === "~") {
        return `/home/${username}`;
      } else {
        return `/home/${username}/${currentPath.replace("~/", "")}`;
      }
    }

    if (command === "history") {
      return commandHistory
        .slice(0, 10)
        .map((cmd, i) => `${i + 1}  ${cmd}`)
        .join("\n");
    }

    // Try to get output from built-in commands module
    const builtInOutput = await getBuiltInCommandOutput(
      command,
      username,
      hostname
    );
    if (builtInOutput !== null) {
      return builtInOutput;
    }

    // Other inline command components (non-navigation)
    if (command === "help" || command === ".help") return <HelpContent />;
    if (command === "ls") return <LsContent />;
    if (command === "awards") return <Awards />;

    return null;
  };

  const handleNavigation = (command) => {
    const routes = {
      home: "/",
      about: "/about",
      portfolio: "/portfolio",
      contact: "/contact",
      blog: "/blog",
      skills: "/skills",
      experience: "/experience",
      social: "/social",
      "social/github": "/social/github",
      "social/linkedin": "/social/linkedin",
      "social/youtube": "/social/youtube",
      "social/x": "/social/x",
      "social/facebook": "/social/facebook",
      "social/npm": "/social/npm",
      "blog/terminal-portfolio": "/blog/terminal-portfolio",
      "blog/modern-javascript": "/blog/modern-javascript",
      "blog/clean-code": "/blog/clean-code",
      "blog/css-grid": "/blog/css-grid",
      "blog/api-design": "/blog/api-design",
    };

    // Content components mapping for same-route navigation
    const contentComponents = {
      about: AboutContent,
      portfolio: PortfolioContent,
      contact: ContactContent,
      skills: SkillsContent,
      experience: ExperienceContent,
      blog: BlogContent,
      social: SocialHub,
      "social/github": SocialGithub,
      "social/linkedin": SocialLinkedin,
      "social/youtube": SocialYouTube,
      "social/x": SocialX,
      "social/facebook": SocialFacebook,
      "social/npm": SocialNpm,
    };

    if (routes[command]) {
      const targetRoute = routes[command];
      const isCurrentRoute = location.pathname === targetRoute;
      const isSocialRoute = command.startsWith("social");

      // Special handling for home command
      if (command === "home") {
        if (isCurrentRoute) {
          // If already on home, show welcome message
          addTerminalLine({
            type: "output",
            content: generateWelcomeMessage(),
            timestamp: new Date(),
            hasSuccess: true,
          });
          return true;
        }
        // If not on home, navigate normally with message
        addTerminalLine({
          type: "output",
          content: `Navigating to home...`,
          timestamp: new Date(),
          hasSuccess: true,
        });
        setTimeout(() => {
          navigate(targetRoute);
        }, 300);
        return true;
      }

      // If we're already on the target route, re-add the content directly
      if (isCurrentRoute && contentComponents[command]) {
        const ContentComponent = contentComponents[command];

        addTerminalLine({
          type: "output",
          content: <ContentComponent />,
          timestamp: new Date(),
          hasSuccess: true,
        });

        return true;
      }

      // For different routes, show navigation message for non-social routes
      if (!isSocialRoute) {
        const content = `Navigating to ${command}...`;
        addTerminalLine({
          type: "output",
          content: content,
          timestamp: new Date(),
          hasSuccess: true,
        });
      }

      // Navigate after a short delay (shorter for social routes)
      setTimeout(
        () => {
          navigate(targetRoute);
        },
        isSocialRoute ? 100 : 300
      );

      return true;
    }
    return false;
  };

  const executeCommand = async (command) => {
    if (!command.trim()) return;

    setIsProcessing(true);

    // Add command to history
    addToCommandHistory(command.trim());

    // Add the command to terminal history
    addTerminalLine({
      type: "input",
      content: command,
      username,
      hostname,
      path: getCurrentPath(),
      timestamp: new Date(),
    });

    // Reset history index
    setHistoryIndex(-1);

    // Simulate fake terminal processing delay (50-500ms)
    const delay = Math.floor(Math.random() * 450) + 50;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Handle clear command
    if (command === "clear") {
      setTimeout(() => {
        clearTerminal();
        setIsProcessing(false);
      }, 200);
      return;
    }

    // Handle blog commands (blog/[slug]) - now route to pages
    if (command.startsWith("blog/")) {
      const blogSlug = command.substring(5); // Remove "blog/" prefix
      const validSlugs = [
        "terminal-portfolio",
        "modern-javascript",
        "clean-code",
        "css-grid",
        "api-design",
      ];

      if (validSlugs.includes(blogSlug)) {
        addTerminalLine({
          type: "output",
          content: `Navigating to ${command}...`,
          timestamp: new Date(),
          hasSuccess: true,
        });

        setTimeout(() => {
          navigate(`/blog/${blogSlug}`);
        }, 300);
      } else {
        // Show available blog posts
        const availablePosts = blogList
          .map((post) => `blog/${post.slug} - ${post.title}`)
          .join("\n");
        addTerminalLine({
          type: "output",
          content: `Blog post "${blogSlug}" not found.\n\nAvailable blog posts:\n${availablePosts}\n\nTip: Use "blog" to see all posts or "blog/[slug]" to read a specific post.`,
          timestamp: new Date(),
          hasSuccess: false,
        });
      }
      setIsProcessing(false);
      return;
    }

    // Handle navigation commands
    if (navigationCommands.includes(command)) {
      const handled = handleNavigation(command);
      if (!handled) {
        addTerminalLine({
          type: "output",
          content: <InvalidCommand command={command} />,
          timestamp: new Date(),
          hasSuccess: false,
        });
      }
      setIsProcessing(false);
      return;
    }

    // Handle inline commands and built-in commands
    // Special handling for figlet with custom text and echo with quotes
    const isFigletCommand = command.startsWith("figlet");
    const isEchoCommand = command.startsWith("echo ");
    const isBuiltInCommand =
      builtInCommands.includes(command) || isFigletCommand || isEchoCommand;

    if (inlineCommands.includes(command) || isBuiltInCommand) {
      const output = await getCommandOutput(command);

      addTerminalLine({
        type: "output",
        content: output || `Command executed: ${command}`,
        timestamp: new Date(),
        hasSuccess: true,
      });
      setIsProcessing(false);
      return;
    }

    // Unknown command
    addTerminalLine({
      type: "output",
      content: <InvalidCommand command={command} />,
      timestamp: new Date(),
      hasSuccess: false,
    });
    setIsProcessing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isProcessing) {
      executeCommand(currentInput);
      setTerminalInput("");
      // Ensure input stays focused after command execution
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (isProcessing) return;

    // Handle Tab for autocompletion
    if (e.key === "Tab") {
      e.preventDefault();

      if (!currentInput.trim()) {
        // Show all commands if no input
        setSuggestions(allCommands);
        setShowSuggestions(true);
        return;
      }

      const matches = allCommands.filter((cmd) =>
        cmd.toLowerCase().startsWith(currentInput.toLowerCase())
      );

      if (matches.length === 1) {
        // Complete the command if only one match
        setTerminalInput(matches[0]);
        setShowSuggestions(false);
        // Keep focus on input
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 10);
      } else if (matches.length > 1) {
        // Show suggestions if multiple matches
        setSuggestions(matches);
        setShowSuggestions(true);
      } else {
        // No matches, hide suggestions
        setSuggestions([]);
        setShowSuggestions(false);
      }
      return;
    }

    // Hide suggestions on any other key
    if (showSuggestions && e.key !== "Tab") {
      setShowSuggestions(false);
      setSuggestions([]);
    }

    // Handle arrow up/down for command history
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setTerminalInput(newIndex >= 0 ? commandHistory[newIndex] : "");
      }
    } else if (e.key === "Escape") {
      // Hide suggestions on Escape
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    if (!isProcessing) {
      setTerminalInput(e.target.value);
      // Hide suggestions when typing
      if (showSuggestions) {
        setShowSuggestions(false);
        setSuggestions([]);
      }
    }
  };

  return (
    <div
      className="w-full h-screen bg-gray-900 text-green-400 font-mono overflow-y-auto p-5 box-border m-0"
      ref={terminalRef}
    >
      <div className="p-0 m-0">
        {/* Render all terminal lines */}
        {terminalLines.map((line, index) => (
          <div
            key={`${line.timestamp.getTime()}-${index}`}
            className="m-0 p-0 break-words leading-none block"
          >
            {line.type === "input" && (
              <div className="inline-flex items-baseline flex-nowrap mt-4 mb-4 p-0 w-auto max-w-full">
                <span className="flex-shrink-0 mr-0">
                  <span className="text-green-400 font-bold">
                    {line.username}
                  </span>
                  <span className="text-white">@</span>
                  <span className="text-green-400 font-bold">
                    {line.hostname}
                  </span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400 font-bold">{line.path}</span>
                  <span className="text-white font-bold">$ </span>
                </span>
                <span className="text-white break-all">{line.content}</span>
              </div>
            )}
            {line.type === "output" && (
              <div className="m-0 p-0 leading-none flex items-start">
                <div className="flex-grow">
                  <TypingOutput content={line.content} />
                </div>
                <div
                  className={`w-2 h-2 rounded-full ml-2 mt-1 flex-shrink-0 ${
                    line.hasSuccess === false ? "bg-red-500" : "bg-blue-500"
                  }`}
                  title={
                    line.hasSuccess === false
                      ? "Command failed"
                      : "Command executed successfully"
                  }
                ></div>
              </div>
            )}
          </div>
        ))}

        {/* Suggestions display */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="mb-4 p-2 bg-gray-800 border border-gray-600 rounded">
            <div className="text-yellow-400 mb-2 text-sm">
              Available commands ({suggestions.length}):
            </div>
            <div className="grid grid-cols-3 gap-2">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="text-green-400 text-sm cursor-pointer hover:bg-gray-700 p-1 rounded"
                  onClick={() => {
                    setTerminalInput(suggestion);
                    setShowSuggestions(false);
                    setSuggestions([]);
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
            <div className="text-gray-400 text-xs mt-2">
              Press Tab to complete • Press Esc to close • Click to select
            </div>
          </div>
        )}

        {/* Current input line */}
        <div className="mt-4 mb-4 p-0 break-words leading-none block w-full">
          <div className="flex items-baseline flex-nowrap mt-4 mb-4 p-0 w-full">
            <span className="flex-shrink-0 mr-0">
              <span className="text-green-400 font-bold">{username}</span>
              <span className="text-white">@</span>
              <span className="text-green-400 font-bold">{hostname}</span>
              <span className="text-white">:</span>
              <span className="text-blue-400 font-bold">
                {getCurrentPath()}
              </span>
              <span className="text-white font-bold">$ </span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-white font-mono text-inherit flex-1 min-w-0 m-0 p-0 caret-green-400"
              disabled={isProcessing}
              autoComplete="off"
              spellCheck="false"
              placeholder={
                isProcessing ? "" : "Type a command (Tab for autocomplete)"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Output component - no animations, instant display
const TypingOutput = ({ content }) => {
  if (typeof content === "string") {
    return (
      <pre className="text-white font-mono whitespace-pre-wrap m-0 p-0 break-words leading-none">
        {content}
      </pre>
    );
  }

  // For React components, show immediately
  return <div className="text-white">{content}</div>;
};

TypingOutput.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

RealTerminal.propTypes = {
  username: PropTypes.string,
  hostname: PropTypes.string,
};

export default RealTerminal;
