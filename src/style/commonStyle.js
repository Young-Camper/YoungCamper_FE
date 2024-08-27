import styled from "styled-components";

// 메인 컨텐츠의 좌,우 170px / 상,하 100px 패딩을 정의합니다.
export const ContentWrapper = styled.div`
  /* padding: 100px 170px; */
  display: flex;
  width: 1100px;
  padding: var(--XXL, 100px) var(--Spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  /* 가운데 정렬 */
  margin: 0 auto;
`;
