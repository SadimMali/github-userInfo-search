import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //states
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  //Hold user's after fetching
  const [userData, setUserData] = useState(null);

  //Fetch the data
  useEffect(() => {
    async function fetchUserData() {
      if (username) {
        try{
          const response = await fetch(
            `https://api.github.com/users/${username}`
          );
          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          } else {
            setUserData(null);
          }
        } catch(error){
          console.error('Error fetching user data: ' + error);
        }
      }
    }
    fetchUserData();
    
  },[username]);

  return (
    <>
      <h1>Find Github Search </h1>
      <form
        onSubmit={(e) => {
            setUsername(user);
            console.log("username" + username);
            e.preventDefault();
        }}
      >
        <input
          type="text"
          name="username"
          id="userName"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
