import React from 'react';
import styled from 'styled-components';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Styled anchor element.
 */
const StyledAnchor = styled.a`
  display: inline-block;
  padding: 15px;
  border-radius: 5px;

  background-color: #dc143c;
  color: #fff;
  font-weight: 700;

  transition: ease-in-out 0.2s;

  &:hover {
    user-select: none;
    background-color: #7e0c23;
  }
`;

interface Props {
  /**
   * FontAwesome icon.
   */
  faIcon?: IconProp;

  /**
   * Link to site.
   */
  href: string;

  /**
   * Child nodes to render.
   */
  children: React.ReactElement;
}

/**
 * Button which links to an external resource.
 */
const ExternalLinkButton: React.FC<Props> = ({
  faIcon,
  href,
  children,
}: Props) => {
  return (
    <StyledAnchor href={href} target="_blank" rel="nofollow noreferrer">
      {faIcon !== undefined ? (
        <FontAwesomeIcon icon={faIcon} style={{ marginRight: '5px' }} />
      ) : undefined}
      {children}
    </StyledAnchor>
  );
};

export default ExternalLinkButton;
