import { useRef, useEffect, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import SocialHub from "../components/RenderContent/SocialHub";

const Social = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addSocialContent = useCallback(() => {
    addTerminalLine({
      type: "output",
      content: <SocialHub />,
      timestamp: new Date(),
      hasSuccess: true,
    });
  }, [addTerminalLine]);

  // Add social content to terminal - only once, in useEffect
  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addSocialContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addSocialContent();
    }
  }, [clearCount, addSocialContent]);

  return <TerminalLayout />;
};

export default Social;
