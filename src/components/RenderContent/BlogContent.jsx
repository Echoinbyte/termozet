import { useMemo } from "react";
import { useTerminal } from "../../contexts/TerminalContext";
import ClickableCommand from "../ClickableCommand";

const BlogContent = () => {
  const { executeCommandRef } = useTerminal();
  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        title: "Building a Terminal-Style Portfolio with React",
        slug: "terminal-portfolio",
        date: "2024-12-15",
        category: "React",
        readTime: "8 min read",
        summary:
          "How I created an interactive terminal experience using React, including real-time data fetching and terminal-like styling.",
        tags: ["React", "JavaScript", "Portfolio", "Terminal"],
      },
      {
        id: 2,
        title: "Modern JavaScript: ES6+ Features Every Developer Should Know",
        slug: "modern-javascript",
        date: "2024-12-10",
        category: "JavaScript",
        readTime: "12 min read",
        summary:
          "A comprehensive guide to modern JavaScript features including destructuring, async/await, modules, and more.",
        tags: ["JavaScript", "ES6", "Programming", "Tutorial"],
      },
      {
        id: 3,
        title: "The Art of Clean Code: Writing Maintainable Software",
        slug: "clean-code",
        date: "2024-12-05",
        category: "Best Practices",
        readTime: "10 min read",
        summary:
          "Essential principles and practices for writing code that is readable, maintainable, and scalable.",
        tags: ["Clean Code", "Best Practices", "Software Development"],
      },
      {
        id: 4,
        title: "Mastering CSS Grid: A Complete Guide",
        slug: "css-grid",
        date: "2024-11-28",
        category: "CSS",
        readTime: "15 min read",
        summary:
          "Everything you need to know about CSS Grid to create complex, responsive layouts with ease.",
        tags: ["CSS", "Grid", "Layout", "Responsive Design"],
      },
      {
        id: 5,
        title: "API Design Best Practices for RESTful Services",
        slug: "api-design",
        date: "2024-11-20",
        category: "Backend",
        readTime: "11 min read",
        summary:
          "Learn how to design clean, intuitive, and maintainable REST APIs that developers will love to use.",
        tags: ["API", "REST", "Backend", "Design"],
      },
    ],
    []
  );

  return (
    <div className="text-white font-mono whitespace-pre-wrap">
      <div style={{ marginBottom: "20px" }}>
        <pre>
          {`📝 Developer Blog
═══════════════════════════════════════════════════════════════════

Articles and tutorials from my development journey`}
        </pre>
      </div>

      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #333",
            padding: "20px",
            marginTop: index === 0 ? "0" : "20px",
            marginBottom: "20px",
            backgroundColor: "#0a0a0a",
            fontFamily: "monospace",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <h2
              style={{ color: "#fff", fontSize: "16px", margin: "0 0 8px 0" }}
            >
              {post.title}
            </h2>

            <div
              style={{ fontSize: "12px", color: "#666", marginBottom: "10px" }}
            >
              {post.date} • {post.readTime} • {post.category}
            </div>
          </div>

          <p
            style={{
              color: "#ccc",
              fontSize: "14px",
              lineHeight: "1.5",
              marginBottom: "15px",
            }}
          >
            {post.summary}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "15px",
            }}
          >
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                style={{
                  backgroundColor: "#222",
                  color: "#888",
                  padding: "2px 6px",
                  fontSize: "11px",
                  border: "1px solid #444",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: "10px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#ccc",
                border: "1px solid #444",
                padding: "4px 8px",
                cursor: "pointer",
                fontSize: "12px",
                fontFamily: "monospace",
                outline: "none",
                boxShadow: "none",
                transition: "none",
                borderRadius: "0",
                fontWeight: "normal",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ccc";
                e.target.style.borderColor = "#444";
                e.target.style.boxShadow = "none";
                e.target.style.outline = "none";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ccc";
                e.target.style.borderColor = "#444";
                e.target.style.boxShadow = "none";
                e.target.style.outline = "none";
              }}
              onFocus={(e) => {
                e.target.style.outline = "none";
                e.target.style.boxShadow = "none";
                e.target.style.borderColor = "#444";
              }}
              onClick={() => {
                const command = `blog/${post.slug}`;
                // Execute the command directly instead of setting input
                if (executeCommandRef.current) {
                  executeCommandRef.current(command);
                }
              }}
            >
              Read Article
            </button>
          </div>
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          padding: "10px 0",
          fontSize: "14px",
          color: "#888",
          fontFamily: "monospace",
        }}
      >
        <div style={{ marginBottom: "10px", color: "#66FF66" }}>
          Navigation Commands:
        </div>
        <ClickableCommand command="home">home</ClickableCommand>
        {" | "}
        <ClickableCommand command="about">about</ClickableCommand>
        {" | "}
        <ClickableCommand command="portfolio">portfolio</ClickableCommand>
        {" | "}
        <ClickableCommand command="contact">contact</ClickableCommand>
        {" | "}
        <ClickableCommand command="skills">skills</ClickableCommand>
        {" | "}
        <ClickableCommand command="experience">experience</ClickableCommand>
      </div>
    </div>
  );
};

export default BlogContent;
