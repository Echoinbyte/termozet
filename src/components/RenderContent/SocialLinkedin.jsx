const SocialLinkedin = () => {
  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-blue-400 font-bold">💼 LinkedIn Profile</span>
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">Name:</span>
          <span className="text-white">EchoInByte</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Title:</span>
          <span className="text-gray-300">Full-Stack Developer</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Location:</span>
          <span className="text-gray-300">Remote</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Experience:</span>
          <span className="text-yellow-400">5+ years in web development</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Expertise:</span>
          <span className="text-blue-400">
            React, Node.js, JavaScript, TypeScript
          </span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 Professional Links:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> Connect with me:
            <a
              href="https://linkedin.com/in/echoinbyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1 underline"
            >
              linkedin.com/in/echoinbyte
            </a>
          </div>
          <div>
            <span className="text-cyan-400">→</span> Portfolio:
            <span className="text-green-400 ml-1">
              Type &lsquo;portfolio&rsquo; to view my work
            </span>
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

export default SocialLinkedin;
