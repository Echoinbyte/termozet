import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import AboutContent from "../components/RenderContent/AboutContent";

const About = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addAboutContent = useCallback(() => {
    // Add the about command and content to terminal
    addTerminalLine({
      type: "input",
      content: "about",
      username: "flame",
      hostname: "Nitro",
      path: "~/about",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <AboutContent />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addAboutContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addAboutContent();
    }
  }, [clearCount, addAboutContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default About;
