
import { useState } from 'react';
import useMediaQueries from "../../hooks/useMediaQueries";
import * as S from "./style";

const Nav = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    // 언어 변경 로직 추가
  };

  const [modalOpen, setModalOpen] = useState(false);

  //이미지
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <>
    {isDesktop && 
      <S.Wrapper>
      <S.Container>
        <S.FlexContainer>
          <S.StyledLink to={"/"}>
            {isChecked ? (<S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />) 
            : (<S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />)}
          </S.StyledLink>
          <S.StyledLink to={"/notification"}>공지</S.StyledLink>
          <S.StyledLink to={"/promotion"}>동아리</S.StyledLink>
          <S.StyledLink to={"/performance"}>공연일정</S.StyledLink>
          <S.StyledLink to={"/location"}>장소</S.StyledLink>
          <S.StyledLink to={"/review"}>후기</S.StyledLink>
          <S.StyledLink to={"/FAQ"}>FAQ</S.StyledLink>
          <S.StyledLink to={"/about"}>기획단</S.StyledLink>
          <S.LangToggleWrapper>
            <S.CheckBox type="checkbox" checked={isChecked} onChange={handleToggle} />
            <S.LangSlider>
              <S.ToggleCircle />
            </S.LangSlider>
          </S.LangToggleWrapper>
      </S.FlexContainer>
    </S.Container>
    </S.Wrapper> }
    {isTablet && 
      <S.Wrapper>
      </S.Wrapper>
    }
    
    {isMobile && 
    <S.Wrapper>
    <S.Container>
      <S.FlexContainer>
        {modalOpen && (
          <S.SideNav>
            <S.NavMobile>
              <S.Header>
                <S.HeaderContent>
                  <S.MenubarOpened menubar={`${mediaUrl}Nav/Menubar.png`} onClick={() => setModalOpen(false)} />
                  <S.LogoWrapper>
                    <S.StyledLink to={"/"} onClick={() => setModalOpen(false)}>
                      {isChecked ? (<S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />) 
                        : (<S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />)}
                    </S.StyledLink>
                  </S.LogoWrapper>
                  <S.ModalCloseBtn closeicon={`${mediaUrl}Nav/CloseIcon.png`} onClick={()=> setModalOpen(false)}/>
                </S.HeaderContent>
              </S.Header>
              <S.SideNavLinks>
                <S.SideNavSet>
                  <S.SideNavLink>
                    <S.StyledLink to={"/notification"} onClick={()=> setModalOpen(false)}>공지</S.StyledLink>     
                  </S.SideNavLink>
                  <S.SideNavLink>
                    <S.StyledLink to={"/promotion"} onClick={()=> setModalOpen(false)}>
                      <img src={`${mediaUrl}Nav/SideNav.png`} width={'44px'} height={'44px'}/>
                      동아리
                      <img src={`${mediaUrl}Nav/SideNav.png`} width={'44px'} height={'44px'}/>
                    </S.StyledLink>
                  </S.SideNavLink>
                  <S.SideNavLink>
                    <S.StyledLink to={"/location"} onClick={()=> setModalOpen(false)}>장소</S.StyledLink>
                  </S.SideNavLink>
                  <S.SideNavLink>
                    <S.StyledLink to={"/review"} onClick={()=> setModalOpen(false)}>후기</S.StyledLink>
                  </S.SideNavLink>
                  <S.SideNavLink>
                    <S.StyledLink to={"/FAQ"} onClick={()=> setModalOpen(false)}>FAQ</S.StyledLink>
                  </S.SideNavLink>
                  <S.SideNavLink>
                  <S.StyledLink to={"/about"} onClick={()=> setModalOpen(false)}>기획단</S.StyledLink>
                  </S.SideNavLink>
                </S.SideNavSet>
              </S.SideNavLinks>
              <S.SideNavEtc>
                <S.SideNavLang>
                  <S.SideNavLangBtn>
                    
                    {/* 언어변경, isChecked 상태를 변경시키고 싶은데 어케해야할까요 */}
                    
                    <S.SideNavLangText onClick={()=> isChecked(false)}>한국어</S.SideNavLangText>
                    <S.SideNavLangText onClick={()=> isChecked(true)}>ENG</S.SideNavLangText>
                  </S.SideNavLangBtn>
                </S.SideNavLang>
                <S.SideNavSNS>
                  <S.SideNavIconContainer>
                    {/* 인스타 */}
                    <a href="https://www.instagram.com/youngcamp_dgu" target="_blank" rel="noopener noreferrer">  
                      <S.SideNavSnsIcon icon = {`${mediaUrl}Nav/Instagram.png`} />  
                    </a>  
                    {/* 유튜브 */}
                    <a href="https://www.youtube.com/@youngcamp_dgu" target="_blank" rel="noopener noreferrer">  
                      <S.SideNavSnsIcon icon = {`${mediaUrl}Nav/Youtube.png`} />  
                    </a>      
                  </S.SideNavIconContainer>
                </S.SideNavSNS>
              </S.SideNavEtc>
            </S.NavMobile>
          </S.SideNav>
        )}
        <S.StyledLink to={"/"}>
          {isChecked ? (<S.LogoEn src={`${mediaUrl}Nav/Logo_en.png`} alt="Logo_en" />) 
          : (<S.LogoKr src={`${mediaUrl}Nav/Logo_kr.png`} alt="Logo_kr" />)}
        </S.StyledLink>
        <S.MenubarContainer>
          <S.MenubarWrapper>
            <S.Menubar menubar={`${mediaUrl}Nav/Menubar.png`} onClick={() => setModalOpen(true)} />
          </S.MenubarWrapper>
        </S.MenubarContainer>
      </S.FlexContainer>
    </S.Container>
    </S.Wrapper>
      }

    </>
  );
};

export default Nav;
