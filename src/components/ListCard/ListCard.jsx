import PropTypes from "prop-types";
import JobOpeningCard from "../JobOpeningCard/JobOpeningCard";

const ListCard = ({ objects, type, delObject }) => {
  switch (type) {
    case "jobOpening":
      return (
        <>
          <div>
            {
              objects.jobOpenings.map((object) => (
                <JobOpeningCard key={object.id} jobOpening={object} delJobOpening={delObject} />
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
