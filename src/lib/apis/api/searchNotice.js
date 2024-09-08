//공지사항 검색 api

import { API } from "../utils";

export const searchNotice = async (keyword, languageCode) => {
  try {
    const response = await API.get("/api/announcements/search", {
      params: { keyword: keyword },
      headers: {
        "Accept-Language": languageCode,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
