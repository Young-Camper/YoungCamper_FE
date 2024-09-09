import { API } from "../utils";

export const updateAnnouncement = async (id, requestBody) => {
  try {
    const response = await API.patch(`/api/announcements/${id}`, requestBody);
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
