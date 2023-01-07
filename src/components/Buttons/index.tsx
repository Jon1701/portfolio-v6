import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

/**
 * Styled button.
 */
const StyledButton = styled.button`
  all: unset;
  display: inline-block;

  background-color: #6f1ab6;
  border: solid 1px #6f1ab6;

  border-radius: 5px;
  padding: 15px;
  user-select: none;

  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgb(255 255 255 / 20%);
    filter: brightness(150%);
  }
`;

/**
 * Styled anchor.
 */
const StyledAnchor = styled.a`
  all: unset;
  display: inline-block;

  background-color: #6f1ab6;
  border: solid 1px #6f1ab6;

  border-radius: 5px;
  padding: 15px;
  user-select: none;

  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgb(255 255 255 / 20%);
    filter: brightness(150%);
  }
`;

/**
 * Container for button content.
 */
const ContainerButtonContent = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
`;

interface ButtonProps {
  /**
   * Type of button.
   */
  type?: 'submit' | 'button' | 'reset';

  /**
   * FontAwesome Icon.
   */
  icon?: IconProp;

  /**
   * Icon size.
   */
  iconSize?: SizeProp;

  /**
   * Click handler function.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Indicates if the button is disabled.
   */
  disabled?: boolean;

  /**
   * Button content.
   */
  children: React.ReactNode;
}

/**
 * Primary Button.
 */
export const PrimaryButton: React.FC<ButtonProps> = ({
  type,
  icon,
  iconSize,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      <ContainerButtonContent>
        {icon !== undefined ? (
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            style={{ marginRight: '10px' }}
          />
        ) : null}

        {children}
      </ContainerButtonContent>
    </StyledButton>
  );
};

interface LinkButtonProps {
  /**
   * FontAwesome Icon.
   */
  icon?: IconProp;

  /**
   * Icon size.
   */
  iconSize?: SizeProp;

  /**
   * Link destination.
   */
  href: string;

  /**
   * Link content.
   */
  children: React.ReactNode;
}

/**
 * Link button.
 */
export const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  iconSize,
  href,
  children,
}: LinkButtonProps) => (
  <StyledAnchor href={href} target="_blank">
    <ContainerButtonContent>
      {icon !== undefined ? (
        <FontAwesomeIcon
          icon={icon}
          size={iconSize}
          style={{ marginRight: '10px' }}
        />
      ) : null}

      {children}
    </ContainerButtonContent>
  </StyledAnchor>
);
