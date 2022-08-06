import React from "react";
import { homeObjTwo } from "./Data";
import {
  InfoSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  ContactSection,
} from "../../components";

const About = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <ServicesSection></ServicesSection>
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
      <ContactSection></ContactSection>
    </>
  );
};

export default About;
