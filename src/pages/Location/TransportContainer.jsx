import React, { useEffect, useRef, useState } from "react";
import TransportBox from "./TransportBox";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries.jsx";
import { useTranslation } from "react-i18next";

const TransportContainer = () => {
  const boxRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null); // 클릭된 아코디언의 인덱스를 저장

  const { isMobile } = useMediaQueries();
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // 같은 아코디언 클릭 시 닫기, 다른 아코디언 클릭 시 열기
  };

  useEffect(() => {
    if (activeIndex !== null && boxRefs.current[activeIndex]) {
      boxRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <div ref={(el) => (boxRefs.current[1] = el)} style={{ width: "100%" }}>
        <TransportBox
          title={t("location.public")}
          onClick={() => toggleAccordion(1)}
          isOpen={activeIndex === 1}
          index={1}
        >
          영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한
          축제입니다.
        </TransportBox>
      </div>
      <div ref={(el) => (boxRefs.current[2] = el)} style={{ width: "100%" }}>
        <TransportBox
          title={t("location.park")}
          onClick={() => toggleAccordion(2)}
          isOpen={activeIndex === 2}
          index={2}
        >
          {t("location.parkContent")}
        </TransportBox>
      </div>
    </>
  );
};

export default TransportContainer;
