import { api } from "./config";

export const getAllUsers = async () => {
  try {
    const { result } = await api.get("/user/");

    if (!result) {
      return console.log("Users empty or error");
    }
    return result;
  } catch (error) {
    console.error(error);
  }
};

