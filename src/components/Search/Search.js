import "./Search.css";

const Search = ({ type, setSearch, updatePageNumber }) => {
  const searchBtn = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search">
      <input
        className="search__input"
        onChange={(event) => {
          updatePageNumber(1);
          setSearch(event.target.value);
        }}
        placeholder={`Search by ${type}`}
        type="text"
      />
      <button className="search__button" onClick={searchBtn}>
        Search
      </button>
    </form>
  );
};

export default Search;
