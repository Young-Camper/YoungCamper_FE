import { useCallback, useRef } from "react";

export function useBodyScrollLock() {
  const scrollPosition = useRef(0); // scrollPosition을 useRef로 관리

  const lockScroll = useCallback(() => {
    // for IOS safari
    scrollPosition.current = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.current}px`; // 백틱(``)으로 감싸고 템플릿 리터럴 사용
    document.body.style.width = "100%";
  }, []);

  const openScroll = useCallback(() => {
    // for IOS safari
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition.current); // scrollPosition 복원
  }, []);

  return { lockScroll, openScroll };
}
