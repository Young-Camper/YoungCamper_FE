// 콘솔은 API 연결 재 확인 후 모두 지울 예정입니다.

import { API } from "../utils"; 


export const getReviews = async (page = 0, size = 5, sort = 'createdAt,desc') => {
  try {
    const response = await API.get(`/api/review`, {
      params: {
        page,
        size,
        sort,
      },
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

    console.log("Server Response:", response.data);

    if (response.status === 200 && response.data.data) {
      return response.data.data; 
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
