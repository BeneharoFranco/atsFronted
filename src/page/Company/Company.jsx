import "./Company.css";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import { getAllCompany } from "../../services/companyService";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Company = () => {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [del, setDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedCanId, setSelectedCanId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result } = await getAllCompany();
        if (!result || result.length === 0) {
          setAlert(true);
        } else {
          setList(result);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        setAlert(true);
      }
    };
    fetchData();
  }, [del]);

  const handleEditOpen = (canId) => {
    setSelectedCanId(canId);
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setSelectedCanId(null);
    setOpenEdit(false);
  };

  const handleUpdate = () => {
    setDel(!del);
  };

  return (
    <>
      <Grid2
        minHeight={"85vh"}
        container
        spacing={3}
        width={"100%"}
        sx={{ flexGrow: "1" }}
      >
        <Grid2
          container
          xs={12}
          spacing={3}
          sx={{
            width: "100%",
            height: "100%",
            padding: 2,
            flexGrow: "1",
            alignContent: "flex-start",
          }}
        >
          {list.map((data) => (
            <CompanyCard
              key={data.id}
              company={data}
              setList={setList}
              setDel={setDel}
              onEdit={handleEditOpen}
            />
          ))}
        </Grid2>
      </Grid2>
    </>
    // <div>
    //   {alert ? (
    //     <Alert severity="error">Error fetching Candidates</Alert>
    //   ) : (
    //     list.map((data) => (
    //       <CompanyCard
    //         key={data.id}
    //         candidate={data}
    //         setList={setList}
    //         setDel={setDel}
    //         onEdit={handleEditOpen}
    //       />
    //     ))
    //   )}
    //   {/* Componente para editar */}
    //   {/* <UserEdit
    //     open={openEdit}
    //     handleClose={handleEditClose}
    //     canId={selectedCanId}
    //     onUpdate={handleUpdate}
    //   /> */}
    // </div>
  );
};

export default Company;
