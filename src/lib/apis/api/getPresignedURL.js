import { API } from "../utils"; 

export const getPresignedUrl = async (fileName) => {
  try {
    const response = await API.get("/api/presigned", {
      params: { key: fileName },
      headers: {
        "Accept": "application/json", 
      },
    });
  return response.data.data;
  } catch (error) {
    throw error;
  }
};
