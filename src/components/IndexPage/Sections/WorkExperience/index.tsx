import React from 'react';
import styled from 'styled-components';

import WorkExperiencePanel from '@components/WorkExperience/Panel';

/**
 * Component container.
 */
const Container = styled.section`
  min-height: 100vh;
  background-color: transparent;
`;

/**
 * Container for component content.
 */
const Content = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;

  padding: 5px;
`;

/**
 * Section title.
 */
const Title = styled.h2`
  text-align: center;
  margin: 50px 0;
`;

interface Props {
  /**
   * Function to scroll to the top of the Section.
   */
  scrollToSection(): void;
}

/**
 * Work Experience section.
 */
const WorkExperienceSection = React.forwardRef<HTMLElement, Props>(
  ({ scrollToSection }: Props, ref) => {
    return (
      <Container ref={ref}>
        <Content>
          <Title>Where I've Worked</Title>

          <WorkExperiencePanel scrollToSection={scrollToSection} />
        </Content>
      </Container>
    );
  }
);

export default WorkExperienceSection;
