import * as S from "./Style";
import { Link } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";

const ShowList = () => {
  const { isDesktop } = useMediaQueries();

  return (
    <S.ShowListWrapper $isDesktop={isDesktop}>
      <Link to="/notification">
        <S.ShowListContainer $isDesktop={isDesktop}>
          목록보기
        </S.ShowListContainer>
      </Link>
    </S.ShowListWrapper>
  );
};

export default ShowList;
