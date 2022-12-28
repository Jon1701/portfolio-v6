import React from 'react';
import styled from 'styled-components';

import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { mobileBreakpoint } from '@util/breakpoints';

import LinkButton from './components/LinkButton';

/**
 * Component container.
 */
const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: #181818;

  min-height: 100vh;
`;

/**
 * Content container.
 */
const Content = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding: 5px;

  text-align: center;
`;

/**
 * Styled H2.
 */
const H2 = styled.h2`
  margin-top: 0;
  text-align: center;
`;

/**
 * Container for the buttons.
 */
const ContainerButtons = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  ${mobileBreakpoint`
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;
		gap: 5px;
	`}
`;

/**
 * Contact section.
 */
const ContactSection = () => {
  return (
    <Container>
      <Content>
        <H2>Let's Work Together</H2>

        <p>
          I am currently looking for an Intermediate Front-End Developer role.
          So, if you like my portfolio and think I am suited for a position at
          your company, let's get in touch.
        </p>

        <ContainerButtons>
          <LinkButton
            href="https://www.linkedin.com/in/jonbalon"
            faIcon={faLinkedin}>
            Connect on LinkedIn
          </LinkButton>

          <LinkButton href="https://github.com/Jon1701" faIcon={faGithubSquare}>
            View my GitHub Profile
          </LinkButton>
        </ContainerButtons>
      </Content>
    </Container>
  );
};

export default ContactSection;
