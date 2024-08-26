import * as S from "./Style";
import { Link } from "react-router-dom";

const ShowList = () => {
  return (
    <S.ShowListWrapper>
      <Link to="/notification">
        <S.ShowListContainer>목록보기</S.ShowListContainer>
      </Link>
    </S.ShowListWrapper>
  );
};

export default ShowList;
