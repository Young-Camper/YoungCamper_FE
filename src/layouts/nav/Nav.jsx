import logo_kr from "../../assets/images/Nav/Logo_kr.png";
import logo_en from "../../assets/images/Nav/Logo_en.png";
import { useState } from 'react';
import useMediaQueries from "../../hooks/useMediaQueries";
import menubar from "../../assets/images/Nav/Menubar.png";
import closeicon from "../../assets/images/Nav/CloseIcon.png";
import * as S from "./style";

const Nav = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    // 언어 변경 로직 추가
    
  };
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    {isDesktop && 
      <S.Wrapper>
      <S.Container>
        <S.FlexContainer>
          <S.StyledLink to={"/"}>
            {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
            : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)}
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
      <S.Container>
        <S.FlexContainer>
          {modalOpen && (
            <S.ModalContainer>
              <S.Modal>
                <S.FlexContainer>
                {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
                  : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)} 
                  <S.ModalCloseBtn closeicon={closeicon} onClick={()=> setModalOpen(false)}/>
                </S.FlexContainer>
                <S.SideNavWrapper>
                  <S.SideNav1111>
                    <S.StyledLink to={"/notification"} onClick={()=> setModalOpen(false)}>공지</S.StyledLink>     
                  </S.SideNav1111>
                  <S.SideNav1111>
                    <S.StyledLink to={"/promotion"} onClick={()=> setModalOpen(false)}>동아리</S.StyledLink>
                  </S.SideNav1111>
                  <S.SideNav1111>
                    <S.StyledLink to={"/location"} onClick={()=> setModalOpen(false)}>장소</S.StyledLink>
                  </S.SideNav1111>
                  <S.SideNav1111>
                    <S.StyledLink to={"/review"} onClick={()=> setModalOpen(false)}>후기</S.StyledLink>
                  </S.SideNav1111>
                  <S.SideNav1111>
                    <S.StyledLink to={"/FAQ"} onClick={()=> setModalOpen(false)}>FAQ</S.StyledLink>
                  </S.SideNav1111>
                  <S.SideNav1111>
                  <S.StyledLink to={"/about"} onClick={()=> setModalOpen(false)}>기획단</S.StyledLink>
                  </S.SideNav1111>
                </S.SideNavWrapper>
              </S.Modal>
            </S.ModalContainer>
          )}
          {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
            : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)}
          <S.MenubarContainer>
            <S.MenubarWrapper>
              <S.Menubar menubar={menubar} onClick={() => setModalOpen(true)} />
            </S.MenubarWrapper>
          </S.MenubarContainer>
        </S.FlexContainer>
      </S.Container>
  </S.Wrapper>}
    
    {isMobile && 
    <S.Wrapper>
    <S.Container>
      <S.FlexContainer>
        {modalOpen && (
          <S.SideNav>
            <S.NavMobile>
              <S.Header>
                <S.HeaderContent>
                  <S.MenubarOpened menubar={menubar} onClick={() => setModalOpen(false)} />
                  <S.LogoWrapper>
                    {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
                      : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)}
                  </S.LogoWrapper>
                  <S.ModalCloseBtn closeicon={closeicon} onClick={()=> setModalOpen(false)}/>
                </S.HeaderContent>
              </S.Header>
              <S.SideNavLinks>
                <S.SideNavSet>
                  <S.SideNavLink>
                    <S.StyledLink to={"/notification"} onClick={()=> setModalOpen(false)}>공지</S.StyledLink>     
                  </S.SideNavLink>
                  <S.SideNavLink>
                    <S.StyledLink to={"/promotion"} onClick={()=> setModalOpen(false)}>동아리</S.StyledLink>
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
                SNS 링크들
              </S.SideNavEtc>

            </S.NavMobile>
          </S.SideNav>
        )}
        {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
            : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)}
        <S.MenubarContainer>
          <S.MenubarWrapper>
            <S.Menubar menubar={menubar} onClick={() => setModalOpen(true)} />
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