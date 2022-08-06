import React from "react";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Bold,
} from "./InfoElements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
  fristImage,
  fristSection,
  linkBtn,
  targetData,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Bold fristSection={fristSection}>FULLSTACK DEVELOPER</Bold>
                <Bold fristSection={fristSection}>FREELANCER DEVELOPER</Bold>
                <Bold fristSection={fristSection}>TYPESCRIPT DEVELOPER</Bold>
                <Bold fristSection={fristSection}>JAVASCRIPT DEVELOPER</Bold>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <a href={linkBtn} target={targetData} rel="noreferrer">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} fristImage={fristImage} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
