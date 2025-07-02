import Prompt from "../Prompt";
import "../Styling/Help.css";

function Help() {
  return (
    <div className="terminal-content">
      <pre>
        {`📖 Termozet Terminal - Command Reference & Usage Guide
═══════════════════════════════════════════════════════════════════

Learn how to use this terminal interface effectively:`}
      </pre>

      <div className="help-container">
        <dl className="help-list">
          <dt className="help-list-item">
            <span className="help-command">Getting Started</span>
          </dt>
          <dd className="help-list-item">
            Type commands in the terminal where the cursor is blinking. All
            commands are case-sensitive and should be typed in lowercase.
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Available Commands</span>
          </dt>
          <dd className="help-list-item">
            Type → <span style={{ color: "#66FF66" }}>ls</span> to see all
            available commands with descriptions.
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Navigation Commands</span>
          </dt>
          <dd className="help-list-item">
            <span style={{ color: "#66FF66" }}>home</span>,{" "}
            <span style={{ color: "#66FF66" }}>about</span>,{" "}
            <span style={{ color: "#66FF66" }}>portfolio</span>,{" "}
            <span style={{ color: "#66FF66" }}>contact</span>,{" "}
            <span style={{ color: "#66FF66" }}>skills</span>,{" "}
            <span style={{ color: "#66FF66" }}>experience</span>,{" "}
            <span style={{ color: "#66FF66" }}>blog</span>
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Social Media Commands</span>
          </dt>
          <dd className="help-list-item">
            <span style={{ color: "#66FF66" }}>social</span> - View all social
            profiles
            <br />
            <span style={{ color: "#66FF66" }}>social/github</span> - GitHub
            repositories
            <br />
            <span style={{ color: "#66FF66" }}>social/linkedin</span> -
            Professional profile
            <br />
            <span style={{ color: "#66FF66" }}>social/youtube</span> - Video
            content
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
            <span className="help-command">Blog Commands</span>
          </dt>
          <dd className="help-list-item">
            <span style={{ color: "#66FF66" }}>blog</span> - View all blog posts
            <br />
            <span style={{ color: "#66FF66" }}>blog/terminal-portfolio</span> -
            React terminal guide
            <br />
            <span style={{ color: "#66FF66" }}>blog/modern-javascript</span> -
            ES6+ features
            <br />
            <span style={{ color: "#66FF66" }}>blog/clean-code</span> - Clean
            code practices
            <br />
            <span style={{ color: "#66FF66" }}>blog/css-grid</span> - CSS Grid
            guide
            <br />
            <span style={{ color: "#66FF66" }}>blog/api-design</span> - RESTful
            API design
          </dd>

          <dt className="help-list-item">
            <span className="help-command">System Commands</span>
          </dt>
          <dd className="help-list-item">
            <span style={{ color: "#66FF66" }}>clear</span> - Clear terminal
            screen
            <br />
            <span style={{ color: "#66FF66" }}>whoami</span> - Show current user
            <br />
            <span style={{ color: "#66FF66" }}>date</span> - Show current
            date/time
            <br />
            <span style={{ color: "#66FF66" }}>pwd</span> - Show current
            directory
            <br />
            <span style={{ color: "#66FF66" }}>uptime</span> - Show system
            uptime
            <br />
            <span style={{ color: "#66FF66" }}>hostname</span> - Show computer
            name
            <br />
            <span style={{ color: "#66FF66" }}>neofetch</span> - Show system
            information
            <br />
            <span style={{ color: "#66FF66" }}>history</span> - Show command
            history
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Utility Commands</span>
          </dt>
          <dd className="help-list-item">
            <span style={{ color: "#66FF66" }}>echo [text]</span> - Display text
            <br />
            <span style={{ color: "#66FF66" }}>figlet [text]</span> - Create
            ASCII art text
            <br />
            <span style={{ color: "#66FF66" }}>fortune</span> - Display random
            quotes
            <br />
            <span style={{ color: "#66FF66" }}>curl wttr.in</span> - Get weather
            information
            <br />
            <span style={{ color: "#66FF66" }}>awards</span> - View certificates
            and achievements
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Command Colors</span>
          </dt>
          <dd className="help-list-item">
            Valid commands appear in{" "}
            <span style={{ color: "#66FF66" }}>green (#66FF66)</span> while you
            type. Invalid commands appear in{" "}
            <span style={{ color: "#FF6666" }}>red (#FF6666)</span>.
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Tips</span>
          </dt>
          <dd className="help-list-item">
            • Press Tab for command autocompletion
            <br />
            • Use arrow keys to navigate command history
            <br />
            • Commands are case-sensitive (use lowercase)
            <br />
            • No spaces or special characters needed after valid commands
            <br />• Simply press Enter when command turns green
          </dd>

          <dt className="help-list-item">
            <span className="help-command">Need Help?</span>
          </dt>
          <dd className="help-list-item">
            If you encounter issues, use the{" "}
            <span style={{ color: "#66FF66" }}>contact</span> command to reach
            out, or refresh the page to restart the terminal.
          </dd>
        </dl>

        <Prompt placeholder="Type 'ls' to see all commands" value="" cd="" />
      </div>
    </div>
  );
}

export default Help;
