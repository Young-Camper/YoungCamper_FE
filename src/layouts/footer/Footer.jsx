import * as S from "./style";
import logo_kr from "../../assets/images/Nav/Logo_kr.png";
import Instagram from "../../assets/images/Footer/Instagram.png";
import Youtube from "../../assets/images/Footer/Youtube.png";
import useMediaQueries from "../../hooks/useMediaQueries";

const Footer = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  return (
    <S.MainContainer $isDesktop={isDesktop}>
      <S.Divider/>
      {isDesktop &&
      <S.Container>
        <S.Main>
          <S.Navigation>
            <S.Logo>
              <img src={logo_kr} alt="Logo_kr" />
            </S.Logo>
          </S.Navigation>
          <S.Section>
            <S.List>동국대학교 영캠퍼</S.List>
            <S.List>서울시 중구 필동로 1길 30 동국대학교</S.List>
            <S.Section>
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
          <S.Content> © DGU Youngcamper. All rights reserved</S.Content>
          <S.Action>
            <S.IconContainer>
              <S.Icon src={Instagram} width={19.5} height={19.5} left={3.25} top={3.51}/>
            </S.IconContainer>
            <S.IconContainer>
              <S.Icon src={Youtube} width={21.68} height={15.18} left={2.15} top={5.42}/>
            </S.IconContainer>
          </S.Action>
        </S.Sub>
      </S.Container>
      }

      {isTablet && 
      <S.Container>
      <S.Main>
        <S.Navigation>
          <S.Logo>
            <img src={logo_kr} alt="Logo_kr" />
          </S.Logo>
        </S.Navigation>
        <S.Section>
          <S.List>동국대학교 영캠퍼</S.List>
          <S.List>서울시 중구 필동로 1길 30 동국대학교</S.List>
          <S.Section>
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
        <S.Content> © DGU Youngcamper. All rights reserved</S.Content>
        <S.Action>
          <S.IconContainer>
            <S.Icon src={Instagram} width={19.5} height={19.5} left={3.25} top={3.51}/>
          </S.IconContainer>
          <S.IconContainer>
            {/* <S.Icon src={Youtube} width={21.68} height={15.18} left={2.15} top={5.42}/> */}
          </S.IconContainer>
        </S.Action>
      </S.Sub>
    </S.Container> 
      }
      {isMobile && 
      <S.Container>
        <S.Main>
          <S.Navigation>
            <S.Logo>
              <img src={logo_kr} alt="Logo_kr" />
            </S.Logo>
          </S.Navigation>
          <S.Section>
            <S.List>동국대학교 영캠퍼</S.List>
            <S.List>서울시 중구 필동로 1길 30 동국대학교</S.List>
            <S.Section>
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
          <S.Content> © DGU Youngcamper. All rights reserved</S.Content>
          <S.Action>
            <S.IconContainer>
              <S.Icon src={Instagram} width={19.5} height={19.5} left={3.25} top={3.51}/>
            </S.IconContainer>
            <S.IconContainer>
              {/* <S.Icon src={Youtube} width={21.68} height={15.18} left={2.15} top={5.42}/> */}
            </S.IconContainer>
          </S.Action>
        </S.Sub>
      </S.Container> 
      }

    </S.MainContainer>
    
  );
};

export default Footer;
