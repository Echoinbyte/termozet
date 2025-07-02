import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import PortfolioContent from "../components/RenderContent/PortfolioContent";

const Portfolio = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addPortfolioContent = useCallback(() => {
    // Add the portfolio command and content to terminal
    addTerminalLine({
      type: "input",
      content: "portfolio",
      username: "flame",
      hostname: "Nitro",
      path: "~/portfolio",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <PortfolioContent />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addPortfolioContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addPortfolioContent();
    }
  }, [clearCount, addPortfolioContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default Portfolio;
