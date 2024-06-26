import api from "./config";

const getAllJobOpening = async () => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get("/jobOpening/", {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

const getJobOpening = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get(`/jobOpening/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

const getAllApplicationByJobOpening = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get(`/jobOpening/${id}/application`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

const createJobOpening = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.post(`/jobOpening/`, formData, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

const editJobOpening = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.put(`/jobOpening/${id}`, formData, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

const deleteJobOpening = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.delete(`/jobOpening/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("JobOpening empty or error");
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

export { getAllJobOpening, getJobOpening, getAllApplicationByJobOpening, createJobOpening, editJobOpening, deleteJobOpening };
