import React from 'react';
import styled from 'styled-components';

import ProjectCard from '@components/ProjectCard';
import { mobileBreakpoint, tabletBreakpoint } from '@util/breakpoints';

import byTheNumbersImageURL from './assets/images/by-the-numbers.png';
import evoMemberPortalImageURL from './assets/images/evo-member-portal.png';
import evoPluginImageURL from './assets/images/evo-plugin.png';
import evoWebsiteImageURL from './assets/images/evo-website.png';
import Logo from './components/Logo';
import mansfieldLogoURL from './assets/images/mansfield-logo.png';
import navTechLogoURL from './assets/images/navtech-logo.png';
import pmpGatewayDashboardImageURL from './assets/images/pmp-gateway-dashboard.png';
import pmpLogoURL from './assets/images/pmp-logo.png';
import pmpSalesSiteImageURL from './assets/images/pmp-sales-site.png';
import portfolioV6ImageURL from './assets/images/portfoliov6.png';
import weatherAppImageURL from './assets/images/weather-app.png';

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
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;

  gap: 2%;

  & > * {
    flex-basis: 48%;

    &:not(:last-child) {
      margin-bottom: 2%;
    }
  }

  ${mobileBreakpoint`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 50px;
  padding: 0 5px;
`}

  ${tabletBreakpoint`
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  
  gap: 1%;
`}
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
  mansfield: {
    byTheNumbers: ['Python', 'Flask', 'Amazon EC2', 'MongoDB', 'SVN'],
  },
  personal: {
    weatherApp: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Express.js',
      'ESLint',
      'Styled Components',
      'Prettier',
      'Stylelint',
      'Vercel',
      'OpenWeatherMap',
    ],
    portfoliov6: [
      'React',
      'TypeScript',
      'Gatsby.js',
      'Styled Components',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Git',
      'GitHub',
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
            demoHref="https://gateway.pricematepay.com/"
          />

          <ProjectCard
            title="Pricematepay Sales Site"
            description="Product information site highlighting the features of the Payment Gateway Platform to aid the Sales Team in client acquisition."
            imageSrc={pmpSalesSiteImageURL}
            LogoElement={
              <Logo src={pmpLogoURL} altText="Developed at Pricematepay" />
            }
            technologies={technologies.pricematePay.salesSite}
            demoHref="https://pricematepay.com/"
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

          <ProjectCard
            title="Sentry By The Numbers"
            description="Data fetching algorithm to generate infographics from official NHL game data."
            imageSrc={byTheNumbersImageURL}
            LogoElement={
              <Logo
                src={mansfieldLogoURL}
                altText="Developed at Mansfield Inc."
              />
            }
            technologies={technologies.mansfield.byTheNumbers}
          />

          <ProjectCard
            title="Weather App"
            description="A simple web application to display the weather."
            imageSrc={weatherAppImageURL}
            technologies={technologies.personal.weatherApp}
            demoHref="https://weather-9wlky8dr3-development-jonbaloncom.vercel.app/"
            githubHref="https://github.com/Jon1701/weather-app"
          />

          <ProjectCard
            title="Portfolio V6"
            description="The 6th iteration of my Portfolio."
            imageSrc={portfolioV6ImageURL}
            technologies={technologies.personal.portfoliov6}
            githubHref="https://github.com/Jon1701/portfolio-v6"
          />
        </GridLayout>
      </Content>
    </Container>
  );
});

export default PortfolioSection;
