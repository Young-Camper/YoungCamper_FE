import React, { useState} from 'react';
import * as S from "./style";
import styled from "styled-components";
import PropTypes from "prop-types";
import useMediaQueries from '../../hooks/useMediaQueries.jsx';

import Transportway from './transportway.jsx';



const TransportBox = ({
  title, children, index, onClick, isOpen
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  const { isDesktop } = useMediaQueries();

  return (
    <div style={{ width: '100%', maxWidth: '1004px', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', padding: isDesktop? '0 24px' : '0 0px' }}>
      <S.AccordionHeader onClick={onClick} isOpen={isOpen} index = {index} isDesktop = {isDesktop} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <S.HeaderContent>
          <S.Title isOpen = {isOpen} isDesktop = {isDesktop}  >{title}</S.Title>
          <S.IconContainer>
            <S.Icon>
              <img src = {isOpen || isHovered? `${mediaUrl}Location/button_open.png` : `${mediaUrl}Location/button.png` }/>
            </S.Icon>
          </S.IconContainer>
        </S.HeaderContent>
      </S.AccordionHeader>
      {isOpen && <S.AccordionContent isOpen={isOpen} index = {index} isDesktop = {isDesktop}>
        <S.ContentInner index = {index}>
          { (index === 0) &&  <S.Placeholder isDesktop = {isDesktop}></S.Placeholder>}
        </S.ContentInner>
        <S.DescriptionContainer index = {index}>
         { !(index === 1) && <S.Description index = {index}>{children}</S.Description> }
         { (index === 1) && <Transportway /> }
        </S.DescriptionContainer>
      </S.AccordionContent>}
    </div>
  );
};
TransportBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired, 
  isOpen: PropTypes.bool.isRequired, 
};

export default TransportBox;
