import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Styled button.
 */
const StyledButton = styled.button`
  all: unset;

  border: solid 1px #c4c7c5;
  padding: 10px;

  user-select: none;
  cursor: pointer;

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #000;
  }
`;

/**
 * Defined the layout of the button content.
 */
const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  & > *:nth-child(1) {
    margin-right: 10px;
  }
`;

interface Props {
  /**
   * Click handler.
   */
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * View Portfolio button.
 */
const ViewPortfolioButton: React.FC<Props> = ({ handleClick }: Props) => {
  return (
    <StyledButton onClick={handleClick}>
      <Layout>
        <FontAwesomeIcon icon={faAnglesDown} size="1x" />
        Click to view my Portfolio
      </Layout>
    </StyledButton>
  );
};

export default ViewPortfolioButton;
