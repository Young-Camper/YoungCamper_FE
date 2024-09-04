// 콘솔은 API 연결 완료 후 모두 지울 예정입니다.

import { API } from "../utils"; 

export const getPresignedUrl = async (fileName) => {
  try {
    // 1. PresignedUrl get 전 filename 확인
    console.log("Requesting presigned URL for:", fileName);

    // presigned URL 요청
    const response = await API.get("/api/presigned", {
      params: { key: fileName },
      headers: {
        "Accept": "application/json", 
      },
    });

    // 2. 서버 응답 확인
    console.log("Server Response:", response.data);

    // 3. 서버 응답에서 presignedUrl과 fileName 확인
    if (response.data && response.data.data) {
      console.log("Presigned URL:", response.data.data.presignedUrl);
      console.log("File Name:", response.data.data.fileName);
      return response.data.data;
    } else {
      throw new Error("Invalid response structure: " + JSON.stringify(response.data));
    }
  } catch (error) {
    console.error("Error fetching presigned URL: ", error);
    throw error;
  }
};
