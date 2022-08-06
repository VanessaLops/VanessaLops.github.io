import React from "react";

import {
  SkillsContainer,
  SkillsTitle,
  ContainerLogo,
  LogoImage,
  LogoName,
} from "./SkillsSection.elements";

const SkillsSection = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsTitle>Meus conhecimentos</SkillsTitle>
        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/htmlLogo.png")}
          ></LogoImage>
          <LogoName>HTML</LogoName>
        </ContainerLogo>

        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/cssLogo.jpg")}
          ></LogoImage>
          <LogoName>CSS</LogoName>
        </ContainerLogo>

        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/JSLogo.jpg")}
          ></LogoImage>
          <LogoName>Javascript</LogoName>
        </ContainerLogo>

        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/TSLogo.png")}
          ></LogoImage>
          <LogoName>Typescript</LogoName>
        </ContainerLogo>

        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/ReactLogo.png")}
          ></LogoImage>
          <LogoName>React</LogoName>
        </ContainerLogo>

        <ContainerLogo>
          <LogoImage
            src={require("../../Images/SkillsImages/MySQLlogo.png")}
          ></LogoImage>
          <LogoName>MySQL</LogoName>
        </ContainerLogo>
        
        <ContainerLogo>
  
          <LogoName> E muitos outros </LogoName>
        </ContainerLogo>
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
