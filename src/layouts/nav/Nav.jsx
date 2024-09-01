import logo_kr from "../../assets/images/Nav/Logo_kr.png";
import logo_en from "../../assets/images/Nav/Logo_en.png";
import { useState } from "react";
import useMediaQueries from "../../hooks/useMediaQueries";
import menubar from "../../assets/images/Nav/menubar.png";
import closeicon from "../../assets/images/Nav/CloseIcon.png";
import Instagram from "../../assets/images/Nav/Instagram.png";
import Youtube from "../../assets/images/Nav/Youtube.png";
import SideNav from "../../assets/images/Nav/SideNav.png";
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
      {isDesktop && (
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={logo_en} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={logo_kr} alt="Logo_kr" />
                )}
              </S.StyledLink>
              <S.StyledLink to={"/notification"}>공지</S.StyledLink>
              <S.StyledLink to={"/promotion"}>동아리</S.StyledLink>
              <S.StyledLink to={"/performance"}>공연일정</S.StyledLink>
              <S.StyledLink to={"/location"}>장소</S.StyledLink>
              <S.StyledLink to={"/review"}>후기</S.StyledLink>
              <S.StyledLink to={"/FAQ"}>FAQ</S.StyledLink>
              <S.StyledLink to={"/about"}>기획단</S.StyledLink>
              <S.LangToggleWrapper>
                <S.CheckBox
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <S.LangSlider>
                  <S.ToggleCircle />
                </S.LangSlider>
              </S.LangToggleWrapper>
            </S.FlexContainer>
          </S.Container>
        </S.Wrapper>
      )}
      {isTablet && (
        <S.Wrapper>
          {/* <S.Container>
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
          <S.StyledLink to={"/"}>
            {isChecked ? (<S.LogoEn src={logo_en} alt="Logo_en" />) 
              : (<S.LogoKr src={logo_kr} alt="Logo_kr" />)}
          </S.StyledLink>
          <S.MenubarContainer>
            <S.MenubarWrapper>
              <S.Menubar menubar={menubar} onClick={() => setModalOpen(true)} />
            </S.MenubarWrapper>
          </S.MenubarContainer>
        </S.FlexContainer>
      </S.Container> */}
        </S.Wrapper>
      )}

      {isMobile && (
        <S.Wrapper>
          <S.Container>
            <S.FlexContainer>
              {modalOpen && (
                <S.SideNav>
                  <S.NavMobile>
                    <S.Header>
                      <S.HeaderContent>
                        <S.MenubarOpened
                          menubar={menubar}
                          onClick={() => setModalOpen(false)}
                        />
                        <S.LogoWrapper>
                          <S.StyledLink
                            to={"/"}
                            onClick={() => setModalOpen(false)}
                          >
                            {isChecked ? (
                              <S.LogoEn src={logo_en} alt="Logo_en" />
                            ) : (
                              <S.LogoKr src={logo_kr} alt="Logo_kr" />
                            )}
                          </S.StyledLink>
                        </S.LogoWrapper>
                        <S.ModalCloseBtn
                          closeicon={closeicon}
                          onClick={() => setModalOpen(false)}
                        />
                      </S.HeaderContent>
                    </S.Header>
                    <S.SideNavLinks>
                      <S.SideNavSet>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/notification"}
                            onClick={() => setModalOpen(false)}
                          >
                            공지
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/promotion"}
                            onClick={() => setModalOpen(false)}
                          >
                            <img src={SideNav} width={"44px"} height={"44px"} />
                            동아리
                            <img src={SideNav} width={"44px"} height={"44px"} />
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/location"}
                            onClick={() => setModalOpen(false)}
                          >
                            장소
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/review"}
                            onClick={() => setModalOpen(false)}
                          >
                            후기
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/FAQ"}
                            onClick={() => setModalOpen(false)}
                          >
                            FAQ
                          </S.StyledLink>
                        </S.SideNavLink>
                        <S.SideNavLink>
                          <S.StyledLink
                            to={"/about"}
                            onClick={() => setModalOpen(false)}
                          >
                            기획단
                          </S.StyledLink>
                        </S.SideNavLink>
                      </S.SideNavSet>
                    </S.SideNavLinks>
                    <S.SideNavEtc>
                      <S.SideNavLang>
                        <S.SideNavLangBtn>
                          {/* 언어변경, isChecked 상태를 변경시키고 싶은데 어케해야할까요 */}

                          <S.SideNavLangText onClick={() => isChecked(false)}>
                            한국어
                          </S.SideNavLangText>
                          <S.SideNavLangText onClick={() => isChecked(true)}>
                            ENG
                          </S.SideNavLangText>
                        </S.SideNavLangBtn>
                      </S.SideNavLang>
                      <S.SideNavSNS>
                        <S.SideNavIconContainer>
                          {/* 인스타 */}
                          <a
                            href="https://www.instagram.com/youngcamp_dgu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <S.SideNavSnsIcon icon={Instagram} />
                          </a>
                          {/* 유튜브 */}
                          <a
                            href="https://www.youtube.com/@youngcamp_dgu"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <S.SideNavSnsIcon icon={Youtube} />
                          </a>
                        </S.SideNavIconContainer>
                      </S.SideNavSNS>
                    </S.SideNavEtc>
                  </S.NavMobile>
                </S.SideNav>
              )}
              <S.StyledLink to={"/"}>
                {isChecked ? (
                  <S.LogoEn src={logo_en} alt="Logo_en" />
                ) : (
                  <S.LogoKr src={logo_kr} alt="Logo_kr" />
                )}
              </S.StyledLink>
              <S.MenubarContainer>
                <S.MenubarWrapper>
                  <S.Menubar
                    menubar={menubar}
                    onClick={() => setModalOpen(true)}
                  />
                </S.MenubarWrapper>
              </S.MenubarContainer>
            </S.FlexContainer>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
};

export default Nav;
