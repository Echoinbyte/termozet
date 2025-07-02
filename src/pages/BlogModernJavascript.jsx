import { useEffect, useRef, useCallback } from "react";
import TerminalLayout from "../components/Layout/TerminalLayout";
import { useTerminal } from "../contexts/TerminalContext";
import { BlogPost2Content } from "../components/RenderContent/BlogPosts";

const BlogModernJavascript = () => {
  const { addTerminalLine, clearCount } = useTerminal();
  const hasAddedContent = useRef(false);
  const lastClearCount = useRef(0);

  const addBlogContent = useCallback(() => {
    // Add the blog command and content to terminal
    addTerminalLine({
      type: "input",
      content: "blog/modern-javascript",
      username: "flame",
      hostname: "Nitro",
      path: "~/blog/modern-javascript",
      timestamp: new Date(),
    });

    addTerminalLine({
      type: "output",
      content: <BlogPost2Content />,
      timestamp: new Date(),
    });
  }, [addTerminalLine]);

  useEffect(() => {
    // Add content when component mounts for the first time
    if (!hasAddedContent.current) {
      hasAddedContent.current = true;
      lastClearCount.current = clearCount;
      addBlogContent();
    }
    // Add content again if terminal was cleared while on this route
    else if (clearCount > lastClearCount.current) {
      lastClearCount.current = clearCount;
      addBlogContent();
    }
  }, [clearCount, addBlogContent]); // React to clearCount changes

  return <TerminalLayout />;
};

export default BlogModernJavascript;
