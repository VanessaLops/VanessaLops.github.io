import styled from "styled-components";

export const SkillsContainer = styled.section`
  background: #0e0b16;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

export const SkillsTitle = styled.h1`
  padding-top: 70px;
  color: #fff;
  font-size: 40px;
  background: #0e0b16;

  @media screen and (max-width: 960px) {
    font-size: 32px;
  }
`;

export const ContainerLogo = styled.div`
  box-sizing: border-box;
  background-color: #000000;
  display: inline-block;
  width: 25%;
  height: auto;
  margin-top: 1.2em;
  margin-right: 2em;
  border-bottom: 2em solid #e83e8c;
  border-radius: 10px;
  vertical-align: middle;

  @media screen and (max-width: 960px) {
    margin-right: 5px;
    margin-left: 5px;
    width: 35%;
  }
`;

export const LogoImage = styled.img`
  margin-top: 1em;
  width: 30%;
`;

export const LogoName = styled.h2`
  color: #fff;
  margin-top: 0;
  padding-top: 1em;
  margin-bottom: 1.2em;
  font-size: 1rem;
`;
