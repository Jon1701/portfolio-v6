import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
 * Styled button.
 */
const StyledButton = styled.button`
  all: unset;
  display: block;
  width: 100%;

  cursor: pointer;
  font-size: 0.9em;
  text-align: center;

  box-sizing: border-box;
  background-color: #292929;
  padding: 15px 0;

  user-select: none;
`;

interface Props {
  /**
   * Click handler function.
   */
  handleClick(): void;

  /**
   * Indicates if List of Technologies component is visible.
   */
  isVisible: boolean;
}

/**
 * Button to toggle visibility of the List of Technologies component.
 */
const ToggleButton = ({ handleClick, isVisible }: Props) => {
  return (
    <StyledButton type="button" onClick={handleClick}>
      {isVisible ? (
        <React.Fragment>
          <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: '5px' }} />
          Hide technologies used
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ marginRight: '5px' }}
          />
          Show technologies used
        </React.Fragment>
      )}
    </StyledButton>
  );
};

export default ToggleButton;
