import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

/**
 * Component container.
 */
const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;

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
   * Link to site.
   */
  href: string;
}

/**
 * Button which links to a demo of the Project.
 */
const ViewDemoButton: React.FC<Props> = ({ href }: Props) => {
  return (
    <Container>
      <StyledAnchor href={href} target="_blank" rel="nofollow noreferrer">
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          style={{ marginRight: '15px' }}
        />
        View Demo
      </StyledAnchor>
    </Container>
  );
};

export default ViewDemoButton;
