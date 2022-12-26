import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  background-color: #fff;

  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;

  max-width: 150px;

  border: solid 1px #000;
  padding: 5px;
`;

interface Props {
  /**
   * URL of the image.
   */
  src: string;

  /**
   * Alt text to be displayed.
   */
  altText: string;
}

/**
 * Displays a logo.
 */
const Logo: React.FC<Props> = ({ src, altText }: Props) => {
  return <StyledImage src={src} alt={altText} />;
};

export default Logo;
