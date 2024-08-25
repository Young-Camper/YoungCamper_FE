import React from "react";
import MainTitle from "../../components/ui/MainTitle";
import { ContentWrapper } from "../../style/commonStyle";
import Section from "./Section";
import { leaderProfiles, memberProfiles } from "./profileData";


const index = () => {
  return (
    <>
      <MainTitle title="영캠퍼" />
      <ContentWrapper>
        <Section title="Team Lead" profiles={leaderProfiles} />
        <Section title="Team Member" profiles={memberProfiles} />
      </ContentWrapper>
    </>
  );
};

export default index;
