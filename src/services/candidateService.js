import api from "./config";

const getAllCandidates = async () => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get("/candidate/", {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("candidates empty or error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error fetching candidates:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const getOneCandidate = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.get(`/candidate/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("candidate not found or error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error fetching candidate:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const createCandidate = async (formData) => {
  try {
    // const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.post(`/candidate/`, formData, {
      /* headers: {
        Authorization: `${token}`,
      }, */
    });

    if (!data || data.length === 0) {
      console.log(" create candidate error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error creating candidate:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const editCandidate = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.put(`/jobOpening/${id}`, formData, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("Candidate not found or error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error updating candidate:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteCandidate = async (id) => {
  try {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");

    const { data } = await api.delete(`/candidate/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!data || data.length === 0) {
      console.log("candidate not found or error");
      return null;
    }

    return data;
  } catch (error) {
    console.error(
      "Error deleting candidate:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export {getAllCandidates, getOneCandidate, createCandidate, editCandidate, deleteCandidate}
