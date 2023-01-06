import React, { useState } from 'react';
import styled from 'styled-components';

import {
  laptopBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from '@util/breakpoints';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ExternalLinkButton from './components/ExternalLinkButton';
import ListOfTechnologies from './components/ListOfTechnologies';
import ToggleButton from './components/ToggleButton';

/**
 * Component container.
 */
const Container = styled.article`
  background-color: #1c1c1c;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0 4px 5px 0,
    rgb(0 0 0 / 12%) 0 1px 10px 0;

  width: 100%;
`;
// Describes the Project Details object.
export interface ProjectDetails {
  /**
   * Title.
   */
  title: string;

  /**
   * Description.
   */
  description: string;

  /**
   * URL of the image.
   */
  imageURL: string;

  /**
   * Array of technologies used.
   */
  technologies: Array<string>;

  /**
   * URL of the logo.
   */
  logoImageURL?: string;

  /**
   * Alt text of the logo.
   */
  logoAltText?: string;

  /**
   * Link to a live demo.
   */
  demoLink?: string;

  /**
   * Link to the GitHub repository.
   */
  githubLink?: string;
}

/**
 * Project title.
 */
const Title = styled.div`
  ${mobileBreakpoint`
    font-size: 1rem;
    padding: 10px 0;
  `}

  ${tabletBreakpoint`
    font-size: 1.2rem;
    padding: 10px 0;
  `}

  ${laptopBreakpoint`
    font-size: 1.3rem;
    padding: 10px 0;
  `}

  padding: 15px;
  font-size: 1.5rem;
  text-align: center;
`;

/**
 * Styled figure.
 */
const Figure = styled.figure`
  all: unset;
`;

interface ContainerImageProps {
  /**
   * URL of the image.
   */
  imageSrc: string;
}

/**
 * Container which holds the image as a background image.
 */
const ContainerImage = styled.div<ContainerImageProps>`
  position: relative;

  background: url(${props => props.imageSrc});
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;

  width: 100%;
  aspect-ratio: 16 / 9;

  transition: ease-in-out 0.1s;
  filter: brightness(90%);

  &:hover {
    filter: brightness(100%);
  }
`;

/**
 * Logo.
 */
const LogoImage = styled.img`
  background-color: #fff;

  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;

  max-width: 150px;

  border: solid 1px #000;
  padding: 5px;

  ${mobileBreakpoint`
    bottom: 2px;
    right: 2px;

    max-width: 115px;
    padding: 3px;
  `}
`;

/**
 * Figure caption.
 */
const FigCaption = styled.figcaption`
  padding: 15px;

  text-align: left;

  ${mobileBreakpoint`
    text-align: center;
  `}
`;

/**
 * Container for the external link buttons.
 */
const ContainerButtons = styled.div`
  text-align: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  margin-bottom: 15px;
`;

/**
 * Card which displays Project information.
 */
const ProjectCard: React.FC<ProjectDetails> = ({
  title,
  description,
  imageURL,
  technologies,
  logoImageURL,
  logoAltText,
  demoLink,
  githubLink,
}: ProjectDetails) => {
  // Controls the visibility of the List of Technologies element.
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <Figure>
        <ContainerImage imageSrc={imageURL} role="img" title={description}>
          {logoImageURL !== undefined ? (
            <LogoImage src={logoImageURL} alt={logoAltText} />
          ) : undefined}
        </ContainerImage>
        <FigCaption>{description}</FigCaption>
      </Figure>

      {demoLink !== undefined || githubLink !== undefined ? (
        <ContainerButtons>
          {demoLink !== undefined ? (
            <ExternalLinkButton
              href={demoLink}
              faIcon={faArrowUpRightFromSquare}>
              <React.Fragment>View Demo</React.Fragment>
            </ExternalLinkButton>
          ) : undefined}

          {githubLink !== undefined ? (
            <ExternalLinkButton href={githubLink} faIcon={faGithub}>
              <React.Fragment>View Code</React.Fragment>
            </ExternalLinkButton>
          ) : undefined}
        </ContainerButtons>
      ) : undefined}

      {isVisible && technologies !== undefined && technologies.length > 0 ? (
        <ListOfTechnologies items={technologies} />
      ) : undefined}

      <ToggleButton
        handleClick={() => setIsVisible(!isVisible)}
        isVisible={isVisible}
      />
    </Container>
  );
};

export default ProjectCard;
