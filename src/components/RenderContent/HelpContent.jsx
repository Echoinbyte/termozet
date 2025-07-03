import "../Styling/Help.css";
import ClickableLink from "../ClickableLink";

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
          <span className="help-command">🌐 Page Navigation Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>home</span> - Home directory (main
          terminal)
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
          <span style={{ color: "#66FF66" }}>skills</span> - Programming &
          technologies
          <br />
          <span style={{ color: "#66FF66" }}>experience</span> - Hackathon
          winner, quiz champion
        </dd>

        <dt className="help-list-item">
          <span className="help-command">📝 Blog Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>blog</span> - Main blog page with
          all articles
          <br />
          <span style={{ color: "#66FF66" }}>blog/terminal-portfolio</span> -
          Building this terminal portfolio
          <br />
          <span style={{ color: "#66FF66" }}>blog/modern-javascript</span> -
          Modern JavaScript features
          <br />
          <span style={{ color: "#66FF66" }}>blog/clean-code</span> - Clean code
          principles
          <br />
          <span style={{ color: "#66FF66" }}>blog/css-grid</span> - CSS Grid
          layout guide
          <br />
          <span style={{ color: "#66FF66" }}>blog/api-design</span> - REST API
          design patterns
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
          <span className="help-command">🔧 System Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>help</span> - Show comprehensive
          command reference
          <br />
          <span style={{ color: "#66FF66" }}>clear</span> - Clear terminal
          screen
          <br />
          <span style={{ color: "#66FF66" }}>ls</span> - List directory contents
          <br />
          <span style={{ color: "#66FF66" }}>pwd</span> - Print working
          directory
          <br />
          <span style={{ color: "#66FF66" }}>whoami</span> - Display current
          user
          <br />
          <span style={{ color: "#66FF66" }}>hostname</span> - Show system
          hostname
          <br />
          <span style={{ color: "#66FF66" }}>id</span> - User and group IDs
          <br />
          <span style={{ color: "#66FF66" }}>ps</span> - Show running processes
          <br />
          <span style={{ color: "#66FF66" }}>history</span> - Show command
          history
          <br />
          <span style={{ color: "#66FF66" }}>uname -a</span> - Detailed system
          information
          <br />
          <span style={{ color: "#66FF66" }}>cat /etc/os-release</span> - OS
          information
          <br />
          <span style={{ color: "#66FF66" }}>env</span> - Environment variables
          <br />
          <span style={{ color: "#66FF66" }}>which bash</span> - Find bash
          location
        </dd>

        <dt className="help-list-item">
          <span className="help-command">⚡ Utility Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>neofetch</span> - System info with
          ASCII art
          <br />
          <span style={{ color: "#66FF66" }}>figlet [text]</span> - ASCII art
          banner generator (e.g., figlet Hello World)
          <br />
          <span style={{ color: "#66FF66" }}>curl wttr.in</span> - Real-time
          weather report
          <br />
          <span style={{ color: "#66FF66" }}>fortune</span> - Random programming
          quotes
          <br />
          <span style={{ color: "#66FF66" }}>cal</span> - Terminal-styled
          calendar
          <br />
          <span style={{ color: "#66FF66" }}>date</span> - Current date and time
          with world clock
          <br />
          <span style={{ color: "#66FF66" }}>uptime</span> - System uptime and
          load averages
          <br />
          <span style={{ color: "#66FF66" }}>tree</span> - Directory tree
          structure
          <br />
          <span style={{ color: "#66FF66" }}>echo [text]</span> - Display text
          (supports quotes & variables)
          <br />
          <span style={{ color: "#66FF66" }}>finger</span> - User information
          <br />
          <span style={{ color: "#66FF66" }}>w / who</span> - Who is logged in
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🎯 Special & Hardware Commands</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>lscpu</span> - CPU information and
          specifications
          <br />
          <span style={{ color: "#66FF66" }}>free -h</span> - Memory usage
          statistics
          <br />
          <span style={{ color: "#66FF66" }}>df -h</span> - Disk usage and
          filesystem info
          <br />
          <span style={{ color: "#66FF66" }}>lsusb</span> - USB device
          information
          <br />
          <span style={{ color: "#66FF66" }}>lspci</span> - PCI device
          information
        </dd>

        <dt className="help-list-item">
          <span className="help-command">🔤 Advanced Echo Examples</span>
        </dt>
        <dd className="help-list-item">
          <span style={{ color: "#66FF66" }}>echo &quot;Hello World&quot;</span>{" "}
          - Display custom text with quotes
          <br />
          <span style={{ color: "#66FF66" }}>echo $USER</span> - Show current
          username
          <br />
          <span style={{ color: "#66FF66" }}>echo $HOME</span> - Show home
          directory path
          <br />
          <span style={{ color: "#66FF66" }}>echo $PATH</span> - Show system
          PATH variable
          <br />
          <span style={{ color: "#66FF66" }}>echo $SHELL</span> - Show current
          shell
        </dd>

        <dt className="help-list-item">
          <span className="help-command">📞 Contact Information</span>
        </dt>
        <dd className="help-list-item">
          <strong>Email:</strong>{" "}
          <ClickableLink url="mailto:echoinbyte@gmail.com">
            echoinbyte@gmail.com
          </ClickableLink>
          <br />
          <strong>GitHub:</strong>{" "}
          <ClickableLink url="https://github.com/echoinbyte">
            echoinbyte
          </ClickableLink>
          <br />
          <strong>Facebook:</strong>{" "}
          <ClickableLink url="https://facebook.com/possiblearyal">
            possiblearyal
          </ClickableLink>
          <br />
          <strong>NPM:</strong>{" "}
          <ClickableLink url="https://www.npmjs.com/~sambhavaryal">
            sambhavaryal
          </ClickableLink>
        </dd>
      </dl>
    </div>
  );
}

export default HelpContent;
