import React from 'react';
import styled from 'styled-components';

import ProjectCard, { ProjectDetails } from '@components/ProjectCard';
import { mobileBreakpoint, tabletBreakpoint } from '@util/breakpoints';

import byTheNumbersImageURL from './assets/images/projects/by-the-numbers.jpg';
import evoMemberPortalImageURL from './assets/images/projects/evo-member-portal.png';
import evoPluginImageURL from './assets/images/projects/evo-plugin.png';
import evoWebsiteImageURL from './assets/images/projects/evo-website.png';
import mansfieldLogoURL from './assets/images/logos/mansfield-logo.png';
import navTechLogoURL from './assets/images/logos/navtech-logo.png';
import pmpGatewayDashboardImageURL from './assets/images/projects/pmp-gateway-dashboard.png';
import pmpLogoURL from './assets/images/logos/pmp-logo.png';
import pmpSalesSiteImageURL from './assets/images/projects/pmp-sales-site.png';
import portfolioV6ImageURL from './assets/images/projects/portfoliov6.png';
import propertyReviewsImageURL from './assets/images/projects/property-reviews.png';
import weatherAppImageURL from './assets/images/projects/weather-app.png';

// Project lookup IDs.
export enum ProjectIDEnums {
  PricematepayGatewayDashboard = 'PricematePayGatewayDashboard',
  PricematepaySalesSite = 'PricematepaySalesSite',
  NavigateTechnologiesEVOPlugin = 'NavigateTechnologiesEVOPlugin',
  NavigateTechnologiesEVOProductSite = 'NavigateTechnologiesEVOProductSite',
  NavigateTechnologiesEVOMemberPortal = 'NavigateTechnologiesEVOMemberPortal',
  MansfieldByTheNumbers = 'MansfieldByTheNumbers',
  PersonalProjectWeatherApp = 'PersonalProjectWeatherApp',
  PersonalProjectPropertyReviewsApp = 'PersonalProjectPropertyReviewsApp',
  PersonalProjectPortfolioV6 = 'PersonalProjectPortfolioV6',
}

// Combines all Projects into one object by Project lookup ID.
export interface ProjectHistory {
  [ProjectIDEnums.PricematepayGatewayDashboard]: ProjectDetails;
  [ProjectIDEnums.PricematepaySalesSite]: ProjectDetails;
  [ProjectIDEnums.NavigateTechnologiesEVOPlugin]: ProjectDetails;
  [ProjectIDEnums.NavigateTechnologiesEVOProductSite]: ProjectDetails;
  [ProjectIDEnums.NavigateTechnologiesEVOMemberPortal]: ProjectDetails;
  [ProjectIDEnums.MansfieldByTheNumbers]: ProjectDetails;
  [ProjectIDEnums.PersonalProjectWeatherApp]: ProjectDetails;
  [ProjectIDEnums.PersonalProjectPropertyReviewsApp]: ProjectDetails;
  [ProjectIDEnums.PersonalProjectPortfolioV6]: ProjectDetails;
}

