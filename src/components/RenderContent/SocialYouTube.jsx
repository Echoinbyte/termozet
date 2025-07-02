const SocialYouTube = () => {
  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-red-400 font-bold">🎥 YouTube Channel</span>
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">Channel:</span>
          <span className="text-white">EchoInByte Dev</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Content:</span>
          <span className="text-gray-300">
            Web Development Tutorials & Tips
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Focus:</span>
          <span className="text-yellow-400">
            React, JavaScript, Terminal Skills
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Schedule:</span>
          <span className="text-blue-400">
            Weekly uploads on coding tutorials
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🎬 Latest Content:</div>
        <div className="space-y-2 text-sm">
          <div className="pl-2">
            <div className="text-cyan-400">
              ▶ Building a Terminal Portfolio with React
            </div>
            <div className="text-gray-400 text-xs ml-2">
              Learn how to create an interactive terminal interface
            </div>
          </div>
          <div className="pl-2">
            <div className="text-cyan-400">
              ▶ Advanced Git Commands Every Developer Should Know
            </div>
            <div className="text-gray-400 text-xs ml-2">
              Master git workflow for professional development
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 Watch & Subscribe:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> YouTube Channel:
            <a
              href="https://youtube.com/@echoinbyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 ml-1 underline"
            >
              youtube.com/@echoinbyte
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

export default SocialYouTube;
