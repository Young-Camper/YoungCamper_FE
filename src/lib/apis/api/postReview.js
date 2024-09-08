import { API } from "../utils"; 

export const postReview = async (reviewData) => {
  try {
    const response = await API.post(`/api/review`, reviewData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    return response.data.data;
  }catch (error) {
    throw error;
  }
};
