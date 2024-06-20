import api from "./config";

const getAllUsers = async () => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
 
  try {
    const token = localStorage.getItem("token");
    
    
    const { data } = await api.get("/user/", {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Users empty or error");
      return null;
    }
    return data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { getAllUsers };
