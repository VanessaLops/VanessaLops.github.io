import styled from "styled-components";
import { BsFolder2Open } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";

export const Label = styled.h1`
  text-align: center;
  color: #fff;
`;

export const ServicesContainer = styled.section`
  background: #0e0b16;
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-top: 20px;
`;

export const ServicesProvider = styled.div`
  margin-top: 50px;
  display: inline-block;
  width: 30%;
  height: auto;
  vertical-align: middle;

  border-right: ${({ isMiddle }) => (isMiddle ? "2px solid #fff" : "none")};
  border-left: ${({ isMiddle }) => (isMiddle ? "2px solid #fff" : "none")};
  text-align: center;
  margin-right: 30px;

  @media screen and (max-width: 960px) {
    width: 100%;
    border-right: none;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ServiceImgOne = styled(BsPhone)`
  margin-bottom: 15px;
`;

export const ServiceImgTwo = styled(BsFolder2Open)`
  margin-bottom: 15px;
`;

export const ServiceImgThree = styled(BsShop)`
  margin-bottom: 15px;
`;

export const ServiceImgFour = styled(BsPersonPlusFill)`
  margin-bottom: 15px;
`;

export const ServiceImgFive = styled(BsFolder2Open)`
  margin-bottom: 15px;
`;

export const ServiceImgSix = styled(BsWordpress)`
  margin-bottom: 15px;
`;

export const ServiceLabel = styled.h3`
  color: #fff;
`;

export const ServiceDescription = styled.p`
  padding-bottom: 15px;
  margin-top: 10px;
  margin-inline: 10px;
  color: #fff;
`;
