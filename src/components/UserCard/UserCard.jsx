
import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({
  id,
  first_name,
  last_name,
  role,
  email,
  phone,
  photo,
  valid,
}) => {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <h2>
          {first_name} {last_name}
        </h2>
        <p>{role}</p>
      </div>
      <div className="user-card__body">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        {photo ? (
          <img
            src={photo}
            alt={`${first_name} ${last_name}`}
            className="user-card__photo"
          />
        ) : (
          <p>No Photo Available</p>
        )}
      </div>
      <div className="user-card__footer">
        <p>Status: {valid ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string,
  valid: PropTypes.bool.isRequired,
};

export default UserCard;
