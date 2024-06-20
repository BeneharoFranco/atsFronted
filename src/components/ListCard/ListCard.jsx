import PropTypes from "prop-types";
import JobOpening from "../JobOpening/JobOpening";

const ListCard = ({ objects, type, delObject }) => {
  switch (type) {
    case "jobOpening":
      return (
        <>
          <div>
            {
              objects.jobOpenings.map((object) => (
                <JobOpening key={object.id} jobOpening={object} delJobOpening={delObject} />
              ))
            }
          </div>
        </>
      );
      break;
    default:
      break;
  }
};

ListCard.propTypes = {
  objects: PropTypes.object,
  type: PropTypes.string,
  delObject: PropTypes.func,
};

export default ListCard;
