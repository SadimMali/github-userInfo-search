export const SearchUsername = ({ handleSearch, user, handleChange }) => {
  return (
    <form onSubmit={handleSearch} className="d-flex gap-20 p-2">
      <input
        type="text"
        name="username"
        id="userName"
        placeholder="GitHub username"
        value={user}
        onChange={handleChange}
        style={{color: 'white'}}
      />
      <button type="submit" value="search">
        Search
      </button>
    </form>
  );
};
