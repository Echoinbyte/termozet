import ClickableLink from "../ClickableLink";
import ClickableCommand from "../ClickableCommand";

const PortfolioContent = () => {
  return (
    <div className="terminal-content text-white font-mono whitespace-pre-wrap">
      {`💼 Portfolio & Projects
═══════════════════════════════════════════════════════════════════

Featured Projects:
──────────────────

� LoomingFace - Avatar Builder (2024)
   ├── URL: `}
      <ClickableLink url="https://loomingface.vercel.app">
        loomingface.vercel.app
      </ClickableLink>
      {`
   ├── Tech: React, Next.js, Canvas API, CSS3
   ├── Features: Intuitive face builder, Real-time preview, Export options
   ├── Highlights: Beautiful UI, Smooth animations, Mobile responsive
   └── Impact: Thousands of unique avatars created

� ETC - Email Template Platform (2024)  
   ├── URL: `}
      <ClickableLink url="https://etcdot.vercel.app">
        etcdot.vercel.app
      </ClickableLink>
      {`
   ├── Tech: React, Node.js, HTML/CSS Email, MongoDB
   ├── Features: Ready-to-use templates, Live preview, Copy-paste code
   ├── Highlights: Open-source, Developer-friendly, Cross-client tested
   └── Impact: Simplifying email development for developers

🎮 GameOverse - Gamified Learning (2024)
   ├── URL: `}
      <ClickableLink url="https://gameoverse.vercel.app">
        gameoverse.vercel.app
      </ClickableLink>
      {`  
   ├── Tech: React, TypeScript, Gaming Logic, Responsive Design
   ├── Features: Quizzes, Flashcards, Blast, Match games
   ├── Highlights: Engaging UX, Educational focus, Interactive tools
   └── Impact: Part of NepLoom learning ecosystem

🌐 Termozet Terminal Portfolio (2024)
   ├── Tech: React, Vite, CSS3, Real-time Commands
   ├── Features: Terminal simulation, Command history, Live data
   ├── Highlights: Authentic terminal feel, Fast performance
   └── Status: You're using it right now!

⚡ Quick Projects:
   ├── OneTimeX: `}
      <ClickableLink url="https://onetimex.vercel.app">
        onetimex.vercel.app
      </ClickableLink>
      {`
   ├── PossibleWeb: `}
      <ClickableLink url="https://possibleweb.vercel.app">
        possibleweb.vercel.app
      </ClickableLink>
      {`  
   └── QodeNest: `}
      <ClickableLink url="https://qodenest.vercel.app">
        qodenest.vercel.app
      </ClickableLink>
      {`

Technical Arsenal:
──────────────────
Frontend:        React, Next.js, TypeScript, Tailwind CSS
Backend:         Node.js, Express, Python, FastAPI
Database:        MongoDB, PostgreSQL, MySQL
Tools:           Git, VS Code, Figma, Vercel
Specialty:       Interactive UI, Real-time features, Responsive design

Developer Stats:
────────────────
Age:             16 years young
Location:        Nepal  
Open Source:     Active contributor
Learning:        Always exploring new technologies`}

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

export default PortfolioContent;
