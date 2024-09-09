import { API } from "../utils";

export const postAnnouncement = async (requestBody) => {
  try {
    // API 요청
    const response = await API.post("/api/announcements", requestBody);
    console.log("API success: ", response);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error("API error: ", error);
    throw error; // 에러 발생 시 처리
  }
};
