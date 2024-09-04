import { API } from "../utils";

export const getAnnouncement = async (id) => {
  try {
    const response = await API.get(`/api/announcements/${id}`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};