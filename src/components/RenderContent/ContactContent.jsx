import ClickableLink from "../ClickableLink";
import ClickableCommand from "../ClickableCommand";

const ContactContent = () => {
  return (
    <div className="terminal-content text-white font-mono whitespace-pre-wrap">
      {`📧 Contact Information
═══════════════════════════════════════════════════════════════════

Primary Contact:
────────────────

📧 Email:        `}
      <ClickableLink url="mailto:echoinbyte@gmail.com">
        echoinbyte@gmail.com
      </ClickableLink>
      {`
📱 Response:     Usually within 24 hours
🌍 Location:     Nepal (GMT+5:45)
👤 Name:         Sambhav Aryal (Echoinbyte)

Professional Networks:
───────────────────────

💼 GitHub:       `}
      <ClickableLink url="https://github.com/echoinbyte">
        github.com/echoinbyte
      </ClickableLink>
      {`
🔗 LinkedIn:     `}
      <ClickableLink url="https://linkedin.com/in/echoinbyte">
        linkedin.com/in/echoinbyte
      </ClickableLink>
      {`  
📦 NPM:          `}
      <ClickableLink url="https://npmjs.com/~sambhavaryal">
        npmjs.com/~sambhavaryal
      </ClickableLink>
      {`
🐦 X/Twitter:    `}
      <ClickableLink url="https://x.com/echoinbyte">
        x.com/echoinbyte
      </ClickableLink>
      {`
📺 YouTube:      `}
      <ClickableLink url="https://youtube.com/@echoinbyte">
        youtube.com/@echoinbyte
      </ClickableLink>
      {`
📘 Facebook:     `}
      <ClickableLink url="https://facebook.com/possiblearyal">
        facebook.com/possiblearyal
      </ClickableLink>
      {`

Work Availability:
──────────────────

Status:          Available for projects
Age:             16 years young
Work Type:       Freelance, Contract, Collaborations
Remote Work:     Yes (Preferred)
Time Zone:       Nepal Standard Time (NST)

Project Specialties:
────────────────────

• React/Next.js web applications
• Full-stack development
• Avatar builders & interactive tools
• Email template systems
• Gamified learning platforms  
• Open-source contributions
• UI/UX focused development

Notable Work:
─────────────

🎨 LoomingFace:   `}
      <ClickableLink url="https://loomingface.vercel.app">
        loomingface.vercel.app
      </ClickableLink>
      {`
📧 ETC Platform:  `}
      <ClickableLink url="https://etcdot.vercel.app">
        etcdot.vercel.app
      </ClickableLink>
      {`
🎮 GameOverse:    `}
      <ClickableLink url="https://gameoverse.vercel.app">
        gameoverse.vercel.app
      </ClickableLink>
      {`
⚡ Plus:          `}
      <ClickableLink url="https://onetimex.vercel.app">onetimex</ClickableLink>
      {`, `}
      <ClickableLink url="https://possibleweb.vercel.app">
        possibleweb
      </ClickableLink>
      {`, `}
      <ClickableLink url="https://qodenest.vercel.app">qodenest</ClickableLink>
      {`

Let's Build Something Amazing Together! 🚀`}

      <div
        style={{
          textAlign: "center",
          padding: "10px 0",
          fontSize: "14px",
          color: "#888",
          fontFamily: "monospace",
          marginTop: "20px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
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
        <ClickableCommand command="skills">skills</ClickableCommand>
        {" | "}
        <ClickableCommand command="experience">experience</ClickableCommand>
        {" | "}
        <ClickableCommand command="blog">blog</ClickableCommand>
      </div>
    </div>
  );
};

export default ContactContent;
