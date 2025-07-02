import { useState, useEffect } from "react";

const SocialGithub = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/echoinbyte");

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setGithubData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err.message);
        // Fallback to static data if API fails
        setGithubData({
          login: "echoinbyte",
          name: "EchoInByte",
          bio: "Full-Stack Developer | React Enthusiast | Open Source Contributor",
          public_repos: 25,
          followers: 50,
          following: 30,
          html_url: "https://github.com/echoinbyte",
          created_at: "2020-01-01T00:00:00Z",
          location: "Earth",
          company: null,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <div className="text-white font-mono">
        <div className="mb-4">
          <span className="text-cyan-400 font-bold">📁 GitHub Profile</span>
        </div>
        <div className="text-yellow-400 ml-4">
          <span className="animate-pulse">Loading GitHub data...</span>
        </div>
      </div>
    );
  }

  const joinDate = githubData?.created_at
    ? new Date(githubData.created_at).getFullYear()
    : "Unknown";

  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-cyan-400 font-bold">📁 GitHub Profile</span>
        {error && (
          <div className="text-red-400 text-sm mt-1">
            ⚠️ API Error: {error} (showing cached data)
          </div>
        )}
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">User:</span>
          <span className="text-white">
            {githubData?.login || "echoinbyte"}
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Name:</span>
          <span className="text-white">{githubData?.name || "EchoInByte"}</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Bio:</span>
          <span className="text-gray-300">
            {githubData?.bio ||
              "Full-Stack Developer | React Enthusiast | Open Source Contributor"}
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Repos:</span>
          <span className="text-yellow-400">
            {githubData?.public_repos || 25} public repositories
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Followers:</span>
          <span className="text-blue-400">{githubData?.followers || 0}</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Following:</span>
          <span className="text-blue-400">{githubData?.following || 0}</span>
        </div>
        {githubData?.location && (
          <div className="flex items-start">
            <span className="text-green-400 w-20">Location:</span>
            <span className="text-gray-300">{githubData.location}</span>
          </div>
        )}
        {githubData?.company && (
          <div className="flex items-start">
            <span className="text-green-400 w-20">Company:</span>
            <span className="text-gray-300">{githubData.company}</span>
          </div>
        )}
        <div className="flex items-start">
          <span className="text-green-400 w-20">Joined:</span>
          <span className="text-gray-300">{joinDate}</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 Quick Actions:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> Visit profile:
            <a
              href={githubData?.html_url || "https://github.com/echoinbyte"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1 underline"
            >
              {githubData?.html_url?.replace("https://", "") ||
                "github.com/echoinbyte"}
            </a>
          </div>
          <div>
            <span className="text-cyan-400">→</span> Featured project:
            <a
              href="https://github.com/echoinbyte/termozet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1 underline"
            >
              termozet
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

export default SocialGithub;
