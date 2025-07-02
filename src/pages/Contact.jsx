import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import ContactContent from "../components/RenderContent/ContactContent";

const Contact = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addContactContent = useCallback(() => {
    // Add the contact command and content to terminal
    addTerminalLine({
      type: "input",
      content: "contact",
      username: "flame",
      hostname: "Nitro",
      path: "~/contact",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <ContactContent />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addContactContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addContactContent();
    }
  }, [clearCount, addContactContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default Contact;
