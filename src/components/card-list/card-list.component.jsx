import Card from "../card/card.component";
import "./card-list.styles.css";

/**
 * List all users
 */
const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </div>
  );
};

export default CardList;
