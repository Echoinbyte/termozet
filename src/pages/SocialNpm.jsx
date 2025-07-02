import { useRef, useEffect, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import SocialNpm from "../components/RenderContent/SocialNpm";

const SocialNpmPage = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addNpmContent = useCallback(() => {
    addTerminalLine({
      type: "output",
      content: <SocialNpm />,
      timestamp: new Date(),
      hasSuccess: true,
    });
  }, [addTerminalLine]);

  // Add NPM content to terminal - only once, in useEffect
  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addNpmContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addNpmContent();
    }
  }, [clearCount, addNpmContent]);

  return <TerminalLayout />;
};

export default SocialNpmPage;
