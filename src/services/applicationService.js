import api from "./config";

const getAllApplication = async () => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get("/application/", {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Application empty or error");
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

const getApplication = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get(`/application/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Application empty or error");
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

const createApplication = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.post(`/application/`, formData, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Application empty or error");
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


export { getAllApplication, getApplication, createApplication };
