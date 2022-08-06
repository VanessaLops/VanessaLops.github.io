import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import {
  InfoSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  ContactSection,
} from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection></ServicesSection>
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
      <ContactSection></ContactSection>
    </>
  );
};

export default Home;
