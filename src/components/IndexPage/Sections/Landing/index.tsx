import React from 'react';
import styled from 'styled-components';

import bgURL from './assets/background.jpg';
import ViewMyPortfolioButton from './components/ViewMyPortfolioButton';

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

const Content = styled.div`
  position: relative;

  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Name = styled.div`
  font-size: 4rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  flex-shrink: 2;
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
