import React from 'react';
import styled from 'styled-components';

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
}

/**
 * Project title.
 */
const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 15px;
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
`;

/**
 * Card which displays project information.
 */
const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  LogoElement,
}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Figure>
        <ContainerImage imageSrc={imageSrc} role="img" title={description}>
          {LogoElement || undefined}
        </ContainerImage>
        <FigCaption>{description}</FigCaption>
      </Figure>
    </Container>
  );
};

export default ProjectCard;
