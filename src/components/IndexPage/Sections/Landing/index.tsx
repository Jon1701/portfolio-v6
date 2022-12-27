import React from 'react';
import styled from 'styled-components';

import { mobileBreakpoint } from '@util/breakpoints';

import bgURL from './assets/background.jpg';
import ViewMyPortfolioButton from './components/ViewMyPortfolioButton';

/**
 * Component container.
 */
const Container = styled.section`
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #fff;
  min-height: 100vh;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-image: url('${bgURL}');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

    filter: brightness(0.6) grayscale(100%);
  }
`;

/**
 * Container for the content.
 */
const Content = styled.div`
  position: relative;

  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  & > *:not(:last-child) {
    ${mobileBreakpoint`
      margin-bottom: 15px;
    `}

    margin-bottom: 25px;
  }
`;

/**
 * Name.
 */
const Name = styled.div`
  ${mobileBreakpoint`
    font-size: 3rem;
  `}

  font-size: 4rem;
`;

/**
 * Description.
 */
const Description = styled.div`
  ${mobileBreakpoint`
    font-size: 1.3rem;
  `}

  font-size: 1.5rem;
`;

interface Props {
  /**
   * Function to scroll to the Portfolio section.
   */
  scrollToPortfolioSection(): void;
}

/**
 * Index Page Landing Section.
 */
const LandingSection: React.FC<Props> = ({
  scrollToPortfolioSection,
}: Props) => {
  return (
    <Container>
      <Content>
        <Name>Jon Balon</Name>

        <Description>
          <div style={{ width: '60%', margin: '0 auto' }}>
            I am a Front-End Developer with 5 years of professional experience
            working with JavaScript, HTML, and CSS in the React ecosystem.
          </div>
        </Description>

        <ViewMyPortfolioButton handleClick={scrollToPortfolioSection} />
      </Content>
    </Container>
  );
};

export default LandingSection;
