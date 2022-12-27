import React from 'react';
import styled from 'styled-components';

import ProjectCard from '@components/ProjectCard';

import evoMemberPortalImageURL from './assets/images/evo-member-portal.png';
import evoPluginImageURL from './assets/images/evo-plugin.png';
import evoWebsiteImageURL from './assets/images/evo-website.png';
import Logo from './components/Logo';
import navTechLogoURL from './assets/images/navtech-logo.png';
import pmpGatewayDashboardImageURL from './assets/images/pmp-gateway-dashboard.png';
import pmpLogoURL from './assets/images/pmp-logo.png';
import pmpSalesSiteImageURL from './assets/images/pmp-sales-site.png';

/**
 * Component container.
 */
const Container = styled.section`
  min-height: 100vh;
`;

/**
 * Section title.
 */
const Title = styled.h2`
  text-align: center;
`;

/**
 * Content container.
 */
const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

/**
 * Grid layout.
 */
const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

// Object containing List of Technologies for each Project.
const technologies = {
  pricematePay: {
    gatewayDashboard: [
      'React',
      'React Router',
      'Redux',
      'Styled Components',
      'Format.js',
      'Chart.js',
      'Sass',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Jest',
      'Docker',
      'Webpack',
      'Babel',
      'Git',
      'Gerrit',
      'Jenkins CI/CD',
    ],
    salesSite: [
      'React',
      'Gatsby.js',
      'Styled Components',
      'Format.js',
      'Sass',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Docker',
      'Webpack',
      'Git',
      'Gerrit',
      'Jenkins CI/CD',
    ],
  },
  navtech: {
    plugin: [
      'PHP',
      'WordPress',
      'MySQL',
      'jQuery',
      'Chart.js',
      'Sass',
      'PostCSS',
      'Autoprefixer',
      'ESLint',
      'Stylelint',
      'PHPUnit',
      'Docker',
      'Webpack',
      'Babel',
      'Gulp',
      'Git',
      'GitHub',
      'Travis CI',
    ],
    memberPortal: [
      'React',
      'React Router',
      'Redux',
      'Chart.js',
      'Sass',
      'PostCSS',
      'Autoprefixer',
      'ESLint',
      'Stylelint',
      'Docker',
      'Webpack',
      'Babel',
      'Mocha.js',
      'Chai.js',
      'Git',
      'GitHub',
      'Travis CI',
    ],
    productSite: [
      'PHP',
      'WordPress',
      'MySQL',
      'Sass',
      'PostCSS',
      'Autoprefixer',
      'ESLint',
      'Stylelint',
      'Webpack',
      'Gulp',
      'PHPUnit',
      'Docker',
      'Git',
      'GitHub',
      'Travis CI',
    ],
  },
};

/**
 * Portfolio section which displays projects I've worked on.
 */
const PortfolioSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Content>
        <Title>What I've Built Throughout My Career</Title>

        <GridLayout>
          <ProjectCard
            title="Pricematepay Gateway Dashboard"
            description="Payment processing and Invoicing solution allowing organizations to handle credit card payments for their clients."
            imageSrc={pmpGatewayDashboardImageURL}
            LogoElement={
              <Logo src={pmpLogoURL} altText="Developed at Pricematepay" />
            }
            technologies={technologies.pricematePay.gatewayDashboard}
          />

          <ProjectCard
            title="Pricematepay Sales Site"
            description="Product information site highlighting the features of the Payment Gateway Platform to aid the Sales Team in client acquisition."
            imageSrc={pmpSalesSiteImageURL}
            LogoElement={
              <Logo src={pmpLogoURL} altText="Developed at Pricematepay" />
            }
            technologies={technologies.pricematePay.salesSite}
          />

          <ProjectCard
            title="EVO SEO WordPress Plugin"
            description="Plugin to seamlessly add Search Engine Optimizations to a WordPress web property with minimal technical knowledge."
            imageSrc={evoPluginImageURL}
            LogoElement={
              <Logo
                src={navTechLogoURL}
                altText="Developed at Navigate Technologies"
              />
            }
            technologies={technologies.navtech.plugin}
          />

          <ProjectCard
            title="EVO SEO Member Portal"
            description="Paid value-add for the EVO SEO WordPress plugin which facilitated seamless integration with Google Search Console and Google Analytics."
            imageSrc={evoMemberPortalImageURL}
            LogoElement={
              <Logo
                src={navTechLogoURL}
                altText="Developed at Navigate Technologies"
              />
            }
            technologies={technologies.navtech.memberPortal}
          />

          <ProjectCard
            title="EVO SEO Product Site"
            description="Product information site detailing the features and pricing of the EVO SEO WordPress Plugin."
            imageSrc={evoWebsiteImageURL}
            LogoElement={
              <Logo
                src={navTechLogoURL}
                altText="Developed at Navigate Technologies"
              />
            }
            technologies={technologies.navtech.productSite}
          />
        </GridLayout>
      </Content>
    </Container>
  );
});

export default PortfolioSection;
