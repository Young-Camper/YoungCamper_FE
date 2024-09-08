import React from "react";
import * as S from "../style";
import clubData from "../../../data/clubData.json";
import { useTranslation } from "react-i18next";
import useMediaQueries from "../../../hooks/useMediaQueries";

const ClubModal = ({ setModalOpen, id }) => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL; // 환경 변수에서 AWS S3 URL 가져오기
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  const clubId = parseInt(id, 10);
  const club = clubData.find((club) => club.id === clubId);
  const { t } = useTranslation();

  // club.applylink이 있는지 확인
  const applyLinkText = club.applylink ? (
    <a href={club.applylink} target="_blank" rel="noopener noreferrer">
      {club.applylink}
    </a>
  ) : (
    <p>{t(`club.recruit`)}</p>
  );

  return (
    <S.ModalContainer onClick={handleCloseModal}>
      <S.Modal $isMobile={isMobile}>
        <S.ModalCloseBtn $isMobile={isMobile} onClick={() => setModalOpen(false)}>
          <img src={`${mediaUrl}Promotion/close.png`} alt="Close" />
        </S.ModalCloseBtn>
        <S.ModalText $isMobile={isMobile}>{t("club.modalTitle")}</S.ModalText>
        <S.Separator $isMobile={isMobile}/>
        <S.ModalFooter>
          <S.QaApply $isMobile={isMobile} >{t("club.modalsub")}</S.QaApply>
          <S.ApplyLinkSize $isMobile={isMobile}>
            <a href={club.applylink} target="_blank" rel="noopener noreferrer">
              {t("club.goLink")}
            </a>
          </S.ApplyLinkSize>
        </S.ModalFooter>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default ClubModal;
