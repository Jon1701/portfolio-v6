import React, { useState } from 'react';
import styled from 'styled-components';

import {
  laptopBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from '@util/breakpoints';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ToggleButton from './components/ToggleButton';
import ListOfTechnologies from './components/ListOfTechnologies';
import ExternalLinkButton from './components/ExternalLinkButton';

/**
 * Component container.
 */
const Container = styled.article`
  background-color: #191919;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0 4px 5px 0,
    rgb(0 0 0 / 12%) 0 1px 10px 0;
`;

interface Props {
  /**
   * Project title.
   */
  title: string;

  /**
   * Project description.
   */
  description: string;

  /**
   * URL of the image.
   */
  imageSrc: string;

  /**
   * Logo Element.
   */
  LogoElement?: React.ReactElement;

  /**
   * Array of technologies used.
   */
  technologies?: Array<string>;

  /**
   * Link to demo site.
   */
  demoHref?: string;

  /**
   * Link to GitHub repository.
   */
  githubHref?: string;
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
  height: 250px;

  transition: ease-in-out 0.1s;
  filter: brightness(90%);

  &:hover {
    filter: brightness(100%);
  }
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
const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  LogoElement,
  technologies,
  demoHref,
  githubHref,
}: Props) => {
  // Controls the visibility of the List of Technologies element.
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Container>
      <Title>{title}</Title>
      <Figure>
        <ContainerImage imageSrc={imageSrc} role="img" title={description}>
          {LogoElement || undefined}
        </ContainerImage>
        <FigCaption>{description}</FigCaption>
      </Figure>

      <ContainerButtons>
        {demoHref !== undefined ? (
          <ExternalLinkButton href={demoHref} faIcon={faArrowUpRightFromSquare}>
            <React.Fragment>View Demo</React.Fragment>
          </ExternalLinkButton>
        ) : undefined}

        {githubHref !== undefined ? (
          <ExternalLinkButton href={githubHref} faIcon={faGithub}>
            <React.Fragment>View Code</React.Fragment>
          </ExternalLinkButton>
        ) : undefined}
      </ContainerButtons>

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
