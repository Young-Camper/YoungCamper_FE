import { API } from "../utils";

export const postAnnouncement = async (
  imageUrl,
  fileUrl,
  isPinned,
  koContent,
  enContent,
  koTitle, 
  enTitle
) => {
  try {
    const response = await API.post("/api/announcements", {
      imageUrl:imageUrl,
      fileUrl:fileUrl,
      isPinned:isPinned,
      contents:[{
        languageCode: "ko",
        title: koTitle,
        content: koContent
      },{
        languageCode: "en",
        title: enTitle,
        content: enContent
      },]
    });
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
