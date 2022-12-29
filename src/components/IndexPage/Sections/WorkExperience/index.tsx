import React from 'react';
import styled from 'styled-components';

import WorkExperiencePanel from '@components/WorkExperience/Panel';

/**
 * Component container.
 */
const Container = styled.section`
  min-height: 100vh;
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
