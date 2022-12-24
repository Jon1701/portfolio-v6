import React from 'react';
import styled from 'styled-components';

/**
 * Component container.
 */
const Container = styled.div`
  background-color: #191919;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
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
}: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Figure>
        <ContainerImage imageSrc={imageSrc} role="img" title={description} />
        <FigCaption>{description}</FigCaption>
      </Figure>
    </Container>
  );
};

export default ProjectCard;
