import { API } from "../utils";

export const getAdmin = async () => {
  try {
    const response = await API.delete(`/api/admin/`, {
      headers: {
        sessionId: ``, // 실제 세션 ID를 여기에 넣어야 함
      }
    });
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
