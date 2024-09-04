import { API } from "../utils";

export const fetchNoticeDetail = async (num) => {
  try {
    const response = await API.get(`/api/announcements/${num}`);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
