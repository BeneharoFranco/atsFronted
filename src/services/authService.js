import api from "./config";

const login = async (formData) => {
  try {
    const { data } = await api.post("auth/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(data.result !== null && data.role !== null){
    localStorage.setItem("token", data.result);
    localStorage.setItem("role", data.role);
    return data;

    } else {
      console.log("error");
    }

    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { login };
