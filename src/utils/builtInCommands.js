// Built-in terminal commands with real data fetching capabilities
import figlet from "figlet";

// Manual ASCII art generator as fallback
const createManualASCII = (text) => {
  const asciiMap = {
    A: ["  █████  ", " ██   ██ ", " ███████ ", " ██   ██ ", " ██   ██ "],
    B: [" ██████  ", " ██   ██ ", " ██████  ", " ██   ██ ", " ██████  "],
    C: [" ███████ ", " ██      ", " ██      ", " ██      ", " ███████ "],
    D: [" ██████  ", " ██   ██ ", " ██   ██ ", " ██   ██ ", " ██████  "],
    E: [" ███████ ", " ██      ", " █████   ", " ██      ", " ███████ "],
    F: [" ███████ ", " ██      ", " █████   ", " ██      ", " ██      "],
    G: [" ███████ ", " ██      ", " ██  ███ ", " ██   ██ ", " ███████ "],
    H: [" ██   ██ ", " ██   ██ ", " ███████ ", " ██   ██ ", " ██   ██ "],
    I: [" ███████ ", "    ██   ", "    ██   ", "    ██   ", " ███████ "],
    J: [" ███████ ", "      ██ ", "      ██ ", " ██   ██ ", " ███████ "],
    K: [" ██   ██ ", " ██  ██  ", " █████   ", " ██  ██  ", " ██   ██ "],
    L: [" ██      ", " ██      ", " ██      ", " ██      ", " ███████ "],
    M: [" ██   ██ ", " ███ ███ ", " ██ █ ██ ", " ██   ██ ", " ██   ██ "],
    N: [" ██   ██ ", " ███  ██ ", " ██ █ ██ ", " ██  ███ ", " ██   ██ "],
    O: [" ███████ ", " ██   ██ ", " ██   ██ ", " ██   ██ ", " ███████ "],
    P: [" ██████  ", " ██   ██ ", " ██████  ", " ██      ", " ██      "],
    Q: [" ███████ ", " ██   ██ ", " ██ █ ██ ", " ██  ███ ", " ███████ "],
    R: [" ██████  ", " ██   ██ ", " ██████  ", " ██   ██ ", " ██   ██ "],
    S: [" ███████ ", " ██      ", " ███████ ", "      ██ ", " ███████ "],
    T: [" ███████ ", "    ██   ", "    ██   ", "    ██   ", "    ██   "],
    U: [" ██   ██ ", " ██   ██ ", " ██   ██ ", " ██   ██ ", " ███████ "],
    V: [" ██   ██ ", " ██   ██ ", " ██   ██ ", "  ██ ██  ", "   ███   "],
    W: [" ██   ██ ", " ██   ██ ", " ██ █ ██ ", " ███ ███ ", " ██   ██ "],
    X: [" ██   ██ ", "  ██ ██  ", "   ███   ", "  ██ ██  ", " ██   ██ "],
    Y: [" ██   ██ ", "  ██ ██  ", "   ███   ", "    ██   ", "    ██   "],
    Z: [" ███████ ", "     ██  ", "    ██   ", "   ██    ", " ███████ "],
    0: [" ███████ ", " ██   ██ ", " ██   ██ ", " ██   ██ ", " ███████ "],
    1: ["    ██   ", "   ███   ", "    ██   ", "    ██   ", " ███████ "],
    2: [" ███████ ", "      ██ ", " ███████ ", " ██      ", " ███████ "],
    3: [" ███████ ", "      ██ ", " ███████ ", "      ██ ", " ███████ "],
    4: [" ██   ██ ", " ██   ██ ", " ███████ ", "      ██ ", "      ██ "],
    5: [" ███████ ", " ██      ", " ███████ ", "      ██ ", " ███████ "],
    6: [" ███████ ", " ██      ", " ███████ ", " ██   ██ ", " ███████ "],
    7: [" ███████ ", "      ██ ", "     ██  ", "    ██   ", "   ██    "],
    8: [" ███████ ", " ██   ██ ", " ███████ ", " ██   ██ ", " ███████ "],
    9: [" ███████ ", " ██   ██ ", " ███████ ", "      ██ ", " ███████ "],
    " ": ["         ", "         ", "         ", "         ", "         "],
  };

  const lines = ["", "", "", "", ""];
  for (let char of text.toUpperCase()) {
    const ascii = asciiMap[char] || asciiMap[" "];
    for (let i = 0; i < 5; i++) {
      lines[i] += ascii[i];
    }
  }
  return lines.join("\n");
};

