import styled from "styled-components";
import { useTranslation } from "react-i18next";

const UrgentWrapper = styled.div`
  border: 1px solid #0068ff;
  opacity: var(--sds-size-stroke-border);
  border-radius: 100px;

  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  color: #0068ff;
  font-family: "MonRegular";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`;

const Urgent = () => {
  const { t } = useTranslation();

  return <UrgentWrapper>{t(`notice.urgent`)}</UrgentWrapper>;
};

export default Urgent;
