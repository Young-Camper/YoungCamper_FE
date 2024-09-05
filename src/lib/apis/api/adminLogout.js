import { API } from "../utils";

export const adminLogout = async () => {
  try {
    const response = await API.get("/api/admin/logout");
    return response;
  } catch (error) {
    throw error;
  }
};
