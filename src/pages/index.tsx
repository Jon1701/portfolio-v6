import React from 'react';
import type { PageProps } from 'gatsby';

import GlobalStyle from '@components/GlobalStyle';
import LandingSection from '@components/IndexPage/Sections/Landing';
import PortfolioSection from '@components/IndexPage/Sections/Portfolio';

/**
 * Index page.
 */
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <GlobalStyle />

      <LandingSection />
      <PortfolioSection />
    </main>
  );
};

export default IndexPage;
