import PropTypes from "prop-types";
import JobOpeningCard from "../JobOpeningCard/JobOpeningCard";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ListCard = ({ objects, type, delObject }) => {
  switch (type) {
    case "jobOpening":
      return (
        <>
          <Grid2 container spacing={2} sx={{ width: "100%", height: "100%", padding: 2 }} >
            {
              objects.jobOpenings.map((object) => (
                <JobOpeningCard key={object.id} jobOpening={object} delJobOpening={delObject} />
              ))
            }
          </Grid2>
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
