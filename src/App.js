import "./App.css";

import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render");
  /**
   * searchField is set to blank string, and setSearchField is function which is going to update
   * value of searchField, so whatever value will be passed to the setSearchField will be latest
   * value of searchField
   */
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFileteredUser] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newfilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFileteredUser(newfilteredUsers);
  }, [users, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">User Filteration with Functional Components</h1>
      <SearchBox
        className="user-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search users"
      />

      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;
