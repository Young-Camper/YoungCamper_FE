import { API } from "../utils";

export const deleteAnnouncements = async (ids) => {
  try {
    const response = await API.delete(`/api/announcements`, {
      data: { ids: ids },
    });
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
