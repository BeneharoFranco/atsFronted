import api from "./config";

const getAllUsers = async () => {
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

const getOneUser = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await api.get(`/user/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Users empty or error");
      return null;
    }
    return data.result;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const createOneUser = async (formData) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await api.post(`/user/`, formData, {
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
      "Error creating users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const editOneUser = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await api.put(`/user/${id}`, formData, {
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
      "Error editing user:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteOneUser = async (id) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await api.delete(`/user/${id}`, {
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
      "Error creating users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export { getAllUsers, getOneUser, createOneUser, editOneUser, deleteOneUser };
