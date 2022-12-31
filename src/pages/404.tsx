import React from 'react';
import type { PageProps, HeadProps } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';

/**
 * Component container.
 */
const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

/**
 * Content container.
 */
const Content = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 5px;

  text-align: center;
`;

/**
 * Styled header.
 */
const H1 = styled.h1`
  display: block;
  font-size: 2rem;
`;

/**
 * Styled Gatsby Link.
 */
const StyledLink = styled(Link)`
  display: inline-block;
  border: solid 1px #c4c7c5;
  padding: 20px;

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #000;
  }
`;

/**
 * 404 page.
 */
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <Content>
        <H1>Page Not Found</H1>

        <StyledLink to="/">Go to the home page</StyledLink>
      </Content>
    </Container>
  );
};

export default NotFoundPage;

/**
 * Elements to appear in the <head> tag.
 */
export const Head: React.FC<HeadProps> = () => {
  return (
    <React.Fragment>
      <title>Page Not Found</title>
    </React.Fragment>
  );
};
