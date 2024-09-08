import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { languageState } from "../../../context/recoil/languageState";
import { useRecoilValue } from "recoil";

const UrgentWrapper = styled.div`
  border: 1px solid #0068ff;
  opacity: var(--sds-size-stroke-border);
  border-radius: 100px;
  display: flex;
  padding: ${(props) => (props.$isEnglish ? "8px 10px" : "8px 18px")};
  justify-content: center;
  align-items: center;
  color: #0068ff;
  font-family: "MonRegular";
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.16px;
  white-space: nowrap;
`;

const Urgent = () => {
  const { t } = useTranslation();
  const lang = useRecoilValue(languageState);
  const isEnglish = lang === "en";

  return (
    <UrgentWrapper $isEnglish={isEnglish}>{t(`notice.urgent`)}</UrgentWrapper>
  );
};

export default Urgent;
