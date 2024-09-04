import { API } from "../utils";

export const fetchNoticeList = async () => {
  try {
    const response = await API.get("/api/announcements");
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
