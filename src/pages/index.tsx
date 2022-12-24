import React, { useRef } from 'react';
import type { PageProps } from 'gatsby';

import GlobalStyle from '@components/GlobalStyle';
import LandingSection from '@components/IndexPage/Sections/Landing';
import PortfolioSection from '@components/IndexPage/Sections/Portfolio';

/**
 * Index page.
 */
const IndexPage: React.FC<PageProps> = () => {
  // Reference to the Portfolio Section element.
  const refPortfolioSection = useRef<HTMLElement>(null);

  /**
   * Scrolls to the Portfolio section.
   */
  const scrollToPortfolioSection = () => {
    refPortfolioSection.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <GlobalStyle />

      <LandingSection scrollToPortfolioSection={scrollToPortfolioSection} />
      <PortfolioSection ref={refPortfolioSection} />
    </main>
  );
};

export default IndexPage;
