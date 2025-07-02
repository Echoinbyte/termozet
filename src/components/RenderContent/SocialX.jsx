const SocialX = () => {
  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-gray-200 font-bold">🐦 X (Twitter) Profile</span>
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">Handle:</span>
          <span className="text-white">@echoinbyte</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Bio:</span>
          <span className="text-gray-300">
            🚀 Full-Stack Dev | 💻 Open Source | 🌐 Web Tech Enthusiast
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Topics:</span>
          <span className="text-yellow-400">
            #WebDev #React #JavaScript #OpenSource
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Activity:</span>
          <span className="text-blue-400">
            Daily tech insights & coding tips
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">📱 Recent Tweets:</div>
        <div className="space-y-3 text-sm">
          <div className="pl-2 border-l-2 border-gray-600">
            <div className="text-white">
              Just shipped a new terminal portfolio! 🚀
            </div>
            <div className="text-gray-400 text-xs">
              Building in public is the way to go #WebDev
            </div>
          </div>
          <div className="pl-2 border-l-2 border-gray-600">
            <div className="text-white">
              Pro tip: Use React.memo() wisely for performance 💡
            </div>
            <div className="text-gray-400 text-xs">
              Optimization is an art #React
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 Follow & Connect:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> Follow on X:
            <a
              href="https://x.com/echoinbyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-100 ml-1 underline"
            >
              x.com/echoinbyte
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-400 text-sm">
        💡 Type <span className="text-green-400">home</span> to go back to
        home
      </div>
    </div>
  );
};

export default SocialX;
