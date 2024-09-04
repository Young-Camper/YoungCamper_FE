import { API } from "../utils";

export const adminLogin = async (id, pw) => {
  try {
    const response = await API.post("/api/admin/login", {
      id: id,
      pw: pw,
    });
    console.log("API success: ", response);
    return response;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
