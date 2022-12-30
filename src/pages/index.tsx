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

const scrollConfig: ScrollIntoViewOptions = {
  behavior: 'smooth',
};

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
 * Scrolls to the top of a given element..
 *
 * @param ref Element reference.
 */
const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView(scrollConfig);
};

/**
 * Index page.
 */
const IndexPage: React.FC<PageProps> = () => {
  // Reference to section elements.
  const refProjectsSection = useRef<HTMLElement>(null);
  const refWorkExperienceSection = useRef<HTMLElement>(null);

  return (
    <main>
      <LandingSection
        scrollToProjectsSection={() => {
          scrollToSection(refProjectsSection);
        }}
      />
      <ProjectsSection ref={refProjectsSection} />
      <WorkExperience
        ref={refWorkExperienceSection}
        scrollToSection={() => {
          scrollToSection(refWorkExperienceSection);
        }}
      />
      <ContactSection />
    </main>
  );
};

export default IndexPage;
