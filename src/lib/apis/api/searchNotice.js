//공지사항 검색 api

import { API } from "../utils";

export const searchNotice = async (keyword) => {
  try {
    const response = await API.get("/api/announcements/search", {
      params: { keyword: keyword },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
