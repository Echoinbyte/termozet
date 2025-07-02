import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import ExperienceContent from "../components/RenderContent/ExperienceContent";

const Experience = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addExperienceContent = useCallback(() => {
    // Add the experience command and content to terminal
    addTerminalLine({
      type: "input",
      content: "experience",
      username: "flame",
      hostname: "Nitro",
      path: "~/experience",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <ExperienceContent />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addExperienceContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addExperienceContent();
    }
  }, [clearCount, addExperienceContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default Experience;
