import { useRef, useEffect, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import SocialX from "../components/RenderContent/SocialX";

const SocialXPage = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addXContent = useCallback(() => {
    addTerminalLine({
      type: "output",
      content: <SocialX />,
      timestamp: new Date(),
      hasSuccess: true,
    });
  }, [addTerminalLine]);

  // Add X (Twitter) content to terminal - only once, in useEffect
  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addXContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addXContent();
    }
  }, [clearCount, addXContent]);

  return <TerminalLayout />;
};

export default SocialXPage;
