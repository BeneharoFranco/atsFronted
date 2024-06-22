
import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({users}) => {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <h2>
          {users.first_name} {users.last_name}
        </h2>
        <p>{users.role}</p>
      </div>
      <div className="user-card__body">
        <p>Email: {users.email}</p>
        <p>Phone: {users.phone}</p>
        {users.photo ? (
          <img
            src={users.photo}
            alt={`${users.first_name} ${users.last_name}`}
            className="user-card__photo"
          />
        ) : (
          <p>No Photo Available</p>
        )}
      </div>
      <div className="user-card__footer">
        <p>Status: {users.valid ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  users: PropTypes.object
  
};

export default UserCard;
