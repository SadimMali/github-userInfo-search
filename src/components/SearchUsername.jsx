
export const SearchUsername = ({handleSearch, user, handleChange}) => {
    return (
      <form
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="username"
        id="userName"
        value={user}
        onChange={handleChange}
      />
      <button type="submit" value="search">
        Search
      </button>
    </form>
    )
  }
  