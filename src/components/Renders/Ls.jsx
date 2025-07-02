import Prompt from "../Prompt";
import "../Styling/Ls.css";

function Ls() {
  let cmdlist = [
    // Navigation commands
    {
      cmd: "home",
      action: "To navigate",
      middle: "to the",
      domain: "home page",
      tail: "Main landing page",
    },
    {
      cmd: "about",
      action: "To view",
      middle: "information about",
      domain: "me",
      tail: "Sambhav Aryal (Echoinbyte) - 16, Nepal",
    },
    {
      cmd: "portfolio",
      action: "To see",
      middle: "my terminal based",
      domain: "portfolio",
      tail: "LoomingFace, ETC, GameOverse + more",
    },
    {
      cmd: "contact",
      action: "To get in touch",
      middle: "with",
      domain: "me",
      tail: "echoinbyte@gmail.com",
    },
    {
      cmd: "skills",
      action: "To view",
      middle: "my technical",
      domain: "skills",
      tail: "Programming & technologies",
    },
    {
      cmd: "experience",
      action: "To see",
      middle: "my work",
      domain: "experience",
      tail: "Hackathon winner, quiz champion",
    },
    {
      cmd: "blog",
      action: "To read",
      middle: "my",
      domain: "blog posts",
      tail: "Technical articles and tutorials",
    },
    // Blog post commands
    {
      cmd: "blog/terminal-portfolio",
      action: "To read",
      middle: "about building",
      domain: "terminal portfolios",
      tail: "React terminal portfolio guide",
    },
    {
      cmd: "blog/modern-javascript",
      action: "To learn",
      middle: "about",
      domain: "ES6+ features",
      tail: "Modern JavaScript guide",
    },
    {
      cmd: "blog/clean-code",
      action: "To learn",
      middle: "about",
      domain: "clean code",
      tail: "Writing maintainable software",
    },
    {
      cmd: "blog/css-grid",
      action: "To master",
      middle: "",
      domain: "CSS Grid",
      tail: "Complete layout guide",
    },
    {
      cmd: "blog/api-design",
      action: "To learn",
      middle: "about",
      domain: "API design",
      tail: "RESTful services best practices",
    },
    // Social commands
    {
      cmd: "social",
      action: "To see",
      middle: "my",
      domain: "social profiles",
      tail: "Links to all social media",
    },
    {
      cmd: "social/github",
      action: "To visit",
      middle: "my",
      domain: "GitHub profile",
      tail: "Code repositories and development",
    },
    {
      cmd: "social/linkedin",
      action: "To connect",
      middle: "with me on",
      domain: "LinkedIn",
      tail: "Professional networking",
    },
    {
      cmd: "social/youtube",
      action: "To watch",
      middle: "my videos on",
      domain: "YouTube",
      tail: "Technical content and tutorials",
    },
    {
      cmd: "social/x",
      action: "To follow",
      middle: "me on",
      domain: "X (Twitter)",
      tail: "Tech updates and thoughts",
    },
    {
      cmd: "social/facebook",
      action: "To connect",
      middle: "with me on",
      domain: "Facebook",
      tail: "Personal updates and content",
    },
    {
      cmd: "social/npm",
      action: "To see",
      middle: "my packages on",
      domain: "NPM",
      tail: "Published JavaScript packages",
    },
    // Inline commands
    {
      cmd: "ls",
      action: "To list",
      middle: "all available",
      domain: "commands",
      tail: "This directory listing",
    },
    {
      cmd: "help",
      action: "To get",
      middle: "help with the",
      domain: "terminal",
      tail: "Usage guide and tips",
    },
    {
      cmd: ".help",
      action: "To get",
      middle: "help with the",
      domain: "terminal",
      tail: "Same as help command",
    },
    {
      cmd: "awards",
      action: "To see",
      middle: "my",
      domain: "awards",
      tail: "Certificates and achievements",
    },
    // Built-in terminal commands
    {
      cmd: "clear",
      action: "To clear",
      middle: "the",
      domain: "terminal screen",
      tail: "Clean the display",
    },
    {
      cmd: "whoami",
      action: "To display",
      middle: "current",
      domain: "user",
      tail: "Shows logged in user",
    },
    {
      cmd: "date",
      action: "To show",
      middle: "current",
      domain: "date and time",
      tail: "System timestamp",
    },
    {
      cmd: "pwd",
      action: "To show",
      middle: "current",
      domain: "directory path",
      tail: "Present working directory",
    },
    {
      cmd: "uptime",
      action: "To show",
      middle: "system",
      domain: "uptime",
      tail: "How long system has been running",
    },
    {
      cmd: "hostname",
      action: "To display",
      middle: "system",
      domain: "hostname",
      tail: "Computer name",
    },
    {
      cmd: "echo [text]",
      action: "To display",
      middle: "the",
      domain: "text",
      tail: "Print text to terminal",
    },
    {
      cmd: "figlet [text]",
      action: "To create",
      middle: "ASCII art",
      domain: "text",
      tail: "Large stylized text",
    },
    {
      cmd: "neofetch",
      action: "To show",
      middle: "system",
      domain: "information",
      tail: "Detailed system specs",
    },
    {
      cmd: "fortune",
      action: "To display",
      middle: "a random",
      domain: "fortune",
      tail: "Inspirational quotes",
    },
    {
      cmd: "curl wttr.in",
      action: "To get",
      middle: "current",
      domain: "weather",
      tail: "Weather information",
    },
    {
      cmd: "history",
      action: "To show",
      middle: "command",
      domain: "history",
      tail: "Previously used commands",
    },
  ];

  const plcholder = Math.floor(Math.random() * 5);

  return (
    <div className="terminal-content">
      <pre>
        {`📂 Directory Listing - Termozet Terminal v3.0
═══════════════════════════════════════════════════════════════════

Available commands and their descriptions:`}
      </pre>

      <ul className="list-container">
        {cmdlist.map((list, index) => (
          <li key={index} className="list-item">
            <span className="cmd">{list.cmd}</span> :{" "}
            <span className="action">{list.action}</span> {list.middle}{" "}
            <span className="domain">{list.domain}</span>!{" "}
            <span className="tail">{list.tail}</span>
          </li>
        ))}
      </ul>

      <Prompt
        placeholder={
          plcholder === 0
            ? "Type 'about'"
            : plcholder === 1
            ? "Type 'blog'"
            : plcholder === 2
            ? "Type 'contact'"
            : plcholder === 3
            ? "Type 'portfolio'"
            : "Type 'social'"
        }
        value=""
        cd=""
      />
    </div>
  );
}

export default Ls;
