import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: localStorage.getItem("language") || "ko",
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((nowLang) => {
        localStorage.setItem("language", nowLang); // 상태가 변경될 때 localStorage에 저장
      });
    },
  ],
});