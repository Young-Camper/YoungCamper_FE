// lib/apis/api/presignedURL.js
import { API } from "../utils"; // Axios 인스턴스 임포트

export const getPresignedUrl = async (fileName) => {
  try {
    // 서버에 presigned URL을 요청하며 캐시 무시 설정
    const response = await API.get("/api/presigned", {
      params: { key: fileName },
      headers: {
        "Cache-Control": "no-cache", // 항상 최신 데이터 요청
        "Accept": "application/json", // 응답 형식 설정
      },
    });

    // 서버 응답 확인
    console.log("Server Response:", response.data);

    // 서버 응답에서 presignedUrl과 fileName을 반환
    return response.data.data; // 서버가 올바른 형식으로 응답했는지 확인
  } catch (error) {
    console.error("Error fetching presigned URL: ", error);
    throw error;
  }
};
