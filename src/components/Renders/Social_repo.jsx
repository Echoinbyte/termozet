import { useState, useEffect } from "react";
import "../Styling/Social_repo.css";
import Social from "./Cd-Social";

function Repo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/echoinbyte")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="repo-container">
      {userData && (
        <div className="repo-info">
          <img src={userData.avatar_url} alt="User Avatar" />
          <div className="repo-info-item">
            <span className="repo-info-label">Name:</span>{" "}
            <span className="repo-info-value">
              {userData.login || "Echoinbyte"}
            </span>
          </div>
          <div className="repo-info-item">
            <span className="repo-info-label">Followers:</span>{" "}
            <span className="repo-info-value">{userData.followers || 0}</span>
          </div>
          <div className="repo-info-item">
            <span className="repo-info-label">Following:</span>{" "}
            <span className="repo-info-value">{userData.following || 0}</span>
          </div>
          <div className="repo-info-item">
            <span className="repo-info-label">Repositories:</span>{" "}
            <span className="repo-info-value">
              {userData.public_repos || 0}
            </span>
          </div>
          <div className="repo-info-item">
            <span className="repo-info-label">Bio:</span>{" "}
            <span className="repo-info-value">
              {userData.bio || "EchoInByte"}
            </span>
          </div>
          <div className="repo-link-container">
            <a
              target="_blank"
              href="https://www.github.com/echoinbyte"
              className="w-full"
            >
              <button>See my Repos</button>
            </a>
          </div>
        </div>
      )}

      <Social />
    </div>
  );
}

export default Repo;
