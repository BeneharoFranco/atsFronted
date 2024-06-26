import PropTypes from "prop-types";
import JobOpeningCard from "../JobOpeningCard/JobOpeningCard";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserCard from "../UserCard/UserCard";

const ListCard = ({ objects, type, delObject, editObject, setCharge, showApplications }) => {
  switch (type) {
    case "jobOpening":
      return (
        <>
          <Grid2 container spacing={3} xs={12} sx={{ width: "100%", height: "100%", padding: 2, flexGrow: "1", alignContent: "flex-start"}} >
            {objects.jobOpenings.map((object) => (
              <JobOpeningCard
                key={object.id}
                jobOpening={object}
                delJobOpening={delObject}
                setCharge={setCharge}
                edit={editObject}
                showApplications={showApplications}
              />
            ))}
          </Grid2>
        </>
      );
      break;
    // case "user":
    //   return (
    //     <>
    //       <Grid2
    //         container
    //         spacing={2}
    //         sx={{ width: "100%", height: "100%", padding: 2 }}
    //       >
    //         {objects.jobOpenings.map((object) => (
    //           <UserCard
    //             key={object.id}
    //             users={object}
    //             setDel={delObject}
    //             onEdit={editObject}
    //           />
    //         ))}
    //       </Grid2>
    //     </>
    //   );
    //   break;
    default:
      break;
  }
};

ListCard.propTypes = {
  objects: PropTypes.object,
  type: PropTypes.string,
  delObject: PropTypes.func,
  editObject: PropTypes.func,
  setCharge: PropTypes.func,
  showApplications: PropTypes.func,
};

export default ListCard;
