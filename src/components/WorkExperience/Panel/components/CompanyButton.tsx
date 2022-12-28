import React from 'react';
import styled from 'styled-components';

import { CompanyEnums } from '..';

interface StyledButtonProps {
  /**
   * Indicates if the Company is currently selected.
   */
  isSelected: boolean;

  /**
   * Accent colour to use when Company is selected.
   */
  accentColor: string;
}

/**
 * Styled button.
 */
const StyledButton = styled.button<StyledButtonProps>`
  all: unset;

  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  min-height: 150px;

  background-color: ${props => (props.isSelected ? '#121212' : '#191919')};
  border-left: solid 2px
    ${props => (props.isSelected ? props.accentColor : 'transparent')};

  cursor: pointer;
  user-select: none;
  text-align: center;
  font-weight: 900;

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #121212;
    border-left-color: ${props =>
      props.isSelected ? props.accentColor : 'transparent'};
  }
`;

/**
 * Container for the content.
 */
const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

/**
 * Styled img.
 */
const StyledImage = styled.img`
  width: 100%;
  max-width: 60px;

  margin-bottom: 5px;
`;

interface Props {
  /**
   * Indicates if the Company is currently selected.
   */
  isSelected: boolean;

  /**
   * Company to which the current button is associated.
   */
  companyEnum: CompanyEnums;

  /**
   * URL to the logo.
   */
  logoURL: string;

  /**
   * Click handler function.
   */
  handleClick(): void;

  /**
   * Button text.
   */
  text: string;

  /**
   * Accent colour to use when Company is selected.
   */
  accentColor: string;
}

/**
 * Company button.
 */
const CompanyButton: React.FC<Props> = ({
  isSelected,
  companyEnum,
  logoURL,
  handleClick,
  text,
  accentColor,
}: Props) => {
  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      isSelected={isSelected}
      accentColor={accentColor}>
      <Content>
        <StyledImage src={logoURL} alt={text} />
        {text}
      </Content>
    </StyledButton>
  );
};

export default CompanyButton;
