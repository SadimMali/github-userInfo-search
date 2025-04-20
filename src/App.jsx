import { useEffect, useState } from "react";
import { SearchUsername } from "./components/SearchUsername";
import { UserDetails } from "./components/UserDetails";

function App() {
  //states
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [isError, setISError] = useState(false);

  //Hold user's data after fetching
  const [userData, setUserData] = useState(null);

  console.log(userData);

  console.log(userData);

  //Fetch the data
  useEffect(() => {
    async function fetchUserData() {
      if (username) {
        try {
          const response = await fetch(
            `https://api.github.com/users/${username}`
          );
          if (response.ok) {
            const data = await response.json();
            setISError(false);
            setUserData(data);
          } else {
            setUserData(null);
            setISError(true);
          }
        } catch (error) {
          console.error("Error fetching user data: " + error);
        }
      }
    }
    fetchUserData();
  }, [username]);

  function handleSearch(e) {
    setUsername(user);
    e.preventDefault();
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  return (
    <main>
      <h1 className="heading">Find Github Search </h1>
      <SearchUsername
        handleSearch={handleSearch}
        user={user}
        handleChange={handleChange}
      />

      <UserDetails
        avatar={userData?.avatar_url || ""}
        username={username}
        html_url={userData?.html_url || ""}
        bio={userData?.bio || ""}
        public_repos={userData?.public_repos || "----"}
        followers={userData?.followers.toString() || "----"}
        joinedAt={
          userData?.created_at
            ? new Date(userData.created_at).toLocaleDateString()
            : "----"
        }
        isError={isError}
      />
    </main>
  );
}

export default App;
