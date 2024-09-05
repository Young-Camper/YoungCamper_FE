import styled from "styled-components";

// PC 1100px | Tablet 672px | Mobile 360px 초과시, 좌우 마진(중앙 정렬)
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* max-width 초과시, 가운데 정렬 */
  margin: 0 auto;

  /* 반응형 */
  max-width: 1100px;
  /* max-width: ${(props)=> 
  props.$isDesktop ? "1100px"
  : props.$isTablet ? "768px"
  : "360px"}; */

  padding: ${(props)=> 
  props.$isDesktop ? "100px 0px"
  : props.$isTablet ? "48px"
  : "50px 0"};

  gap: ${(props)=> props.$isIntro ?"64px":props.$isDesktop ? "100px": "50px"};
`;