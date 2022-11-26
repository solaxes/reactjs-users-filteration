import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

/**
 * List all users
 */
class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-list">
        {users.map((user) => {
          return <Card user={user} />;
        })}
      </div>
    );
  }
}

export default CardList;
