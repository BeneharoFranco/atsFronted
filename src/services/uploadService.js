import api from "./config";

const upload = async (formData)=>{
  try {
    const result = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}