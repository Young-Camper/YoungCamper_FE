import React, { useState, useRef } from "react";
import TransportBox from "./TransportBox";
import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries.jsx";
import { useTranslation } from "react-i18next";

const TransportContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null); 
  const { t } = useTranslation();

  const publicRef = useRef(null);
  const parkRef = useRef(null);
  

  const toggleAccordion = (index, ref) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      
    } else {
      setActiveIndex(null);
    
    }
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
      <TransportBox
        ref={publicRef} 
        title={t("location.public")}
        onClick={() => toggleAccordion(1, publicRef)}
        isOpen={activeIndex === 1}
        index={1}
      >
      </TransportBox>
      <TransportBox
        ref={parkRef} 
        title={t("location.park")}
        onClick={() => toggleAccordion(2, parkRef)}
        isOpen={activeIndex === 2}
        index={2}
      >
        {t("location.parkContent")}
      </TransportBox>

    </>
  );
};

export default TransportContainer;
