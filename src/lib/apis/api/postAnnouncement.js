import { API } from "../utils";

export const postAnnouncement = async (
  title,
  content,
  imageUrl,
  fileUrl,
  isPinned) => {
  try {
    const response = await API.post("/api/announcements", {
        title: title,
        content:content,
        imageUrl:imageUrl,
        fileUrl:fileUrl,
        isPinned:isPinned
    });
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
