import React from "react";
import styled from "styled-components";
import MainTitle from "../../../components/ui/MainTitle";
import { ContentWrapper } from "../../../style/commonStyle";
import Content from "./Content.jsx";
import useMediaQueries from "../../../hooks/useMediaQueries.jsx";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div``;

const index = () => {
  const { isMobile } = useMediaQueries();
  const { t } = useTranslation();
  const subTitle = isMobile ? t("notice.msubTitle") : t("notice.subTitle");

  return (
    <Wrapper>
      <MainTitle mainText={t(`notice.maintitle`)} subText={subTitle} />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default index;
