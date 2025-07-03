import "../Styling/Ls.css";

function LsContent() {
  const directories = [
    {
      name: "about/",
      type: "dir",
      description: "Personal information and bio",
    },
    {
      name: "portfolio/",
      type: "dir",
      description: "Project showcase and work",
    },
    { name: "contact/", type: "dir", description: "Contact information" },
    { name: "blog/", type: "dir", description: "Blog posts and articles" },
    {
      name: "skills/",
      type: "dir",
      description: "Technical skills and expertise",
    },
    { name: "experience/", type: "dir", description: "Work experience" },
    { name: "social/", type: "dir", description: "Social media profiles" },
  ];

  const routingCmds = [
    { cmd: "home", description: "Home directory (main terminal)" },
    { cmd: "about", description: "Sambhav Aryal (Echoinbyte) - 16, Nepal" },
    { cmd: "portfolio", description: "LoomingFace, ETC, GameOverse + more" },
    { cmd: "contact", description: "echoinbyte@gmail.com" },
    { cmd: "skills", description: "Programming & technologies" },
    { cmd: "experience", description: "Hackathon winner, quiz champion" },
  ];

  const blogCmds = [
    { cmd: "blog", description: "Main blog page with all articles" },
    {
      cmd: "blog/terminal-portfolio",
      description: "Building this terminal portfolio",
    },
    {
      cmd: "blog/modern-javascript",
      description: "Modern JavaScript features",
    },
    { cmd: "blog/clean-code", description: "Clean code principles" },
    { cmd: "blog/css-grid", description: "CSS Grid layout guide" },
    { cmd: "blog/api-design", description: "REST API design patterns" },
  ];

  const socialCmds = [
    { cmd: "social", description: "Social media dashboard with live data" },
    {
      cmd: "social/github",
      description: "GitHub profile with real-time stats",
    },
    { cmd: "social/linkedin", description: "LinkedIn professional profile" },
    { cmd: "social/youtube", description: "YouTube channel" },
    { cmd: "social/x", description: "X (Twitter) profile" },
    { cmd: "social/facebook", description: "Facebook profile" },
    { cmd: "social/npm", description: "NPM packages" },
  ];

  const systemCmds = [
    { cmd: "help", description: "Show comprehensive command reference" },
    { cmd: "clear", description: "Clear terminal screen" },
    { cmd: "ls", description: "List directory contents" },
    { cmd: "pwd", description: "Print working directory" },
    { cmd: "whoami", description: "Display current user" },
    { cmd: "hostname", description: "Show system hostname" },
    { cmd: "id", description: "User and group IDs" },
    { cmd: "ps", description: "Show running processes" },
    { cmd: "history", description: "Show command history" },
    { cmd: "uname -a", description: "Detailed system information" },
    { cmd: "cat /etc/os-release", description: "OS information" },
    { cmd: "env", description: "Environment variables" },
    { cmd: "which bash", description: "Find bash location" },
  ];

  const utilityCmds = [
    { cmd: "neofetch", description: "System info with ASCII art" },
    { cmd: "figlet [text]", description: "ASCII art banner generator" },
    { cmd: "curl wttr.in", description: "Real-time weather report" },
    { cmd: "fortune", description: "Random programming quotes" },
    { cmd: "cal", description: "Terminal-styled calendar" },
    { cmd: "date", description: "Current date and time with world clock" },
    { cmd: "uptime", description: "System uptime and load averages" },
    { cmd: "tree", description: "Directory tree structure" },
    {
      cmd: "echo [text]",
      description: "Display text (supports quotes & variables)",
    },
    { cmd: "finger", description: "User information" },
    { cmd: "w / who", description: "Who is logged in" },
  ];

  const specialCmds = [
    { cmd: "lscpu", description: "CPU information and specifications" },
    { cmd: "free -h", description: "Memory usage statistics" },
    { cmd: "df -h", description: "Disk usage and filesystem info" },
    { cmd: "lsusb", description: "USB device information" },
    { cmd: "lspci", description: "PCI device information" },
  ];

  return (
    <div className="ls">
      <div className="flex flex-col" style={{ marginBottom: "1em" }}>
        Directory Listing - Termozet Terminal
        <span>
          ═══════════════════════════════════════════════════════════════════
        </span>
      </div>

      {/* Directories */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          📁 Directories:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.3em",
          }}
        >
          {directories.map((dir, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#00BFFF", minWidth: "120px" }}>
                {dir.name}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {dir.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Routing Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          🌐 Page Navigation Commands:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.3em",
          }}
        >
          {routingCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "120px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          📝 Blog Commands:
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.3em" }}
        >
          {blogCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "220px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          🔗 Social Commands (Real-time Data):
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.3em" }}
        >
          {socialCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "180px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* System Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          🔧 System Commands:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.3em",
          }}
        >
          {systemCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "140px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Utility Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          ⚡ Utility Commands:
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.3em" }}
        >
          {utilityCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "170px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Special Commands */}
      <div style={{ marginBottom: "1em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          🎯 Special & Hardware Commands:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.3em",
          }}
        >
          {specialCmds.map((cmd, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "#66FF66", minWidth: "120px" }}>
                {cmd.cmd}
              </span>
              <span style={{ color: "#CCCCCC", fontSize: "0.9em" }}>
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ color: "#888888", fontSize: "0.9em", marginTop: "1em" }}>
        💡 Tips: Use Tab for autocompletion, ↑/↓ for command history, type
        &lsquo;help&rsquo; for detailed help
      </div>
    </div>
  );
}

export default LsContent;
