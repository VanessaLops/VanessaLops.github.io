import React from "react";

import { ContainerResume, ResumeEmbed, Teste } from "./ResumeSection.elements";
const Resume = () => {
  return (
    <>
      <ContainerResume>
        <ResumeEmbed src={require("../..//Images/rrr-1.png")} />
        <ResumeEmbed src={require("../..//Images/rrr-2.png")} />
      </ContainerResume>
    </>
  );
};

export default Resume;
