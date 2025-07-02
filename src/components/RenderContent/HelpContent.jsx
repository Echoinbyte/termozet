import "../Styling/Help.css";

function HelpContent() {
  return (
    <div className="help-container">
      <div className="flex flex-col" style={{ marginBottom: "1em" }}>
        Termozet Terminal - Command Reference & Usage Guide
        <span>
          ═══════════════════════════════════════════════════════════════════
        </span>
      </div>

      <dl className="help-list">
        <dt className="help-list-item">
          <span className="help-command">💡 General Usage</span>
        </dt>
        <dd className="help-list-item">
          • Use ↑/↓ arrow keys to navigate command history
          <br />
          • Type part of a command and press Tab for auto-completion
          <br />
          • Commands are case-sensitive
          <br />
          • Type &lsquo;ls&rsquo; to see available commands and directories
          <br />• Real data is fetched where possible (weather, GitHub, system
          info)
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🌐 Navigation Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>home</span> - Home directory
          <br />
          <span style={{ color: "#66FF66" }}>about</span> - Sambhav Aryal
          (Echoinbyte) - 16, Nepal
          <br />
          <span style={{ color: "#66FF66" }}>portfolio</span> - LoomingFace,
          ETC, GameOverse + more
          <br />
          <span style={{ color: "#66FF66" }}>contact</span> -
          echoinbyte@gmail.com
          <br />
          <span style={{ color: "#66FF66" }}>blog</span> - Technical articles
          <br />
          <span style={{ color: "#66FF66" }}>skills</span> - Programming &
          technologies
          <br />
          <span style={{ color: "#66FF66" }}>experience</span> - Hackathon
          winner, quiz champion winner, quiz champion
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🔗 Social Media Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>social</span> - Social media
          dashboard with live data
          <br />
          <span style={{ color: "#66FF66" }}>social/github</span> - GitHub
          profile with real-time stats
          <br />
          <span style={{ color: "#66FF66" }}>social/linkedin</span> - LinkedIn
          profile page
          <br />
          <span style={{ color: "#66FF66" }}>social/youtube</span> - YouTube
          channel
          <br />
          <span style={{ color: "#66FF66" }}>social/x</span> - X (Twitter)
          profile
          <br />
          <span style={{ color: "#66FF66" }}>social/facebook</span> - Facebook
          profile
          <br />
          <span style={{ color: "#66FF66" }}>social/npm</span> - NPM packages
        </dd>

        <dt className="help-list-item">
          <span className="help-command">�️ System Information</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>neofetch</span> - System info with
          ASCII art
          <br />
          <span style={{ color: "#66FF66" }}>whoami</span> - Display current
          user
          <br />
          <span style={{ color: "#66FF66" }}>hostname</span> - Show system
          hostname
          <br />
          <span style={{ color: "#66FF66" }}>uname -a</span> - Detailed system
          information
          <br />
          <span style={{ color: "#66FF66" }}>uptime</span> - System uptime and
          load
          <br />
          <span style={{ color: "#66FF66" }}>lscpu</span> - CPU information
          <br />
          <span style={{ color: "#66FF66" }}>free -h</span> - Memory usage
          <br />
          <span style={{ color: "#66FF66" }}>df -h</span> - Disk usage
        </dd>

        <dt className="help-list-item">
          <span className="help-command">� File System</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>ls</span> - List commands and
          directories
          <br />
          <span style={{ color: "#66FF66" }}>pwd</span> - Show current directory
          <br />
          <span style={{ color: "#66FF66" }}>tree</span> - Display directory
          tree
          <br />
          <span style={{ color: "#66FF66" }}>cat /etc/os-release</span> - OS
          information
          <br />
          <span style={{ color: "#66FF66" }}>env</span> - Environment variables
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🌤️ Real-time Utilities</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>curl wttr.in</span> - Real-time
          weather report
          <br />
          <span style={{ color: "#66FF66" }}>cal</span> - Calendar with terminal
          styling
          <br />
          <span style={{ color: "#66FF66" }}>date</span> - Current date and time
          <br />
          <span style={{ color: "#66FF66" }}>fortune</span> - Random programming
          quotes
          <br />
          <span style={{ color: "#66FF66" }}>figlet [text]</span> - ASCII art
          generator (e.g., figlet Hello World)
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🔧 Process & System</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>ps</span> - Show running processes
          <br />
          <span style={{ color: "#66FF66" }}>history</span> - Command history
          <br />
          <span style={{ color: "#66FF66" }}>finger</span> - User information
          <br />
          <span style={{ color: "#66FF66" }}>w / who</span> - Who is logged in
          <br />
          <span style={{ color: "#66FF66" }}>id</span> - User and group IDs
          <br />
          <span style={{ color: "#66FF66" }}>clear</span> - Clear terminal
          screen
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🎯 Special Features</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>awards</span> - View achievements
          and awards
          <br />
          <span style={{ color: "#66FF66" }}>echo &quot;text&quot;</span> -
          Display custom text (supports quotes)
          <br />
          <span style={{ color: "#66FF66" }}>echo $USER</span> - Show username
          <br />
          <span style={{ color: "#66FF66" }}>echo $HOME</span> - Show home
          directory
          <br />
          <span style={{ color: "#66FF66" }}>which bash</span> - Find bash
          location
        </dd>

        <dt className="help-list-item">
          <span className="help-command">� Contact Information</span>
        </dt>
        <dd className="help-list-item">
          <strong>Email:</strong> echoinbyte@gmail.com
          <br />
          <strong>GitHub:</strong> echoinbyte
          <br />
          <strong>Facebook:</strong> possiblearyal
          <br />
          <strong>NPM:</strong> sambhavaryal
        </dd>
      </dl>
    </div>
  );
}

export default HelpContent;
