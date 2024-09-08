import { API } from "../utils";

export const getAnnouncements = async (languageCode) => {
  try {
    const response = await API.get("/api/announcements", {
      headers: {
        "Accept-Language": languageCode,
      },
    });
    // console.log(response);
    return response;
  } catch (error) {
    // console.error("API error: ", error);
    throw error;
  }
};
