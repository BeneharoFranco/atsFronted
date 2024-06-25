import api from "./config";

const upload = async (formData) => {
  try {
    const result = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/* const getFiles = async () => {
  try {
    const result = await api.get("/files");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}; */

export default { upload/* , getFiles  */};
