import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props);
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
