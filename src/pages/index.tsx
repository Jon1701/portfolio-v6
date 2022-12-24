import React from 'react';
import type { PageProps } from 'gatsby';

import GlobalStyle from '@components/GlobalStyle';
import LandingSection from '@components/IndexPage/Sections/Landing';

/**
 * Index page.
 */
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <GlobalStyle />

      <LandingSection />
    </main>
  );
};

export default IndexPage;
