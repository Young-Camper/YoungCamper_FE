import * as S from "./Style";
import { Link } from "react-router-dom";
import useMediaQueries from "../../../hooks/useMediaQueries";
import { useTranslation } from "react-i18next";

const ShowList = () => {
  const { isDesktop } = useMediaQueries();
  const { t } = useTranslation();

  return (
    <S.ShowListWrapper $isDesktop={isDesktop}>
      <Link to="/notification">
        <S.ShowListContainer $isDesktop={isDesktop}>
          {t("notice.list")}
        </S.ShowListContainer>
      </Link>
    </S.ShowListWrapper>
  );
};

export default ShowList;
