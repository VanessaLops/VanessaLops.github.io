import React from "react";
import { IconContext } from "react-icons/lib";
import {
  TabsContainer,
  TitleTabs,
  ProjectTabs,
  Project,
  ImageContainer,
  ProjectImage,
  ProjectHover,
  ProjectImgOne,
  ProjectImgTwo,
  ProjectImgFour,
  ProjectName,
  ProjectTecnologies,
  ProjectDescription,
  ProjectBtn,
  BtnGithub,
  SectionProjects,
} from "./ProjectsSection.elements";

const ProjectsSection = () => {
  return (
    <>
      <SectionProjects>
        <TitleTabs>Projetos</TitleTabs>
        <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
          <TabsContainer>
            <ProjectTabs>
              <a
                target={"_blank"}
                href="https://github.com/NeuVanessa/DragonApp"
                rel="noreferrer"
              >
                <Project>
                  <ProjectHover>
                    <ImageContainer>
                      <ProjectImage
                        src={require("../../Images/projeto1.jpg")}
                      ></ProjectImage>
                    </ImageContainer>

                    <ProjectImgOne></ProjectImgOne>
                    <ProjectName>Dragon Pro</ProjectName>
                    <ProjectDescription>
                      Um aplicativo para mostrar detalhes da série Game of
                      Thrones
                    </ProjectDescription>
                    <ProjectTecnologies>
                      React Native, Styled Components, Expo, Versionamento
                      GitHub, Heroku Deploy, MongoDB Database
                    </ProjectTecnologies>
                    <ProjectBtn to="https://github.com/NeuVanessa/DragonApp">
                      Saiba Mais
                    </ProjectBtn>
                  </ProjectHover>
                </Project>
              </a>

              <a
                target={"_blank"}
                href="https://coracaovalentewebsite.vercel.app"
                rel="noreferrer"
              >
                <Project>
                  <ProjectHover>
                    <ImageContainer>
                      <ProjectImage
                        src={require("../../Images/projeto2.jpg")}
                      ></ProjectImage>
                    </ImageContainer>
                    <ProjectImgTwo></ProjectImgTwo>
                    <ProjectName>Escola de Futebol Coração Valente</ProjectName>
                    <ProjectDescription>
                      Um de uma escolinha de futebol em Salvador-Bahia, feito
                      com Reactjs,Styled Components, Gatsby, Husky
                    </ProjectDescription>
                    <ProjectTecnologies>Javascript, ReactJs</ProjectTecnologies>
                    <ProjectBtn to="https://coracaovalentewebsite.vercel.app">
                      Saiba Mais
                    </ProjectBtn>
                  </ProjectHover>
                </Project>
              </a>

              <a target={"_blank"} href="" rel="noreferrer">
                <Project>
                  <ProjectHover>
                    <ImageContainer>
                      <ProjectImage
                        src={require("../../Images/projeto3.jpg")}
                      ></ProjectImage>
                    </ImageContainer>
                    <ProjectImgFour></ProjectImgFour>
                    <ProjectName>MeuSalão</ProjectName>
                    <ProjectDescription>
                      Gerenciamento de Salão de Beleza
                    </ProjectDescription>
                    <ProjectTecnologies>
                      React Native, Saga/Redux, SqLite
                    </ProjectTecnologies>
                    <ProjectBtn to="">Saiba Mais</ProjectBtn>
                  </ProjectHover>
                </Project>
              </a>
            </ProjectTabs>
            <BtnGithub href="">Clique aqui e veja mais</BtnGithub>
          </TabsContainer>
        </IconContext.Provider>
      </SectionProjects>
    </>
  );
};

export default ProjectsSection;