// All projects.
const projects: ProjectHistory = {
  [ProjectIDEnums.PricematepayGatewayDashboard]: {
    title: 'Pricematepay Gateway Dashboard',
    description:
      'Payment processing and Hosted Invoicing solution that enables organizations to handle credit card payments for their clients.',
    imageURL: pmpGatewayDashboardImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
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
      'Enzyme',
      'Docker',
      'Webpack',
      'Babel',
      'Git',
      'Gerrit',
      'Jenkins CI/CD',
    ],
    logoImageURL: pmpLogoURL,
    logoAltText: 'Developed at Pricematepay',
    demoLink: 'https://gateway.pricematepay.com/',
  },
  [ProjectIDEnums.PricematepaySalesSite]: {
    title: 'Pricematepay Sales Site',
    description:
      'Product information site highlighting the features of the Payment Gateway  to aid the Sales Team in client acquisition.',
    imageURL: pmpSalesSiteImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
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
    logoImageURL: pmpLogoURL,
    logoAltText: 'Developed at Pricematepay',
    demoLink: 'https://pricematepay.com/',
  },
  [ProjectIDEnums.NavigateTechnologiesEVOPlugin]: {
    title: 'EVO SEO WordPress Plugin',
    description:
      'WordPress Plugin to seamlessly add Search Engine Optimizations to a WordPress web property without extensive technical knowledge.',
    imageURL: evoPluginImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
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
    logoImageURL: navTechLogoURL,
    logoAltText: 'Developed at Navigate Technologies',
  },
  [ProjectIDEnums.NavigateTechnologiesEVOMemberPortal]: {
    title: 'EVO SEO Member Portal',
    description:
      'Paid value-add for the EVO SEO WordPress plugin which facilitated seamless integration with Google Search Console and Google Analytics.',
    imageURL: evoMemberPortalImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
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
    logoImageURL: navTechLogoURL,
    logoAltText: 'Developed at Navigate Technologies',
  },
  [ProjectIDEnums.NavigateTechnologiesEVOProductSite]: {
    title: 'EVO SEO Product Site',
    description:
      'Product information site detailing the features and pricing of the EVO SEO WordPress Plugin.',
    imageURL: evoWebsiteImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
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
    logoImageURL: navTechLogoURL,
    logoAltText: 'Developed at Navigate Technologies',
  },
  [ProjectIDEnums.MansfieldByTheNumbers]: {
    title: 'Sentry By The Numbers',
    description:
      'Data fetching algorithm to generate infographics from official NHL game data.',
    imageURL: byTheNumbersImageURL,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'Amazon EC2',
      'MongoDB',
      'SVN',
    ],
    logoImageURL: mansfieldLogoURL,
    logoAltText: 'Developed at Mansfield Inc.',
  },
  [ProjectIDEnums.PersonalProjectWeatherApp]: {
    title: 'Weather App',
    description: 'A simple web application to display the weather.',
    imageURL: weatherAppImageURL,
    technologies: [
      'HTML',
      'CSS',
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Node.js',
      'Express.js',
      'ESLint',
      'Styled Components',
      'Prettier',
      'Stylelint',
      'Git',
      'GitHub',
      'Vercel',
      'OpenWeatherMap',
    ],
    demoLink: 'https://weather-app-tan-two.vercel.app/',
    githubLink: 'https://github.com/Jon1701/weather-app',
  },
  [ProjectIDEnums.PersonalProjectPortfolioV6]: {
    title: 'Portfolio V6',
    description: 'The 6th iteration of my Portfolio. (WIP)',
    imageURL: portfolioV6ImageURL,
    technologies: [
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'TypeScript',
      'Gatsby.js',
      'Styled Components',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Git',
      'GitHub',
    ],
    githubLink: 'https://github.com/Jon1701/portfolio-v6',
  },
  [ProjectIDEnums.PersonalProjectPropertyReviewsApp]: {
    title: 'Property Reviews App',
    description:
      'Full Stack Application which allows users to review residential properties. (WIP)',
    imageURL: propertyReviewsImageURL,
    technologies: [
      'Go',
      'Gonic',
      'GORM',
      'PostgreSQL',
      'Docker',
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'Axios',
      'Styled Components',
      'ESLint',
      'Prettier',
      'Stylelint',
      'Git',
      'GitHub',
    ],
    githubLink: 'https://github.com/Jon1701/property-reviews',
  },
};

// Order of Projects to be displayed.
const projectOrder = [
  ProjectIDEnums.PricematepayGatewayDashboard,
  ProjectIDEnums.PricematepaySalesSite,
  ProjectIDEnums.NavigateTechnologiesEVOPlugin,
  ProjectIDEnums.NavigateTechnologiesEVOMemberPortal,
  ProjectIDEnums.NavigateTechnologiesEVOProductSite,
  ProjectIDEnums.MansfieldByTheNumbers,
  ProjectIDEnums.PersonalProjectWeatherApp,
  ProjectIDEnums.PersonalProjectPortfolioV6,
  ProjectIDEnums.PersonalProjectPropertyReviewsApp,
];

/**
 * Component container.
 */
const Container = styled.section`
  min-height: 100vh;
  padding-bottom: 50px;

  background-color: #181818;
`;

/**
 * Section title.
 */
const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 50px 0;
`;

/**
 * Content container.
 */
const Content = styled.div`
  max-width: 1500px;
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

/**
 * Projects section which displays projects I've worked on.
 */
const ProjectsSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Content>
        <Title>What I've Built Throughout My Career</Title>

        <GridLayout>
          {projectOrder.map((id: ProjectIDEnums) => {
            const {
              title,
              description,
              imageURL,
              technologies,
              logoImageURL,
              logoAltText,
              demoLink,
              githubLink,
            } = projects[id];

            return (
              <ProjectCard
                key={id}
                title={title}
                description={description}
                imageURL={imageURL}
                technologies={technologies}
                logoImageURL={logoImageURL}
                logoAltText={logoAltText}
                demoLink={demoLink}
                githubLink={githubLink}
              />
            );
          })}

          <span />
        </GridLayout>
      </Content>
    </Container>
  );
});

export default ProjectsSection;
