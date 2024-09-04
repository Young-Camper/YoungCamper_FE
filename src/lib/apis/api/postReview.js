import { API } from "../utils"; 

/**
 * 새 리뷰를 등록하는 함수
 * @param {Object} reviewData - 리뷰 데이터
 * @param {string} reviewData.password - 리뷰에 대한 비밀번호
 * @param {string} reviewData.content - 리뷰 내용
 * @param {Array<string>} reviewData.imageUrls - 이미지 URL 목록
 * @returns {Promise<Object>} - 서버 응답 데이터
 */
export const postReview = async (reviewData) => {
  try {
    // 요청 데이터 확인
    console.log("Sending review data:", reviewData); 
    const response = await API.post(`/api/review`, reviewData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

    // 서버 응답 확인
    console.log("Review created:", response.data);

    // 성공적인 응답이 있는 경우 데이터 반환
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating review:", error);

    // 서버의 에러 메시지를 확인하여 구체적인 원인을 파악
    if (error.response && error.response.data) {
      console.error("Server error response:", error.response.data);
    }

    throw error;
  }
};
