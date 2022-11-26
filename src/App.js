import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
    };
  }

  // fetch users and populate in users array when component is mounted
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetchedUsers) =>
        this.setState(() => {
          return { users: fetchedUsers };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="user-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search users"
        />

        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
