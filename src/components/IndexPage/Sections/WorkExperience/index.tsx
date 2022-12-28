import React from 'react';
import styled from 'styled-components';

import WorkExperiencePanel from '@components/WorkExperience/Panel';

/**
 * Component container.
 */
const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

/**
 * Container for component content.
 */
const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

/**
 * Section title.
 */
const Title = styled.h2`
  text-align: center;
`;

/**
 * Work Experience section.
 */
const WorkExperience = () => {
  return (
    <Container>
      <Content>
        <Title>Where I've Worked</Title>

        <WorkExperiencePanel />
      </Content>
    </Container>
  );
};

export default WorkExperience;
