import styled from "styled-components";
import { MdOutlinePets } from "react-icons/md";
import { MdFreeCancellation } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

export const SectionProjects = styled.section``;

export const TitleTabs = styled.h1`
  padding-top: 70px;
  text-align: center;
  color: #fff;
  background: #0e0b16;
`;

export const TabsContainer = styled.div`
  background: #0e0b16;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`;

export const ProjectTabs = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;

  background-color: #0e0b16;
`;

export const Project = styled.div`
  overflow: hidden;
  margin-top: 50px;
  display: inline-block;
  width: 30%;
  height: 300px;
  vertical-align: middle;
  margin: 10px;
  border: 2px solid  #6f42c1;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    display: none;
    pointer-events: none;
  }
`;

export const ProjectHover = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;

  &:hover ${ImageContainer} {
    display: none;
    pointer-events: none;
  }
`;

export const ProjectBtn = styled.button`
  color: #fff;
  border-radius: 4px;
  background: #e83e8c;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const ProjectImgOne = styled(MdOutlinePets)`
  margin-bottom: 15px;
`;

export const ProjectImgTwo = styled(MdFreeCancellation)`
  margin-bottom: 15px;
`;

export const ProjectImgThree = styled(MdContactMail)`
  margin-bottom: 15px;
`;

export const ProjectImgFour = styled(BsShop)`
  margin-bottom: 15px;
`;

export const ProjectImgFive = styled(GiBrain)`
  margin-bottom: 15px;
`;

export const ProjectName = styled.h2`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const ProjectTecnologies = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ProjectDescription = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #fff;
`;

export const BtnGithub = styled.a`
  color: #fff;
  font-size: 35px;
  margin-top: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color:  #e83e8c;
  }
`;
