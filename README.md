# Termozet - Enhanced Terminal Portfolio v3.0

A modern, interactive terminal-style portfolio website built with React and React Router. This enhanced version features real-time data fetching, instant command execution, comprehensive social media integration, and advanced system commands.

🌐 **Live Demo**: [Visit Termozet Terminal](http://localhost:5173) (when running locally)

## 🚀 New Features in v3.0

### ⚡ Real-Time Data Integration
- **Live Weather**: `curl wttr.in` fetches actual weather data
- **GitHub Integration**: Real-time GitHub profile statistics and repository data
- **System Information**: Browser/device information with actual hardware specs
- **Social Media Status**: Live social media platform integration

### 🖥️ Enhanced System Commands
- **Built-in Commands Module**: Separated all system commands into dedicated module
- **Actual System Data**: Commands like `neofetch`, `lscpu`, `free` show real browser/device info
- **Command History**: Full persistent command history with arrow key navigation
- **Auto-completion**: Tab completion for all available commands

### 📱 Social Media Integration
- **Multi-Platform Support**: GitHub, LinkedIn, YouTube, X, Facebook, NPM
- **Real-Time Data**: Live GitHub statistics and repository information
- **Direct Platform Links**: Seamless navigation to social profiles
- **Contact Integration**: Unified contact system (echoinbyte@gmail.com)

### 🔧 Technical Improvements
- **Instant Response**: Removed all typing animations for faster interaction
- **Async Command Processing**: Supports real-time data fetching
- **Enhanced Error Handling**: Graceful fallbacks for offline scenarios
- **Modern Code Architecture**: Clean separation of concerns

## 🌐 Social Profiles

### Primary Accounts (echoinbyte)
- **GitHub**: [github.com/echoinbyte](https://github.com/echoinbyte)
- **LinkedIn**: [linkedin.com/in/echoinbyte](https://linkedin.com/in/echoinbyte)
- **YouTube**: [youtube.com/@echoinbyte](https://youtube.com/@echoinbyte)
- **X (Twitter)**: [x.com/echoinbyte](https://x.com/echoinbyte)

### Alternate Accounts
- **Facebook**: possiblearyal
- **NPM**: sambhavaryal

### Contact
- **Email**: echoinbyte@gmail.com

## 🎯 Page Structure & Enhanced Features

### Available Pages
1. **Home** (`/`) - Enhanced welcome screen with comprehensive command guide
2. **About** (`/about`) - Personal information with real-time social integration
3. **Portfolio** (`/portfolio`) - Featured projects with GitHub integration
4. **Blog** (`/blog`) - Blog directory with nested routes
   - **Tech Blog** (`/blog/tech`) - Technical articles
   - **Personal Blog** (`/blog/personal`) - Personal posts  
5. **Contact** (`/contact`) - Contact information and availability status
6. **Projects** (`/projects`) - Complete project listings
7. **Skills** (`/skills`) - Technical skills overview (Portfolio with different props)

### Terminal Commands
- `home` - Navigate to home page
- `about` - View about page  
- `portfolio` - See featured portfolio
- `blog` - Browse blog directory
- `blog/tech` - Technical articles
- `blog/personal` - Personal posts
- `contact` - Contact information
- `projects` - All projects
- `skills` - Technical skills
- `home` - Go back to parent directory
- `ls` - List directory contents
- `help` - Show available commands
- `clear` - Reload page

### Enhanced Terminal Features
- **Auto-completion**: Press Tab to complete commands
- **Command History**: Use ↑/↓ arrows to navigate previous commands
- **Real-time Validation**: Commands turn green/red based on validity
## 📋 Available Commands

### 🌐 Navigation Commands
```bash
home          # Navigate to home directory
about         # View personal information and technologies
portfolio     # Browse portfolio projects  
contact       # Get contact information
projects      # View project showcase
social        # Access social media hub
blog          # Read blog posts
skills        # View technical skills
experience    # See work experience
```

### 🔗 Social Networks
```bash
social/github    # GitHub profile (echoinbyte)
social/linkedin  # LinkedIn profile
social/youtube   # YouTube channel
social/x         # X (Twitter) profile
social/facebook  # Facebook profile (possiblearyal)
social/npm       # NPM packages (sambhavaryal)
```

### 🖥️ System Information
```bash
whoami          # Display current user
hostname        # Show system hostname
uname -a        # System information
uptime          # System uptime and load
neofetch        # System info with ASCII art
lscpu           # CPU information
free -h         # Memory usage
df -h           # Disk usage
```

### 🌤️ Real-time Utilities
```bash
curl wttr.in    # Real-time weather report
github          # Detailed GitHub profile with live data
linkedin        # LinkedIn professional information
social-status   # Comprehensive social media dashboard
fortune         # Random programming quotes
```

### 🔧 System Commands
```bash
ls              # List available commands and directories
pwd             # Show current directory
tree            # Display directory tree structure
history         # Command history
env             # Environment variables
ps              # Show running processes
clear           # Clear terminal screen
```

## 🛠️ Technical Implementation

### Enhanced Architecture
- **Modular Command System**: All built-in commands in separate module (`src/utils/builtInCommands.js`)
- **Async Command Processing**: Support for real-time data fetching
- **React Router Integration**: Seamless navigation between pages
- **Real-time Data Integration**: GitHub API, weather API, browser APIs

### Key Files
```
src/
├── utils/
│   └── builtInCommands.js      # All system commands with real data
├── components/
│   ├── RealTerminal/           # Main terminal component
│   └── RenderContent/          # Content rendering components
└── contexts/
    └── TerminalContext.jsx     # Terminal state management
```

## Visionary

Termozet is the brainchild of Sambhav Aryal (Echoinbyte), who envisioned creating a modern web-based terminal experience inspired by Git Bash and Hyper CLI.

## Features

- Modern and sleek UI inspired by Git Bash and Hyper CLI
- Built with React for dynamic user interfaces
- Styled using Tailwind CSS for rapid development and customization

## Installation

To run Termozet locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal via `cd termozet`.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Open your web browser and navigate to `http://localhost:3000` to view Termozet.

## Usage

- Upon opening Termozet, you'll be greeted with a familiar command-line interface.
- Use commands and explore the features just like you would in Git Bash or Hyper CLI.
- Customize the appearance and behavior to suit your preferences using Tailwind CSS.

## Contributing

Thank you for considering contributing to Termozet! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Contact

For any inquiries or feedback regarding Termozet, feel free to contact the visionary behind the project:

- Sambhav Aryal (Echoinbyte)
- GitHub: [Echoinbyte](https://github.com/Echoinbyte)

