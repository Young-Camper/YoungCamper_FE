import { API } from "../utils"; 

export const deleteReview = async (reviewId, password) => {
  try {
    const response = await API.delete(`/api/review/${reviewId}`, {
      data: { password }, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate', 
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    return response.data;
    } catch (error) {
    throw error;
  }
};
