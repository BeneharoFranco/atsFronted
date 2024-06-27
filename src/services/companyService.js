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

const getCompany = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get(`/company/${id}`, {
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
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const createCompany = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.post(`/company/`, formData, {
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
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const editCompany = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.put(`/company/${id}`, formData, {
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
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteCompany = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.delete(`/company/${id}`, {
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
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { getAllCompany, getCompany, createCompany, editCompany, deleteCompany };
