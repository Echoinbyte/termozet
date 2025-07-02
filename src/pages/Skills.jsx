import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import SkillsContent from "../components/RenderContent/SkillsContent";

const Skills = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addSkillsContent = useCallback(() => {
    // Add the skills command and content to terminal
    addTerminalLine({
      type: "input",
      content: "skills",
      username: "flame",
      hostname: "Nitro",
      path: "~/skills",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <SkillsContent />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addSkillsContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addSkillsContent();
    }
  }, [clearCount, addSkillsContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default Skills;
