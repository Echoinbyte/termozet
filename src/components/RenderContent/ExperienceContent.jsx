import ClickableCommand from "../ClickableCommand";

const ExperienceContent = () => {
  return (
    <div className="text-white font-mono whitespace-pre-wrap">
      {`🏆 Experience & Achievements
═══════════════════════════════════════════════════════════════════

Academic Excellence:
────────────────────

📚 BLE Examination (2024)
├── GPA: 3.93/4.0
├── Stream: Science & Technology
├── Focus: Mathematics, Physics, Computer Science
└── Institution: Nepal

📚 SEE Examination (2022)  
├── GPA: 3.96/4.0
├── Focus: Science, Mathematics, Computer
├── Achievement: Top performer in district
└── Institution: Nepal

Competitive Achievements:
─────────────────────────

🥇 District Level Inter +2 IT Quiz Competition
├── Position: 1st Place
├── Year: 2024
├── Participants: 50+ schools across district
├── Topics: Programming, Database, Networking, Web Dev
└── Recognition: District-wide excellence in IT knowledge

🥈 Science and IT Quiz Competition
├── Position: 2nd Place  
├── Year: 2024
├── Scope: Regional level competition
├── Categories: Science concepts, IT applications, Problem solving
└── Achievement: Outstanding performance in technical domains

🏅 National Level Hackathon
├── Position: Top 15
├── Year: 2024
├── Participants: 500+ teams nationwide
├── Project: Innovative web application solution
├── Skills: Full-stack development, Problem solving, Teamwork
└── Recognition: National-level coding excellence

Development Journey:
────────────────────

🚀 Self-Taught Developer (2020 - Present)
├── Started: Age 12 with HTML/CSS curiosity
├── Progression: JavaScript → React → Full-stack
├── Method: Project-based learning, building real applications
├── Community: Active in open-source, GitHub contributions
└── Growth: From beginner to creating apps used by thousands

Notable Project Impact:
───────────────────────

🎨 LoomingFace Avatar Builder
├── Users: Thousands of unique avatars created
├── Impact: Simplified avatar creation for users worldwide
├── Tech: React, Canvas API, Interactive UI
└── Recognition: Featured in developer communities

📧 ETC Email Template Platform  
├── Impact: Streamlined email development for developers
├── Reach: Open-source project gaining traction
├── Innovation: Copy-paste ready templates with live preview
└── Community: Positive feedback from developer community

🎮 GameOverse Learning Platform
├── Part of: NepLoom educational ecosystem
├── Users: Students using gamified learning tools
├── Innovation: Making education engaging through games
└── Features: Quizzes, flashcards, interactive learning

Personal Stats:
───────────────
Current Age:           16 years young
Years Programming:     4+ years
Location:              Nepal  
Study Status:          BLE Science graduate (3.93 GPA)
Open Source:           Active GitHub contributor (echoinbyte)
NPM Packages:          Published as sambhavaryal

Core Strengths:
───────────────
🧠 Problem Solving:    Analytical thinking, creative solutions
⚡ Quick Learning:     Adapts to new technologies rapidly  
🎯 Goal Oriented:      Consistent achiever in academics & coding
🤝 Collaboration:      Team player, effective communication
💡 Innovation:         Creates practical solutions to real problems

Future Goals:
─────────────
🎓 Continue academic excellence while building projects
🚀 Expand into AI/ML integration and advanced web technologies
🌍 Contribute more to open-source ecosystem
🏆 Participate in international coding competitions
💼 Build products that make a positive impact globally`}

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
        <ClickableCommand command="skills">skills</ClickableCommand>
        {" | "}
        <ClickableCommand command="blog">blog</ClickableCommand>
      </div>
    </div>
  );
};

export default ExperienceContent;
