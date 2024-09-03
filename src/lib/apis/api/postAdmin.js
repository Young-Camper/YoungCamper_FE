import { API } from "../utils";

export const postAdmin = async (data) => {
  try {
    const response = await API.post(`/api/admin/`, {
      headers: {
        sessionId: ``, // 실제 세션 ID를 여기에 넣어야 함
      },
      data: {  // `data` 키를 사용하여 요청 본문에 데이터를 전달
        data: data
      },
    });
    console.log("API success: ", response);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
