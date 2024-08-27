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
      <>테블릿
    </>}
    
    {isMobile && 
      <S.Wrapper>
        <S.Container>
          <S.FlexContainer>
            {modalOpen && (
              <S.ModalContainer>
                <S.Modal>
                  <S.FlexContainer>
                    <S.LogoKr src={logo_kr} alt="Logo_kr" />
                    <S.ModalCloseBtn closeicon={closeicon} onClick={()=> setModalOpen(false)}/>
                  </S.FlexContainer>
                </S.Modal>
              </S.ModalContainer>
            )}
            <S.LogoKr src={logo_kr} alt="Logo_kr" />
            <S.MenubarContainer>
              <S.MenubarWrapper>
                <S.Menubar menubar={menubar} onClick={() => setModalOpen(true)} />
              </S.MenubarWrapper>
            </S.MenubarContainer>
          </S.FlexContainer>
        </S.Container>
    </S.Wrapper>}
    </>
  );
};  

export default Nav;
