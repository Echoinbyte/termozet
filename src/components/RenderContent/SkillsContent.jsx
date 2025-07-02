import ClickableCommand from "../ClickableCommand";

const SkillsContent = () => {
  return (
    <div className="text-white font-mono whitespace-pre-wrap">
      {`⚡ Technical Skills & Expertise
═══════════════════════════════════════════════════════════════════

Programming Languages:
───────────────────────
Frontend:
├── JavaScript (ES6+)     ████████████████████ 95%
├── TypeScript            ████████████████     85%
├── HTML5/CSS3           ████████████████████ 98%
├── React/Next.js        ████████████████████ 95%
└── Python               ███████████████      75%

Backend & Database:
───────────────────
├── Node.js              ████████████████████ 90%
├── Express.js           ████████████████████ 95%
├── Python/FastAPI       ████████████████     85%
├── MongoDB              ████████████████     85%
├── PostgreSQL           █████████████        70%
└── MySQL                █████████████        65%

Frontend Specialties:
─────────────────────
UI/UX Focused:
├── Responsive Design     ████████████████████ 95%
├── CSS Animations       ████████████████     85%
├── Interactive Elements ████████████████████ 95%
├── Tailwind CSS         ████████████████████ 90%
└── Component Libraries  ████████████████     85%

Modern React:
├── Hooks & Context      ████████████████████ 95%
├── State Management     ████████████████     85%
├── Performance Opt.     █████████████        70%
├── Testing (Jest)       ████████████         60%
└── TypeScript React     ████████████████     80%

Tools & Platforms:
──────────────────
Development:
├── Git/GitHub           ████████████████████ 95%
├── VS Code              ████████████████████ 98%
├── Figma/Design         ████████████████     85%
├── Vercel/Deployment    ████████████████████ 90%
└── NPM/Package Mgmt     ████████████████     85%

Project Expertise:
──────────────────
🎨 Avatar Builders       ████████████████████ 95%
📧 Email Templates       ████████████████     85%
🎮 Interactive Tools     ████████████████████ 90%
🌐 Terminal Interfaces   ████████████████████ 95%
📱 Responsive Webapps    ████████████████████ 95%

Age & Learning:
───────────────
Current Age:             16 years young
Years Coding:            4+ years
Learning Style:          Project-based, hands-on
Current Focus:           React ecosystem, Full-stack development
Next Goals:              AI integration, Advanced animations

Notable Achievements:
─────────────────────
🏆 District IT Quiz:     1st Place
🏆 Science & IT Quiz:    2nd Place  
🏆 National Hackathon:   Top 15
📚 Academic GPA:         3.93+ (BLE), 3.96+ (SEE)

Open Source Impact:
───────────────────
📦 NPM: sambhavaryal
🐙 GitHub: echoinbyte
🌟 Projects: LoomingFace, ETC, GameOverse, Termozet
📈 Users: Thousands served across projects`}

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
        <ClickableCommand command="contact">contact</ClickableCommand>
        {" | "}
        <ClickableCommand command="experience">experience</ClickableCommand>
        {" | "}
        <ClickableCommand command="blog">blog</ClickableCommand>
      </div>
    </div>
  );
};

export default SkillsContent;
