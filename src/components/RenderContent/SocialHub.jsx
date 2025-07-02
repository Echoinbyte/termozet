const SocialHub = () => {
  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-cyan-400 font-bold text-lg">🌐 Social Hub</span>
      </div>

      <div className="mb-4 text-gray-300">
        Welcome to my social media directory! Navigate to any platform:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* GitHub */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-green-400 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-green-400 font-bold text-lg mr-2">📁</span>
            <span className="text-white font-bold">GitHub</span>
            <span className="text-green-400 text-xs ml-2 px-1 py-0.5 bg-green-900 rounded">
              LIVE
            </span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Source code, projects, and contributions (real-time data)
          </div>
          <div className="text-cyan-400 text-sm">
            → Type:{" "}
            <span className="text-green-400 font-bold">social/github</span>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-blue-400 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-blue-400 font-bold text-lg mr-2">💼</span>
            <span className="text-white font-bold">LinkedIn</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Professional network and career updates
          </div>
          <div className="text-cyan-400 text-sm">
            → Type:{" "}
            <span className="text-green-400 font-bold">social/linkedin</span>
          </div>
        </div>

        {/* YouTube */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-red-400 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-red-400 font-bold text-lg mr-2">🎥</span>
            <span className="text-white font-bold">YouTube</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Coding tutorials and tech content
          </div>
          <div className="text-cyan-400 text-sm">
            → Type:{" "}
            <span className="text-green-400 font-bold">social/youtube</span>
          </div>
        </div>

        {/* X (Twitter) */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-gray-300 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-gray-200 font-bold text-lg mr-2">🐦</span>
            <span className="text-white font-bold">X (Twitter)</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Daily insights and quick tech tips
          </div>
          <div className="text-cyan-400 text-sm">
            → Type: <span className="text-green-400 font-bold">social/x</span>
          </div>
        </div>

        {/* Facebook */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-blue-500 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-blue-500 font-bold text-lg mr-2">📘</span>
            <span className="text-white font-bold">Facebook</span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Community updates and tech discussions
          </div>
          <div className="text-cyan-400 text-sm">
            → Type:{" "}
            <span className="text-green-400 font-bold">social/facebook</span>
          </div>
        </div>

        {/* NPM */}
        <div className="p-3 bg-gray-800 border border-gray-600 rounded hover:border-red-500 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-red-500 font-bold text-lg mr-2">📦</span>
            <span className="text-white font-bold">NPM</span>
            <span className="text-red-500 text-xs ml-2 px-1 py-0.5 bg-red-900 rounded">
              LIVE
            </span>
          </div>
          <div className="text-gray-400 text-sm mb-2">
            Open source packages and libraries (real-time data)
          </div>
          <div className="text-cyan-400 text-sm">
            → Type: <span className="text-green-400 font-bold">social/npm</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-gray-900 border border-gray-700 rounded">
        <div className="text-yellow-400 mb-2">📋 Quick Commands:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-green-400">social/github</span> - View GitHub
            profile and projects
          </div>
          <div>
            <span className="text-green-400">social/linkedin</span> -
            Professional profile and experience
          </div>
          <div>
            <span className="text-green-400">social/youtube</span> - Coding
            tutorials and content
          </div>
          <div>
            <span className="text-green-400">social/x</span> - Twitter/X profile
            and tweets
          </div>
          <div>
            <span className="text-green-400">social/facebook</span> - Community
            updates and discussions
          </div>
          <div>
            <span className="text-green-400">social/npm</span> - Open source
            packages and libraries
          </div>
          <div>
            <span className="text-green-400">home</span> - Go back to main
            directory
          </div>
          <div>
            <span className="text-green-400">ls</span> - List available options
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-400 text-sm">
        💡 Use Tab for autocompletion or type any command above
      </div>
    </div>
  );
};

export default SocialHub;