export const getBuiltInCommandOutput = async (
  command,
  username = "flame",
  hostname = "Nitro"
) => {
  try {
    // Handle figlet command with custom text
    if (command.startsWith("figlet")) {
      const parts = command.split(" ");
      const customText = parts.slice(1).join(" ").trim() || "TERMOZET";

      try {
        // Debug figlet availability
        console.log("Figlet object:", figlet);
        console.log("Figlet textSync function:", typeof figlet.textSync);

        // Use the real figlet package - try basic usage
        const asciiArt = figlet.textSync(customText);

        console.log("Figlet raw output:", JSON.stringify(asciiArt));
        console.log("Figlet ASCII art generated for:", customText);

        if (
          asciiArt &&
          asciiArt.trim() !== customText &&
          asciiArt.length > customText.length
        ) {
          return `${asciiArt}

Enhanced Terminal Portfolio
Built with React & Real-time Data
====================================`;
        } else {
          console.log("Figlet output seems to be plain text, falling back");
          throw new Error("Figlet did not apply ASCII styling");
        }
      } catch (error) {
        console.error("Figlet error:", error);
        // Use manual ASCII art generator as fallback
        const blockText = createManualASCII(customText);

        return `${blockText}

Enhanced Terminal Portfolio
Built with React & Real-time Data
====================================`;
      }
    }

    // Handle echo command with quoted text support
    if (command.startsWith("echo ")) {
      const echoText = command.substring(5); // Remove "echo "

      // Handle quoted strings
      if (
        (echoText.startsWith('"') && echoText.endsWith('"')) ||
        (echoText.startsWith("'") && echoText.endsWith("'"))
      ) {
        return echoText.slice(1, -1); // Remove quotes
      }

      // Handle environment variables
      if (echoText === "$USER") return username;
      if (echoText === "$HOME") return `/home/${username}`;
      if (echoText === "$PATH")
        return "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin";
      if (echoText === "$SHELL") return "/bin/bash";
      if (echoText === "$PWD") return `/home/${username}`;

      // Return the text as-is for other cases
      return echoText;
    }

    switch (command) {
      case "whoami": {
        return username;
      }

      case "date": {
        const now = new Date();
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        return `╔═══════════════════════════════════════════════════════════════╗
║                        SYSTEM DATE & TIME                     ║
╚═══════════════════════════════════════════════════════════════╝

📅 Date Information:
├─ Full Date: ${days[now.getDay()]}, ${
          months[now.getMonth()]
        } ${now.getDate()}, ${now.getFullYear()}
├─ Short Date: ${now.toLocaleDateString()}
├─ ISO Format: ${now.toISOString().split("T")[0]}
└─ Day of Year: ${Math.ceil(
          (now - new Date(now.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24)
        )}

⏰ Time Information:
├─ Current Time: ${now.toLocaleTimeString()}
├─ 24h Format: ${now.toLocaleTimeString("en-GB")}
├─ UTC Time: ${now.toUTCString().split(" ")[4]}
└─ Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}

🌍 World Clock:
├─ New York: ${new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
        })}
├─ London: ${new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
        })}
├─ Tokyo: ${new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" })}
└─ Sydney: ${new Date().toLocaleTimeString("en-AU", {
          timeZone: "Australia/Sydney",
        })}`;
      }

      case "pwd": {
        // This will be handled by the calling component since it needs currentPath
        return null;
      }

      case "uptime": {
        // Calculate actual browser/app uptime
        const performanceUptime = Math.floor(performance.now() / 1000);
        const hours = Math.floor(performanceUptime / 3600);
        const minutes = Math.floor((performanceUptime % 3600) / 60);
        const seconds = Math.floor(performanceUptime % 60);
        const loadAvg1 = (Math.random() * 2).toFixed(2);
        const loadAvg5 = (Math.random() * 1.5).toFixed(2);
        const loadAvg15 = (Math.random() * 1).toFixed(2);

        // Format all values to exact column widths for perfect alignment
        const hoursStr = hours.toString().padStart(2, "0");
        const minutesStr = minutes.toString().padStart(2, "0");
        const secondsStr = seconds.toString().padStart(2, "0");

        // Format uptime display - ensure it fits in 39 characters (59 - 20 for labels)
        const uptimeDisplay = `${hoursStr}h ${minutesStr}m ${secondsStr}s`;
        const uptimeFormatted = uptimeDisplay.padEnd(39, " ");

        // Format load averages - ensure consistent spacing
        const loadAvg1Str = loadAvg1.padStart(4, " ");
        const loadAvg5Str = loadAvg5.padStart(4, " ");
        const loadAvg15Str = loadAvg15.padStart(4, " ");
        const loadDisplay = `${loadAvg1Str} (1m) | ${loadAvg5Str} (5m) | ${loadAvg15Str} (15m)`;
        const loadFormatted = loadDisplay.padEnd(39, " ");

        // Format performance metrics to exact widths
        const cpuUsage = Math.floor(Math.random() * 30 + 10)
          .toString()
          .padStart(2, " ");
        const memUsage = Math.floor(Math.random() * 40 + 30)
          .toString()
          .padStart(2, " ");
        const processes = Math.floor(Math.random() * 50 + 100)
          .toString()
          .padStart(3, " ");

        return `+=============================================================+
|                        SYSTEM UPTIME                        |
+=============================================================+

>> Current Time: ${new Date().toLocaleString()}
>> System Boot:  ${new Date(
          Date.now() - performanceUptime * 1000
        ).toLocaleString()}

+-----------------------------------------------------------+
|                    UPTIME BREAKDOWN                      |
+-----------------------------------------------------------+
| Total Uptime: ${uptimeFormatted}    |
| Active Users: 1 user                                     |
| Load Average: ${loadFormatted}    |
+-----------------------------------------------------------+

>> Performance Metrics:
   - CPU Usage: ~${cpuUsage}%
   - Memory Usage: ~${memUsage}%
   - Processes: ${processes} running`;
      }

      case "uname":
      case "uname -a": {
        // Get actual browser/OS info
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;

        return `${platform} ${hostname} 5.4.0-74-generic #83-Ubuntu SMP ${new Date().toDateString()} x86_64 x86_64 x86_64 GNU/Linux (${
          userAgent.split(" ")[0]
        })`;
      }

      case "hostname": {
        return hostname;
      }

      case "id": {
        return `uid=1000(${username}) gid=1000(${username}) groups=1000(${username}),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),120(lpadmin),131(lxd),132(sambashare)`;
      }

      case "ps": {
        // Show actual running processes (browser tabs simulation)
        const processes = [
          `  PID TTY          TIME CMD`,
          ` 1234 pts/0    00:00:01 bash`,
          ` 5678 pts/0    00:00:00 termozet`,
          ` ${Math.floor(Math.random() * 9000 + 1000)} pts/0    00:00:00 ${
            navigator.userAgent.includes("Chrome") ? "chrome" : "firefox"
          }`,
          ` ${Math.floor(Math.random() * 9000 + 1000)} pts/0    00:00:00 node`,
          ` 9012 pts/0    00:00:00 ps`,
        ];
        return processes.join("\n");
      }

      case "df -h": {
        // Simulate filesystem usage with realistic values
        const rootSize = Math.floor(Math.random() * 50 + 20);
        const rootUsed = Math.floor(Math.random() * 20 + 8);
        const rootAvail = Math.floor(Math.random() * 30 + 10);
        const rootPercent = Math.floor(Math.random() * 80 + 20);
        const homeSize = Math.floor(Math.random() * 100 + 50);
        const homeUsed = Math.floor(Math.random() * 50 + 25);
        const homeAvail = Math.floor(Math.random() * 50 + 23);
        const homePercent = Math.floor(Math.random() * 60 + 40);
        const tmpSize = Math.floor(Math.random() * 8 + 2);

        return `╔═══════════════════════════════════════════════════════════════╗
║                        FILESYSTEM USAGE                       ║
╚═══════════════════════════════════════════════════════════════╝

💾 Disk Space Overview:
┌────────────────┬──────┬──────┬───────┬──────┬─────────────────┐
│   Filesystem   │ Size │ Used │ Avail │ Use% │   Mounted on    │
├────────────────┼──────┼──────┼───────┼──────┼─────────────────┤
│ /dev/sda1      │ ${rootSize.toString().padStart(3, " ")}G │ ${rootUsed
          .toString()
          .padStart(3, " ")}G │ ${rootAvail
          .toString()
          .padStart(4, " ")}G │ ${rootPercent
          .toString()
          .padStart(3, " ")}% │ /               │
│ tmpfs          │ ${tmpSize.toString().padStart(3, " ")}G │   0G │ ${tmpSize
          .toString()
          .padStart(4, " ")}G │   0% │ /dev/shm        │
│ /dev/sda2      │ ${homeSize.toString().padStart(3, " ")}G │ ${homeUsed
          .toString()
          .padStart(3, " ")}G │ ${homeAvail
          .toString()
          .padStart(4, " ")}G │ ${homePercent
          .toString()
          .padStart(3, " ")}% │ /home           │
└────────────────┴──────┴──────┴───────┴──────┴─────────────────┘

📊 Storage Statistics:
├─ Total Storage: ${rootSize + homeSize}GB
├─ Used Space: ${rootUsed + homeUsed}GB (${Math.floor(
          ((rootUsed + homeUsed) / (rootSize + homeSize)) * 100
        )}%)
├─ Free Space: ${rootAvail + homeAvail}GB
└─ Largest Mount: /home (${homeSize}GB)`;
      }

      case "free -h": {
        // Get actual memory info if available
        const memory =
          navigator.deviceMemory || Math.floor(Math.random() * 16 + 4);
        const used = Math.floor(memory * 0.3);
        const free = Math.floor(memory * 0.5);
        const available = Math.floor(memory * 0.7);
        const cache = Math.floor(memory * 0.2);
        const swap = 2;

        const usedPercent = Math.floor((used / memory) * 100);
        const freePercent = Math.floor((free / memory) * 100);
        const cachePercent = Math.floor((cache / memory) * 100);

        // Create visual memory usage bar
        const barLength = 40;
        const usedBars = Math.floor((usedPercent / 100) * barLength);
        const cacheBars = Math.floor((cachePercent / 100) * barLength);
        const freeBars = barLength - usedBars - cacheBars;

        const memoryBar =
          "█".repeat(usedBars) + "▓".repeat(cacheBars) + "░".repeat(freeBars);

        // Create perfectly aligned table with exact character positioning
        // Each column must be exactly the width shown in the header
        const formatCol = (value, width) => {
          const str = `${value}.0 GB`;
          return str.padStart(width, " ");
        };

        return `╔═══════════════════════════════════════════════════════════════╗
║                         MEMORY USAGE                          ║
╚═══════════════════════════════════════════════════════════════╝

📊 Memory Statistics:
┌─────────────┬──────────┬──────────┬──────────┬──────────┬──────────┬────────────┐
│    Type     │  Total   │   Used   │   Free   │ Shared   │  Cache   │ Available  │
├─────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼────────────┤
│ Memory      │${formatCol(memory, 10)}│${formatCol(used, 10)}│${formatCol(
          free,
          10
        )}│  156 MB  │${formatCol(cache, 10)}│${formatCol(available, 12)}│
│ Swap        │${formatCol(swap, 10)}│   0.0 GB │${formatCol(
          swap,
          10
        )}│    0 MB  │   0.0 GB │${formatCol(swap, 12)}│
└─────────────┴──────────┴──────────┴──────────┴──────────┴──────────┴────────────┘

🎯 Memory Usage Visualization:
[${memoryBar}] ${usedPercent}%

Legend: █ Used (${usedPercent}%) ▓ Cache (${cachePercent}%) ░ Free (${freePercent}%)

💡 Memory Breakdown:
├─ Total RAM: ${memory}.0 GB (${(memory * 1024).toFixed(0)} MB)
├─ Used by Apps: ${used}.0 GB (${usedPercent.toString().padStart(2, " ")}%)
├─ Cache/Buffers: ${cache}.0 GB (${cachePercent.toString().padStart(2, " ")}%)
├─ Free Memory: ${free}.0 GB (${freePercent.toString().padStart(2, " ")}%)
└─ Available for Apps: ${available}.0 GB`;
      }

      case "history":
        // This will be handled by the calling component since it needs commandHistory
        return null;

      case "cat /etc/os-release":
        return `NAME="Ubuntu"
VERSION="20.04.6 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 20.04.6 LTS"
VERSION_ID="20.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=focal
UBUNTU_CODENAME=focal`;

      case "lscpu": {
        // Get actual CPU info if available
        const cores = navigator.hardwareConcurrency || 8;

        return `╔═══════════════════════════════════════════════════════════════╗
║                       CPU INFORMATION                         ║
╚═══════════════════════════════════════════════════════════════╝

🔧 CPU Architecture Details:
├─ Architecture: x86_64
├─ CPU op-mode(s): 32-bit, 64-bit
├─ Byte Order: Little Endian
├─ Address sizes: 39 bits physical, 48 bits virtual
└─ CPU(s): ${cores}

⚡ Core & Thread Information:
├─ On-line CPU(s) list: 0-${cores - 1}
├─ Thread(s) per core: 2
├─ Core(s) per socket: ${cores / 2}
├─ Socket(s): 1
└─ NUMA node(s): 1

🏭 Processor Details:
├─ Vendor ID: GenuineIntel
├─ CPU family: 6
├─ Model: 142
├─ Model name: Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz
├─ Stepping: 10
├─ CPU MHz: ${Math.floor(Math.random() * 2000 + 1800)}.000
├─ CPU max MHz: 4000.0000
└─ CPU min MHz: 400.0000

🎯 Performance Summary:
├─ Total Logical Cores: ${cores}
├─ Current Clock Speed: ~${Math.floor(Math.random() * 2000 + 1800)} MHz
└─ Max Boost Speed: 4.0 GHz`;
      }

      case "neofetch": {
        // Enhanced neofetch with real system info
        const browserName = navigator.userAgent.includes("Chrome")
          ? "Google Chrome"
          : navigator.userAgent.includes("Firefox")
          ? "Mozilla Firefox"
          : navigator.userAgent.includes("Safari")
          ? "Safari"
          : "Unknown Browser";
        const osInfo = navigator.platform;
        const screenRes = `${screen.width}x${screen.height}`;
        const colorDepth = screen.colorDepth;
        const deviceMemoryGB = navigator.deviceMemory || "Unknown";
        const connectionType = navigator.connection?.effectiveType || "Unknown";

        return `           .-/+oossssoo+/-.               ${username}@${hostname}
        ':+ssssssssssssssss+:'            -----------
      -+ssssssssssssssssssss+-        OS: Ubuntu 20.04.6 LTS x86_64
    -+sssssssssssssssssssssss+-       Host: Termozet Portfolio Terminal
  '+sssssssssssssssssssssssss+'       Kernel: 5.4.0-74-generic
 '+sssssssssssssssssssssssssss+'      Uptime: ${Math.floor(
   performance.now() / 3600000
 )
   .toString()
   .padStart(2, " ")} hours, ${Math.floor((performance.now() % 3600000) / 60000)
          .toString()
          .padStart(2, " ")} mins
+sssssssssssssssssssssssssssss+       Packages: 1847 (dpkg), 93 (snap)
+sssssssssssssssssssssssssssss+       Shell: bash 5.0.17
+sssssssssssssssssssssssssssss+       Resolution: ${screenRes}
+sssssssssssssssssssssssssssss+       DE: GNOME 3.36.8
 '+sssssssssssssssssssssssssss+'      WM: Mutter
  '+sssssssssssssssssssssssss+'       WM Theme: Adwaita
   '+sssssssssssssssssssssss+'        Theme: Yaru [GTK2/3]
     '+sssssssssssssssssss+'          Icons: Yaru [GTK2/3]
       '+sssssssssssssss+'            Terminal: termozet
         '+ssssssssss+'               Browser: ${browserName}
           '+ssssss+'                 Platform: ${osInfo}
             '+ss+'                   Memory: ${deviceMemoryGB}GB RAM
                                      Color Depth: ${colorDepth}-bit
                                      Connection: ${connectionType}`;
      }

      case "fortune": {
        const fortunes = [
          "The best way to predict the future is to invent it. - Alan Kay",
          "Code is like humor. When you have to explain it, it's bad. - Cory House",
          "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
          "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
          "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Brian Kernighan",
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
          "First, solve the problem. Then, write the code. - John Johnson",
          "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
          "In order to be irreplaceable, one must always be different. - Coco Chanel",
          "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
          "Talk is cheap. Show me the code. - Linus Torvalds",
          "The computer was born to solve problems that did not exist before. - Bill Gates",
          "Software is a great combination between artistry and engineering. - Bill Gates",
          "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
          "The only way to go fast, is to go well. - Robert C. Martin",
        ];
        return fortunes[Math.floor(Math.random() * fortunes.length)];
      }

      case "curl wttr.in": {
        try {
          // Try to fetch real weather data from wttr.in
          const response = await fetch("https://wttr.in/?format=j1");
          if (response.ok) {
            const weatherData = await response.json();
            const current = weatherData.current_condition[0];
            const location = weatherData.nearest_area[0];

            const temp = current.temp_C;
            const feelsLike = current.FeelsLikeC;
            const condition = current.weatherDesc[0].value;
            const humidity = current.humidity;
            const windSpeed = current.windspeedKmph;
            const windDirection = current.winddir16Point;

            // Simple weather icon based on condition
            let icon = [
              "     .-.     ",
              "    (   ).   ",
              "   (___(__)  ",
              "             ",
              "             ",
            ];

            if (
              condition.toLowerCase().includes("sunny") ||
              condition.toLowerCase().includes("clear")
            ) {
              icon = [
                "    \\   /    ",
                "     .-.     ",
                "  ― (   ) ―  ",
                "     '-'     ",
                "    /   \\    ",
              ];
            } else if (condition.toLowerCase().includes("cloud")) {
              icon = [
                "             ",
                "     .--.    ",
                "  .-(    ).  ",
                " (___.__)__) ",
                "             ",
              ];
            } else if (condition.toLowerCase().includes("rain")) {
              icon = [
                "     .-.     ",
                "    (   ).   ",
                "   (___(__)  ",
                "    ' ' ' '  ",
                "   ' ' ' '   ",
              ];
            }

            // Format weather table with perfect alignment using helper function
            const formatWeatherRow = (label, value, unit = "", extra = "") => {
              const labelCol = label.padEnd(12, " "); // Fixed 12-char label column

              // Handle different row types for perfect alignment
              if (label === "Wind") {
                // Wind: "value unit extra" format (e.g., "7 km/h SW")
                const windDisplay = `${value} ${unit} ${extra}`.padEnd(27, " ");
                return `│  ${labelCol} ${windDisplay}    │`;
              } else if (label === "Condition") {
                // Condition: just the condition text, truncated if needed
                const conditionDisplay =
                  extra.length > 27
                    ? (extra.substring(0, 24) + "...").padEnd(27, " ")
                    : extra.padEnd(27, " ");
                return `│  ${labelCol} ${conditionDisplay}    │`;
              } else {
                // Temperature, Feels like, Humidity: "value unit" format
                const valueDisplay = `${value}${unit}`.padEnd(27, " ");
                return `│  ${labelCol} ${valueDisplay}    │`;
              }
            };

            return `Weather report: ${location.areaName[0].value}, ${
              location.country[0].value
            }

                    ${condition}
${icon[0]}
${icon[1]}      ${temp}°C
${icon[2]}
${icon[3]}      
${icon[4]}

┌──────────────────────────────────────────────┐
│  Current conditions                          │
│                                              │
${formatWeatherRow("Temperature", temp, "°C")}
${formatWeatherRow("Feels like", feelsLike, "°C")}
${formatWeatherRow("Humidity", humidity, "%")}
${formatWeatherRow("Wind", windSpeed, "km/h", windDirection)}
${formatWeatherRow(
  "Condition",
  "",
  "",
  condition.length > 15 ? condition.substring(0, 12) + "..." : condition
)}
│                                              │
└──────────────────────────────────────────────┘

Follow @wttr_in for weather updates.`;
          }
        } catch (error) {
          console.log("Weather API unavailable, using mock data");
        }

        // Fallback to mock data with proper formatting
        const temp = Math.floor(Math.random() * 30 + 10);
        const conditions = [
          "Clear",
          "Cloudy",
          "Sunny",
          "Partly Cloudy",
          "Rainy",
          "Overcast",
        ];
        const condition =
          conditions[Math.floor(Math.random() * conditions.length)];
        const humidity = Math.floor(Math.random() * 40 + 40);
        const windSpeed = Math.floor(Math.random() * 20 + 5);
        const windDirection = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][
          Math.floor(Math.random() * 8)
        ];

        // Classic terminal weather icons - simple and clean
        const weatherIcons = {
          Clear: [
            "    \\   /    ",
            "     .-.     ",
            "  ― (   ) ―  ",
            "     '-'     ",
            "    /   \\    ",
          ],
          Sunny: [
            "   \\  |  /   ",
            " .-.  |  .-. ",
            "(   '---'   )",
            " '-.,. ,.-' ",
            "   /  |  \\   ",
          ],
          Cloudy: [
            "             ",
            "     .--.    ",
            "  .-(    ).  ",
            " (___.__)__) ",
            "             ",
          ],
          "Partly Cloudy": [
            "   \\  /      ",
            ' _ /"".-.    ',
            "   \\_(   ).  ",
            "   /(___(__).",
            "             ",
          ],
          Rainy: [
            "     .-.     ",
            "    (   ).   ",
            "   (___(__)  ",
            "    ' ' ' '  ",
            "   ' ' ' '   ",
          ],
          Overcast: [
            "             ",
            "   .--.      ",
            ".-(    ).    ",
            "(___.__)___) ",
            "             ",
          ],
        };

        const icon = weatherIcons[condition] || weatherIcons["Clear"];
        const feelsLike = temp + Math.floor(Math.random() * 6 - 3);

        // Format weather table with perfect alignment using helper function (same as real data)
        const formatWeatherRow = (label, value, unit = "", extra = "") => {
          const labelCol = label.padEnd(12, " "); // Fixed 12-char label column

          // Handle different row types for perfect alignment
          if (label === "Wind") {
            // Wind: "value unit extra" format (e.g., "7 km/h SW")
            const windDisplay = `${value} ${unit} ${extra}`.padEnd(27, " ");
            return `│  ${labelCol} ${windDisplay}    │`;
          } else if (label === "Condition") {
            // Condition: just the condition text, truncated if needed
            const conditionDisplay =
              extra.length > 27
                ? (extra.substring(0, 24) + "...").padEnd(27, " ")
                : extra.padEnd(27, " ");
            return `│  ${labelCol} ${conditionDisplay}    │`;
          } else {
            // Temperature, Feels like, Humidity: "value unit" format
            const valueDisplay = `${value}${unit}`.padEnd(27, " ");
            return `│  ${labelCol} ${valueDisplay}    │`;
          }
        };

        return `Weather report: Current Location

                    ${condition}
${icon[0]}
${icon[1]}      ${temp}°C
${icon[2]}
${icon[3]}      
${icon[4]}

┌──────────────────────────────────────────────┐
│  Current conditions                          │
│                                              │
${formatWeatherRow("Temperature", temp, "°C")}
${formatWeatherRow("Feels like", feelsLike, "°C")}
${formatWeatherRow("Humidity", humidity, "%")}
${formatWeatherRow("Wind", windSpeed, "km/h", windDirection)}
${formatWeatherRow(
  "Condition",
  "",
  "",
  condition.length > 15 ? condition.substring(0, 12) + "..." : condition
)}
│                                              │
└──────────────────────────────────────────────┘

Follow @wttr_in for weather updates.`;
      }

      case "cal": {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = now.getDate();

        let calendar = `╔═══════════════════════════════════════════════════════════════╗\n`;
        calendar += `║                    ${monthNames[month]} ${year}                    ║\n`;
        calendar += `╚═══════════════════════════════════════════════════════════════╝\n\n`;
        calendar += "┌────┬────┬────┬────┬────┬────┬────┐\n";
        calendar += "│ Su │ Mo │ Tu │ We │ Th │ Fr │ Sa │\n";
        calendar += "├────┼────┼────┼────┼────┼────┼────┤\n";

        let dayStr = "│";

        // Add empty spaces for days before month starts
        for (let i = 0; i < firstDay; i++) {
          dayStr += "    │";
        }

        // Add days of month
        for (let day = 1; day <= daysInMonth; day++) {
          if (day === today) {
            // Highlight today with asterisk
            dayStr += ` ${day.toString().padStart(2, " ")}*│`;
          } else {
            dayStr += ` ${day.toString().padStart(2, " ")} │`;
          }

          if ((firstDay + day) % 7 === 0) {
            dayStr += "\n";
            if (day < daysInMonth) {
              dayStr += "├────┼────┼────┼────┼────┼────┼────┤\n│";
            }
          }
        }

        // Fill remaining cells in last row
        const remainingCells = 7 - ((firstDay + daysInMonth) % 7);
        if (remainingCells < 7) {
          for (let i = 0; i < remainingCells; i++) {
            dayStr += "    │";
          }
          dayStr += "\n";
        }

        dayStr += "└────┴────┴────┴────┴────┴────┴────┘\n";
        dayStr += `\n📅 Today: ${monthNames[month]} ${today}, ${year} (marked with *)`;
        dayStr += `\n⏰ Current time: ${now.toLocaleTimeString()}`;

        return calendar + dayStr;
      }

      case "w":
      case "who": {
        const uptime = Math.floor(performance.now() / 1000);
        const uptimeHours = Math.floor(uptime / 3600);
        const uptimeMins = Math.floor((uptime % 3600) / 60);

        return `╔═══════════════════════════════════════════════════════════════╗
║                       ACTIVE USER SESSIONS                    ║
╚═══════════════════════════════════════════════════════════════╝

⏰ System Time: ${new Date().toLocaleTimeString()} | Uptime: ${uptimeHours}h ${uptimeMins}m
📊 Load Average: ${(Math.random() * 2).toFixed(2)}, ${(
          Math.random() * 1.5
        ).toFixed(2)}, ${(Math.random() * 1).toFixed(2)}

┌────────┬──────┬───────────────┬─────────┬──────┬──────┬──────┬─────────────┐
│  USER  │ TTY  │     FROM      │ LOGIN@  │ IDLE │ JCPU │ PCPU │    WHAT     │
├────────┼──────┼───────────────┼─────────┼──────┼──────┼──────┼─────────────┤
│ ${username.padEnd(6, " ")} │ pts/0│ localhost     │ ${new Date()
          .toLocaleTimeString()
          .substring(0, 5)}   │ 0.00s│ 0.24s│ 0.03s│ termozet    │
└────────┴──────┴───────────────┴─────────┴──────┴──────┴──────┴─────────────┘

👤 Total Users: 1 active session
🖥️  Terminal: Enhanced Termozet Portfolio`;
      }

      case "finger":
        return `Login: ${username}           Name: ${username}
Directory: /home/${username}        Shell: /bin/bash
On since ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (pts/0) from localhost
   ${Math.floor(Math.random() * 60)} seconds idle
Mail: echoinbyte@gmail.com
Plan: Building LoomingFace, ETC, GameOverse and innovative web solutions!`;

      case "tree":
        return `.
├── Documents/
│   ├── portfolio/
│   │   ├── termozet/
│   │   │   ├── src/
│   │   │   ├── public/
│   │   │   └── package.json
│   │   ├── loomingface/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   └── scripts/
│   │       ├── deploy.sh
│   │       └── backup.sh
│   ├── notes/
│   │   ├── ideas.md
│   │   └── todo.md
│   └── resume/
│       └── resume.pdf
├── Downloads/
├── Pictures/
│   ├── screenshots/
│   └── profile/
├── Videos/
│   └── recordings/
└── .bashrc

15 directories, 8 files`;

      case "env":
        return `USER=${username}
HOME=/home/${username}
SHELL=/bin/bash
TERM=xterm-256color
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/home/${username}
LANG=en_US.UTF-8
DISPLAY=:0
BROWSER=${navigator.userAgent.includes("Chrome") ? "google-chrome" : "firefox"}
EDITOR=vim
EMAIL=echoinbyte@gmail.com
GITHUB_USERNAME=echoinbyte
NODE_ENV=development`;

      case "lsusb": {
        return `Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 003: ID 046d:c52b Logitech, Inc. Unifying Receiver
Bus 001 Device 004: ID 0bda:0129 Realtek Semiconductor Corp. RTS5129 Card Reader Controller
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 002 Device 002: ID 0781:5581 SanDisk Corp. Ultra`;
      }

      case "lspci":
        return `00:00.0 Host bridge: Intel Corporation 8th Gen Core Processor Host Bridge/DRAM Registers (rev 07)
00:02.0 VGA compatible controller: Intel Corporation UHD Graphics 620 (rev 07)
00:14.0 USB controller: Intel Corporation Sunrise Point-LP USB 3.0 xHCI Controller (rev 21)
00:16.0 Communication controller: Intel Corporation Sunrise Point-LP CSME HECI #1 (rev 21)
00:1c.0 PCI bridge: Intel Corporation Sunrise Point-LP PCI Express Root Port #1 (rev f1)
00:1f.0 ISA bridge: Intel Corporation Sunrise Point-LP LPC Controller (rev 21)
00:1f.3 Audio device: Intel Corporation Sunrise Point-LP HD Audio (rev 21)
00:1f.4 SMBus: Intel Corporation Sunrise Point-LP SMBus (rev 21)`;

      default:
        return null;
    }
  } catch (error) {
    console.error(`Error executing command ${command}:`, error);
    return `Error executing command: ${command}`;
  }
};

// List of all built-in commands
export const builtInCommands = [
  "clear",
  "whoami",
  "date",
  "pwd",
  "uptime",
  "uname",
  "uname -a",
  "hostname",
  "id",
  "echo",
  "ps",
  "df -h",
  "free -h",
  "history",
  "cat /etc/os-release",
  "lscpu",
  "lsusb",
  "lspci",
  "env",
  "which bash",
  "fortune",
  "curl wttr.in",
  "neofetch",
  "tree",
  "cal",
  "finger",
  "w",
  "who",
  "figlet",
];
