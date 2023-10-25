export const UserDetails = ({
  avatar,
  html_url,
  bio,
  public_repos,
  followers,
  joinedAt,
}) => {
  return (
    <>
      <div className="avatar-profile">
        <img src={avatar} alt="" />
        <h3>
          <a href={html_url} target="_blank" title="view profile"></a>
        </h3>
      </div>

      <p className="bio">{bio}</p>

      <div className="details-container">
        <div>
          <h4>Total Repos</h4>
          <p>{public_repos}</p>
        </div>

        <div>
          <h4>Followers</h4>
          <p>{followers}</p>
        </div>

        <div>
          <h4>Joined At</h4>
          <p>{joinedAt}</p>
        </div>
      </div>
    </>
  );
};
