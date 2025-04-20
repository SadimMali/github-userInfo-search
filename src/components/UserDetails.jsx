import { DetailItem } from "./DetailItem";

export const UserDetails = ({
  avatar,
  username,
  html_url,
  bio,
  public_repos,
  followers,
  joinedAt,
  isError,
}) => {
  if (isError) {
    return <p style={{ marginTop: "20px" }}>User not found</p>;
  }

  console.log(followers);

  return (
    <>
      <div className="avatar-profile p-2">
        {avatar && <img src={avatar} alt={`${username}'s avatar`} />}
        <h3>
          <a
            href={html_url}
            target="_blank"
            title="View profile"
          >
            {username}
          </a>
        </h3>
      </div>

      <p className="bio">{bio}</p>

      <div className="details-container d-flex gap-2">
        <DetailItem title="Total Repos" value={public_repos} />
        <DetailItem title="Followers" value={followers} />
        <DetailItem title="Joined At" value={joinedAt} />
      </div>
    </>
  );
};
