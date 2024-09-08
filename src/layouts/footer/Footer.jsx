import * as S from "./style";
import useMediaQueries from "../../hooks/useMediaQueries";
import { useRecoilState } from "recoil";
import { languageState } from "../../context/recoil/languageState";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  const [lang, setLang] = useRecoilState(languageState);
  const isEnglish = lang === "en";
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoSrc = `${mediaUrl}Nav/Logo_${isEnglish ? "en" : "kr"}.png`;

  return (
    <S.MainContainer $isDesktop={isDesktop}>
      {isDesktop && (
        <S.Container $isDesktop={isDesktop}>
          <S.Main>
            <S.Navigation>
              <S.StyledLink to={"/"} onClick={scrollToTop}>
                <S.Logo $isDesktop={isDesktop}>
                  <img src={logoSrc} alt="Logo_kr" />
                </S.Logo>
              </S.StyledLink>
            </S.Navigation>
            <S.Section $isDesktop={isDesktop}>
              <S.List>{t("footer.title")}</S.List>
              <S.List>{t("footer.location")}</S.List>
              <S.Section $isDesktop={isDesktop}>
                <S.ContactInfoContainer>
                  <S.ContactInfoRow>
                    <S.ContactLabel>email</S.ContactLabel>
                    <S.ContactText>youngcamp.dgu@gmail.com</S.ContactText>
                  </S.ContactInfoRow>
                  <S.ContactInfoRow>
                    <S.ContactLabel>contact</S.ContactLabel>
                    <S.ContactText>02-2260-3114</S.ContactText>
                  </S.ContactInfoRow>
                </S.ContactInfoContainer>
              </S.Section>
            </S.Section>
          </S.Main>
          <S.Sub>
            <S.Content> © 학생기획위원단. All rights reserved</S.Content>
            <S.Action>
              <a
                href="https://www.instagram.com/youngcamp_dgu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconContainer>
                  <S.Icon src={`${mediaUrl}Footer/Instagram.png`} />
                </S.IconContainer>
              </a>

              <a
                href="https://www.youtube.com/@youngcamp_dgu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconContainer>
                  <S.Icon src={`${mediaUrl}Footer/Youtube.png`} />
                </S.IconContainer>
              </a>
            </S.Action>
          </S.Sub>
        </S.Container>
      )}
      {(isMobile || isTablet) && (
        <S.Container $isDesktop={isDesktop}>
          <S.Main>
            <S.Navigation>
              <S.StyledLink to={"/"} onClick={scrollToTop}>
                <S.Logo $isDesktop={isDesktop}>
                  <img src={logoSrc} alt="Logo_kr" />
                </S.Logo>
              </S.StyledLink>
            </S.Navigation>
            <S.Section $isDesktop={isDesktop}>
              <S.List>{t("footer.title")}</S.List>
              <S.List>{t("footer.location")}</S.List>
              <S.Section $isDesktop={isDesktop}>
                <S.ContactInfoContainer>
                  <S.ContactInfoRow>
                    <S.ContactLabel>email</S.ContactLabel>
                    <S.ContactText>youngcamp.dgu@gmail.com</S.ContactText>
                  </S.ContactInfoRow>
                  <S.ContactInfoRow>
                    <S.ContactLabel>contact</S.ContactLabel>
                    <S.ContactText>02-2260-3114</S.ContactText>
                  </S.ContactInfoRow>
                </S.ContactInfoContainer>
              </S.Section>
            </S.Section>
          </S.Main>
          <S.Sub>
            <S.Content> © 학생기획위원단. All rights reserved</S.Content>
            <S.Action>
              <a
                href="https://www.instagram.com/youngcamp_dgu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconContainer>
                  <S.Icon src={`${mediaUrl}Footer/Instagram.png`} />
                </S.IconContainer>
              </a>

              <a
                href="https://www.youtube.com/@youngcamp_dgu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconContainer>
                  <S.Icon src={`${mediaUrl}Footer/Youtube.png`} />
                </S.IconContainer>
              </a>
            </S.Action>
          </S.Sub>
        </S.Container>
      )}
    </S.MainContainer>
  );
};

export default Footer;
