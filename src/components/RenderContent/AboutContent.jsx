import ClickableCommand from "../ClickableCommand";
import ClickableLink from "../ClickableLink";

const AboutContent = () => {
  return (
    <div className="terminal-content text-white font-mono whitespace-pre-wrap">
      {`� About Sambhav Aryal (Echoinbyte)
═══════════════════════════════════════════════════════════════════

Personal Info:
──────────────
Name:              Sambhav Aryal
Username:          Echoinbyte  
Age:               16 years young
Location:          Nepal (GMT+5:45)
Email:             echoinbyte@gmail.com
Status:            Student & Developer

Academic Excellence:
────────────────────
🎓 BLE (2024):        GPA 3.93/4.0 (Science & Technology)
🎓 SEE (2022):        GPA 3.96/4.0 (Top district performer)

Competition Highlights:
───────────────────────
🥇 District IT Quiz:     1st Place Winner
🥈 Science & IT Quiz:    2nd Place Winner  
🏆 National Hackathon:    Top 15

Biography:
──────────
Young passionate developer from Nepal, building innovative web solutions 
at 16. Started coding with curiosity and evolved into creating impactful 
projects like LoomingFace, ETC, and GameOverse that help thousands of users.

I specialize in modern web technologies and enjoy solving real-world 
problems through code. Currently balancing academics with development 
work, contributing to open-source, and building tools that matter.

Notable Projects:
─────────────────
🎨 LoomingFace:    Beautiful avatar builder (`}
      <ClickableLink url="https://loomingface.vercel.app">
        loomingface.vercel.app
      </ClickableLink>
      {`)
📧 ETC:            Email template platform (`}
      <ClickableLink url="https://etcdot.vercel.app">
        etcdot.vercel.app
      </ClickableLink>
      {`)  
🎮 GameOverse:     Gamified learning tools (`}
      <ClickableLink url="https://gameoverse.vercel.app">
        gameoverse.vercel.app
      </ClickableLink>
      {`)
⚡ Others:         `}
      <ClickableLink url="https://onetimex.vercel.app">onetimex</ClickableLink>
      {`, `}
      <ClickableLink url="https://possibleweb.vercel.app">
        possibleweb
      </ClickableLink>
      {`, `}
      <ClickableLink url="https://qodenest.vercel.app">qodenest</ClickableLink>
      {`

Tech Focus Areas:
─────────────────
• Interactive web applications & UI/UX
• Full-stack development (React, Node.js, Python)
• Real-time features & responsive design
• Open-source contributions & community building

Fun Facts:
──────────
🎯 Started coding at age 12 with pure curiosity
🚀 Built first web app at 13, never looked back
📚 Self-taught through projects and experimentation  
🌟 Thousands of users across my applications
🎮 Gaming inspired my approach to interactive UX
💡 Always exploring new technologies and frameworks

Current Status:
───────────────
📖 Academics:     Balancing +2 studies with development
💼 Work:          Available for projects and collaborations
🎯 Focus:         React ecosystem and full-stack development
🌱 Learning:      AI integration and advanced animations
🚀 Goals:         Building tools that make a real difference

Connect & Explore:
──────────────────
📧 Email:         `}
      <ClickableLink url="mailto:echoinbyte@gmail.com">
        echoinbyte@gmail.com
      </ClickableLink>
      {`
💼 GitHub:        `}
      <ClickableLink url="https://github.com/echoinbyte">
        github.com/echoinbyte
      </ClickableLink>
      {`
🔗 LinkedIn:      `}
      <ClickableLink url="https://linkedin.com/in/echoinbyte">
        linkedin.com/in/echoinbyte
      </ClickableLink>
      {`
📦 NPM:           `}
      <ClickableLink url="https://npmjs.com/~sambhavaryal">
        npmjs.com/~sambhavaryal
      </ClickableLink>
      {`
🐦 X/Twitter:     `}
      <ClickableLink url="https://x.com/echoinbyte">
        x.com/echoinbyte
      </ClickableLink>
      {`
📺 YouTube:       `}
      <ClickableLink url="https://youtube.com/@echoinbyte">
        youtube.com/@echoinbyte
      </ClickableLink>
      {`
📘 Facebook:      `}
      <ClickableLink url="https://facebook.com/possiblearyal">
        facebook.com/possiblearyal
      </ClickableLink>

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
        <ClickableCommand command="portfolio">portfolio</ClickableCommand>
        {" | "}
        <ClickableCommand command="contact">contact</ClickableCommand>
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

export default AboutContent;
