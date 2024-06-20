import api from "./config";

const getAllCompany = async () => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get("/company/", {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Company empty or error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error fetching company:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};


export { getAllCompany };
