import { useState, useEffect } from "react";
import ClickableLink from "../ClickableLink";

const SocialNpm = () => {
  const [npmData, setNpmData] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNpmData = async () => {
      try {
        setLoading(true);
        // Fetch user data from NPM registry
        const userResponse = await fetch(
          "https://registry.npmjs.org/-/user/sambhavaryal"
        );

        if (!userResponse.ok) {
          throw new Error(`NPM API error: ${userResponse.status}`);
        }

        const userData = await userResponse.json();

        // Fetch user's packages
        const packagesResponse = await fetch(
          "https://registry.npmjs.org/-/v1/search?text=maintainer:sambhavaryal&size=10"
        );
        let packagesData = { objects: [] };

        if (packagesResponse.ok) {
          packagesData = await packagesResponse.json();
        }

        setNpmData(userData);
        setPackages(packagesData.objects || []);
      } catch (err) {
        console.error("Error fetching NPM data:", err);
        // Set fallback data without displaying error to user
        setNpmData({
          name: "echoinbyte",
          email: "echoinbyte@gmail.com",
        });
        setPackages([]); // Set empty packages array instead of fake data
      } finally {
        setLoading(false);
      }
    };

    fetchNpmData();
  }, []);

  if (loading) {
    return (
      <div className="text-white font-mono">
        <div className="mb-4">
          <span className="text-red-500 font-bold">📦 NPM Profile</span>
        </div>
        <div className="text-yellow-400 ml-4">
          <span className="animate-pulse">Loading NPM data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white font-mono">
      <div className="mb-4">
        <span className="text-red-500 font-bold">📦 NPM Profile</span>
      </div>

      <div className="space-y-2 ml-4">
        <div className="flex items-start">
          <span className="text-green-400 w-20">Username:</span>
          <span className="text-white">{npmData?.name || "echoinbyte"}</span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Packages:</span>
          <span className="text-yellow-400">
            {packages.length} published packages
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 w-20">Focus:</span>
          <span className="text-gray-300">
            React components, CLI tools, utilities
          </span>
        </div>
        {npmData?.email && (
          <div className="flex items-start">
            <span className="text-green-400 w-20">Email:</span>
            <ClickableLink
              url={`mailto:${npmData.email}`}
              className="text-blue-400 hover:text-blue-300"
            >
              {npmData.email}
            </ClickableLink>
          </div>
        )}
      </div>

      {packages.length > 0 && (
        <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
          <div className="text-yellow-400 mb-2">📦 Published Packages:</div>
          <div className="space-y-3 text-sm">
            {packages.slice(0, 5).map((pkg, index) => (
              <div key={index} className="pl-2 border-l-2 border-red-500">
                <div className="text-white">{pkg.package.name}</div>
                <div className="text-gray-400 text-xs">
                  {pkg.package.description || "No description available"}
                </div>
                <div className="text-green-400 text-xs">
                  npm install {pkg.package.name}
                </div>
                {pkg.package.version && (
                  <div className="text-blue-400 text-xs">
                    Latest: v{pkg.package.version}
                  </div>
                )}
              </div>
            ))}
            {packages.length === 0 && (
              <div className="text-gray-400 text-sm">
                No packages found or packages are private
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-800 border border-gray-600 rounded">
        <div className="text-yellow-400 mb-2">🔗 NPM Profile:</div>
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-cyan-400">→</span> View packages:{" "}
            <ClickableLink
              url="https://npmjs.com/~sambhavaryal"
              className="text-red-500 hover:text-red-400"
            >
              npmjs.com/~sambhavaryal
            </ClickableLink>
          </div>
          <div>
            <span className="text-cyan-400">→</span> GitHub packages:{" "}
            <ClickableLink
              url="https://github.com/echoinbyte?tab=repositories"
              className="text-blue-400 hover:text-blue-300"
            >
              View source code
            </ClickableLink>
          </div>
        </div>
      </div>

      <div className="mt-4 text-gray-400 text-sm">
        💡 Type <span className="text-green-400">home</span> to go back to home
      </div>
    </div>
  );
};

export default SocialNpm;
