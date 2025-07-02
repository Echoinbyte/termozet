const SocialFacebook = () => {
  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-blue-500 font-bold">📘 Facebook Profile</span>
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">Profile:</span>
          <span className="text-white">EchoInByte Dev</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Focus:</span>
          <span className="text-gray-300">
            Tech Community & Developer Resources
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Content:</span>
          <span className="text-yellow-400">
            Development Tips, Tech News, Community Updates
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">📱 Recent Updates:</div>
        <div className="space-y-3 text-sm">
          <div className="pl-2 border-l-2 border-blue-500">
            <div className="text-white">
              🚀 New terminal portfolio project launched!
            </div>
            <div className="text-gray-400 text-xs">
              Building interactive experiences with React
            </div>
          </div>
          <div className="pl-2 border-l-2 border-blue-500">
            <div className="text-white">
              💻 Hosting a coding workshop next week
            </div>
            <div className="text-gray-400 text-xs">
              Focus on modern web development practices
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 Connect on Facebook:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> Facebook Profile:
            <a
              href="https://facebook.com/possiblearyal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 ml-1 underline"
            >
              facebook.com/possiblearyal
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

export default SocialFacebook;
