import styled from "styled-components";

/*---------------title-----------------*/
export const HeroBanner = styled.div`
  width: 100%; max-width: 1440px;
  height: auto; max-height: 1060px;
  background-color: #B9FF9C;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const HeroText1 = styled.div`
  width: 1304px;
  height: 122px;
  display: flex;
  padding: 10px 0px 0px 196px;
  padding-top: 10px;
  align-items: center;
  gap: var(--Spacing-20, 20px);
`;

export const HeroText2 = styled(HeroText1)`
  justify-content: flex-end;
  padding: 10px 96px 0px 256px;
`;

export const Line = styled.div`
  width: 1440px;
  height: 1px;
  border: 1px solid rgba(74,94,109,0.3);
`

export const Title1 = styled.div`
  width: auto; max-width: 766px;
  height: auto; max-height: 766px;
  color: #0068FF;
  text-align: left;
  font-family: 'Montserrat Alternates';
  font-size: 100px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
`;

export const TitleImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  fill: none; color: #637D92;
`;

export const Title2 = styled(Title1)`
  text-align: center;
`;

/*----------------video----------------*/
export const VideoBoxTop = styled.div`
  margin-top: 32px;
  width: 1060px;
  height: 540px;
  border-radius: 30px 30px 0px 0px;
  border: 1px solid var(--Base-Real-Black, #000);
  background: var(--Base-Base-White, #FAFAFA);
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const VideoBoxBottom = styled.div`
  width: 1060px;
  height: 56px;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
  padding: 16px 48px;
  border-radius: 0px 0px 30px 30px;
  border-bottom: 1px solid var(--main-primary, #05FB47);
  opacity: var(--sds-size-stroke-border);
  background: #0068FF;
  position: relative;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%; height: 100%;
  object-fit: cover;
`

export const BottomText = styled.div`
  color: var(--main-primary, #05FB47);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.14px;
`;

export const BottomImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ScrollHero = styled.div`
  width: 1060px;
  height: 80px;
  margin: 24px;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Vertical = styled.div`
  width: 36px;
  height: 2px;
  opacity: var(--sds-size-stroke-border);
  background-color: #05FB47;
  transform: rotate(90deg);
`;

export const ScrollText = styled.div`
  width: auto;
  height: auto;
  max-width: 157px;
  max-height: 28px;
  color: var(--main-primary, #05FB47);
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; 
  letter-spacing: -1.44px;
  padding-top: 16px;
`;
/*-------------Section1-----------------*/
export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  max-height: 6259px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--Spacing---1, 100px) 0px;
  border: 2px solid black;
`;

export const SloganSection = styled.div`
  width: 100%;  
  max-width: 1100px;
  height: 579px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 170px 170px;
  justify-content: center;
  gap: 36px;
  align-items: center;
`;

export const SloganBox = styled.div`
  width: 1097.5px;
  height: 188px;
  display: flex;
  position: relative;
  top: -36px;
  justify-content: center;
  flex-direction: row;
`;

export const SloganText1 = styled.div`
  color: var(--Base-Base-Black, #0A0B0A);
  width: 360px;
  height: 122px;
  font-family: "Montserrat Alternates";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-sizing: border-box;
`;

export const EclipseImg = styled.img`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  margin: 33.81px 145px 4.19px 117.5px;
`;

export const SloganText2 = styled.div`
  width: 325px;
  height: 122px;
  color: #0A0B0A;
  text-align: right;
  font-family: "Montserrat Alternates";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 66px;
`;

export const SloganDetail = styled.div`
  display: flex;
  width: 273px;
  height: 147px;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailText1 = styled.div`
  width: 161px;
  height: 56px;
  color: var(--Primary-Primary, #05FB47);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.48px;
`;

export const DetailTextBox = styled.div`
  width: 273px;
  height: 67px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const DetailText2 = styled.div`
  width: 148px;
  height: 67px;
  color: black;
  text-align: center;
  font-family: Pretendard;
  font-size: 42px; //56
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0px; //1.12
  margin-left: -10px;
`;

export const DetailText3 = styled.div`
  width: 93px;
  height: 67px;  
  color: var(--main-primary, #05FB47);
  text-align: center;
  font-family: Pretendard;
  font-size: 42px; //56
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0px; //1.12
`;

/*-------------Section2-----------------*/

export const CardSection1 = styled(SloganSection)`
  display: flex;
  justify-content: flex-start;
  padding: 70.5px 0px 70.5px 0px;
`;

export const CardSection2 = styled.div`
  width: 1100px;
  height: 316px;
  display: flex;
  padding: 96px 256px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const CardSectionBox = styled.div`
  width: 588px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionText1 = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 98px;
  align-self: stretch;
  color: #000;
  text-align: center;
  font-family: "Montserrat Alternates";
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;

export const SectionText2 = styled.div`
  width: 152px;
  height: 24px;
  color: var(--main-primary, #05FB47);
  text-align: center;
  font-family: Montserrat;
  font-size: 17px; //20px
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
  letter-spacing: -0.1px;
  display: flex;
  justify-content: center;
`;

export const SectionText3 = styled.div`
  width: 568px;
  height: 90px;
  flex: 1 0 0;
  color: var(--text-grey1000, #323F49);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.05px;
`;

/*--------------Tab--------------*/

export const TabBar = styled.div`
  width: 1100px;
  height: auto; max-height: 70px;
  display: flex;
  align-items: center;
  margin: 0px 0px 170px 170px;
  flex: 1 0 0;
`;

export const TabBox = styled.div`
  width: 275.00018px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-top: 1px solid var(--new-grey-grey300, #CED7DE);
  border-right: 1px solid var(--new-grey-grey300, #CED7DE);
  opacity: var(--sds-size-stroke-border);
  background: var(--new-main-black, #0A0B0A);
  color: var(--new-grey-grey300, #CED7DE);
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; 
  letter-spacing: -1.44px;
`;