import React, { useRef } from 'react';
import type { PageProps } from 'gatsby';

import ContactSection from '@components/IndexPage/Sections/Contact';
import LandingSection from '@components/IndexPage/Sections/Landing';
import PortfolioSection from '@components/IndexPage/Sections/Portfolio';
import WorkExperience from '@components/IndexPage/Sections/WorkExperience';

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
      <LandingSection scrollToPortfolioSection={scrollToPortfolioSection} />
      <PortfolioSection ref={refPortfolioSection} />
      <WorkExperience />
      <ContactSection />
    </main>
  );
};

export default IndexPage;
