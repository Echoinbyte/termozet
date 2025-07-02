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
  ];

  const navigationCmds = [
    { cmd: "home", description: "Home directory" },
    { cmd: "about", description: "Sambhav Aryal (Echoinbyte) - 16, Nepal" },
    { cmd: "portfolio", description: "LoomingFace, ETC, GameOverse + more" },
    { cmd: "contact", description: "echoinbyte@gmail.com" },
    { cmd: "blog", description: "Technical articles" },
    { cmd: "skills", description: "Programming & technologies" },
    { cmd: "experience", description: "Hackathon winner, quiz champion" },
  ];

  const systemCmds = [
    { cmd: "help", description: "Show comprehensive command reference" },
    { cmd: "clear", description: "Clear terminal screen" },
    { cmd: "ls", description: "List directory contents" },
    { cmd: "pwd", description: "Print working directory" },
    { cmd: "whoami", description: "Display current user" },
    { cmd: "neofetch", description: "System info with ASCII art" },
    { cmd: "figlet", description: "ASCII art banner" },
    { cmd: "history", description: "Show command history" },
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

  const utilityCmds = [
    { cmd: "curl wttr.in", description: "Real-time weather report" },
    { cmd: "fortune", description: "Random programming quotes" },
    { cmd: "cal", description: "Terminal-styled calendar" },
    { cmd: "date", description: "Current date and time" },
    { cmd: "uptime", description: "System uptime and load" },
    { cmd: "tree", description: "Directory tree structure" },
  ];

  return (
    <div className="ls">
      <div className="flex flex-col" style={{ marginBottom: "1em" }}>
        Directory Listing - Termozet Terminal v3.0
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

      {/* Navigation Commands */}
      <div style={{ marginBottom: "1.5em" }}>
        <div style={{ color: "#FFA500", marginBottom: "0.5em" }}>
          🌐 Navigation Commands:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.3em",
          }}
        >
          {navigationCmds.map((cmd, index) => (
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
              <span style={{ color: "#66FF66", minWidth: "150px" }}>
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
          � Special:
        </div>
        <div>
          <span style={{ color: "#66FF66" }}>awards</span> - View achievements
          and awards
          <br />
          <span style={{ color: "#66FF66" }}>lscpu</span> - CPU information
          <br />
          <span style={{ color: "#66FF66" }}>free -h</span> - Memory usage
          <br />
          <span style={{ color: "#66FF66" }}>env</span> - Environment variables
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
