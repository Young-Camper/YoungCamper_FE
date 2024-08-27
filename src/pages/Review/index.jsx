import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import {
  Container,
  TitleSet,
  Title,
  Subtitle,
  Textfiled,
  Textarea,
  Review,
  Comments,
} from "./style";
import Comment from "./components/comment";
const IndexPage = () => {
  return (
    <ContentWrapper>
      <MainTitle title="후기" />
      <Container>
        <TitleSet>
          <Title>의견을 들려주세요!</Title>
          <Subtitle>
            영캠프는 대한민국 대학 불교 동아리들이 연합하여 주최하는 특별한
            축제입니다.
          </Subtitle>
        </TitleSet>
        <Textfiled>
          <Textarea>
            <Review>후기를 작성해주세요.</Review>
          </Textarea>
        </Textfiled>
        <Comments>
          <Comment />
        </Comments>
      </Container>
    </ContentWrapper>
  );
};

export default IndexPage;
