import React from 'react';
import styled from 'styled-components';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mobileBreakpoint } from '@util/breakpoints';

// LinkedIn brand colour.
const COLOR_LINKEDIN_BLUE = '#0077b5';

// GitHub brand colour.
const COLOR_GITHUB_GREEN = '#146841';

interface StyledAnchorProps {
  /**
   * Brand colour.
   */
  brandColor: string;
}

/**
 * Styled anchor element.
 */
const StyledAnchor = styled.a<StyledAnchorProps>`
  font-weight: bold;
  border: solid 1px ${props => props.brandColor};
  padding: 25px;
  background-color: #121212;

  ${mobileBreakpoint`
    height: 180px;
  `}

  height: 300px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${props => props.brandColor};
  }
`;

interface Props {
  /**
   * Link destination.
   */
  href: string;

  /**
   * Icon.
   */
  faIcon?: IconProp;

  /**
   * Child nodes to render.
   */
  children: React.ReactNode;
}

const LinkButton: React.FC<Props> = ({ href, faIcon, children }: Props) => {
  // Determine brand colour based on the URL.
  const brandColor: string = href.includes('www.linkedin.com')
    ? COLOR_LINKEDIN_BLUE
    : COLOR_GITHUB_GREEN;

  return (
    <StyledAnchor
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      brandColor={brandColor}>
      {faIcon !== undefined ? (
        <FontAwesomeIcon icon={faIcon} size="7x" />
      ) : undefined}
      {children}
    </StyledAnchor>
  );
};

export default LinkButton;
