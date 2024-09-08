import { API } from "../utils";

export const getAdminCheck = async () => {
  try {
    const response = await API.get("/api/admincheck");
    console.log(response);
    return response;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};