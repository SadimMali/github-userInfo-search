import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (username) {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setUserData(null);
        }
      }
    }
    fetchUserData();
  }, [username]);

  return (
    <>
      <h1>Find Github Search </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="username"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" value="search">
          Search
        </button>
      </form>
      {userData && (
        <div>
          <div className="avatar-profile">
            <img src={userData.avatar_url} alt="" />
            <h3>
              <a href="/" target="_blank" title="view profile"></a>
            </h3>
          </div>

          <p className="bio">{userData.bio}</p>

          <div className="details-container">
            <div>
              <h4>Total Repos</h4>
              <p>{userData.public_repos}</p>
            </div>

            <div>
              <h4>Followers</h4>
              <p>{userData.followers}</p>
            </div>

            <div>
              <h4>Joined At</h4>
              <p>{userData.created_at}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
