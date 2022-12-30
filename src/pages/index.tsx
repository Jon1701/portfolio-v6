import React, { useRef } from 'react';
import type { PageProps, HeadProps } from 'gatsby';

import {
  Title,
  CanonicalURL,
  MetaDescription,
  MetaRobots,
  PersonJSONLD,
  OpenGraphCard,
  TwitterCard,
} from '@components/IndexPage/SEO';
import ContactSection from '@components/IndexPage/Sections/Contact';
import LandingSection from '@components/IndexPage/Sections/Landing';
import ProjectsSection from '@components/IndexPage/Sections/Projects';
import WorkExperience from '@components/IndexPage/Sections/WorkExperience';

/**
 * Elements to appear in the <head> tag.
 */
export const Head: React.FC<HeadProps> = () => {
  return (
    <React.Fragment>
      <Title />
      <CanonicalURL />
      <MetaDescription />
      <MetaRobots />
      <PersonJSONLD />
      <OpenGraphCard />
      <TwitterCard />
    </React.Fragment>
  );
};

/**
 * Index page.
 */
const IndexPage: React.FC<PageProps> = () => {
  // Reference to the Projects Section element.
  const refProjectsSection = useRef<HTMLElement>(null);

  // Reference to Work History Section element.
  const refWorkExperienceSection = useRef<HTMLElement>(null);

  /**
   * Scrolls to the Projects section.
   */
  const scrollToProjectsSection = () => {
    refProjectsSection.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <LandingSection scrollToProjectsSection={scrollToProjectsSection} />
      <ProjectsSection ref={refProjectsSection} />
      <WorkExperience ref={refWorkExperienceSection} />
      <ContactSection />
    </main>
  );
};

export default IndexPage;
