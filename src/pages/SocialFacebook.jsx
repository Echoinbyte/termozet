import { useRef, useEffect, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import SocialFacebook from "../components/RenderContent/SocialFacebook";

const SocialFacebookPage = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addFacebookContent = useCallback(() => {
    addTerminalLine({
      type: "output",
      content: <SocialFacebook />,
      timestamp: new Date(),
      hasSuccess: true,
    });
  }, [addTerminalLine]);

  // Add Facebook content to terminal - only once, in useEffect
  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addFacebookContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addFacebookContent();
    }
  }, [clearCount, addFacebookContent]);

  return <TerminalLayout />;
};

export default SocialFacebookPage;
