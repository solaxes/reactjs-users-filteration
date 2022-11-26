import "./search-box.styles.css";

/**
 * Display search box for the users to filter records
 */
const SearchBox = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

export default SearchBox;
