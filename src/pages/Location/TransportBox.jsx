import React, { useState} from 'react';
import * as S from "./style";
import PropTypes from "prop-types";
// import useMediaQueries from "../../hooks/useMediaQueries";

import buttonImage from "../../assets/images/Location/button.png";
import kMap from "./kMap.jsx";



const TransportBox = ({
  title,children,index,activeIndex
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
      <S.AccordionHeader onClick={toggleAccordion} isOpen = {isOpen}>
        <S.HeaderContent>
          <S.Title isOpen = {isOpen} >{title}</S.Title>
          <S.IconContainer>
            <S.Icon>
              <img src = {buttonImage} />
            </S.Icon>
          </S.IconContainer>
        </S.HeaderContent>
      </S.AccordionHeader>
      {isOpen && <S.AccordionContent isOpen={isOpen} index = {index}>
        <S.ContentInner index = {index}>
          { index === 0 &&  <kMap></kMap> }
        </S.ContentInner>
        <S.Description>
          {children}
        </S.Description>
      </S.AccordionContent>}
    </div>
  );
};
TransportBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default TransportBox;