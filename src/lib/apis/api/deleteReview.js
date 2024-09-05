import { API } from "../utils"; 

export const deleteReview = async (reviewId, password) => {
  try {
    // DELETE 요청을 보낼 때, URL 경로에 리뷰의 ID를 포함
    const response = await API.delete(`/api/review/${reviewId}`, {
      data: { password }, // 요청 본문에 비밀번호 포함
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate', // 최신 데이터 요청
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

   

    // 성공적인 응답이 있는 경우 데이터 반환
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};
