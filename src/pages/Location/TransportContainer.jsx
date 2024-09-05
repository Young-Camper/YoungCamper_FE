import React, { useState } from 'react';
import TransportBox from "./TransportBox";
import * as S from "./style";


import useMediaQueries from '../../hooks/useMediaQueries.jsx';

const TransportContainer = () => {


  const [activeIndex, setActiveIndex] = useState(null);
  
  const{ isMobile } = useMediaQueries();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <>
      <TransportBox
        title="페스티벌 위치지도"
        onClick={() => toggleAccordion(0)}
        isOpen={activeIndex === 0}
        index={0} // index prop 추가
      >
        영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다.
      </TransportBox>
      <TransportBox
        title="대중교통 오시는 길"
        onClick={() => toggleAccordion(1)}
        isOpen={activeIndex === 1}
        index={1} // index prop 추가
      >
         영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 
      </TransportBox>
      <TransportBox
        title="주차 안내"
        onClick={() => toggleAccordion(2)}
        isOpen={activeIndex === 2}
        index={2} // index prop 추가
      >
         영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한 축제입니다. 
      </TransportBox>
    </>
  );
};

export default TransportContainer