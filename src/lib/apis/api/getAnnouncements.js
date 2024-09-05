import { API } from "../utils";

export const getAnnouncements = async () => {
  try {
    const response = await API.get("/api/announcements");
    // console.log(response.data);
    return response;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
