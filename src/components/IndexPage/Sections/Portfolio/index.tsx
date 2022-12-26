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
          />

          <ProjectCard
            title="Pricematepay Sales Site"
            description="Product information site highlighting the features of the Payment Gateway Platform to aid the Sales Team in client acquisition."
            imageSrc={pmpSalesSiteImageURL}
            LogoElement={
              <Logo src={pmpLogoURL} altText="Developed at Pricematepay" />
            }
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
          />
        </GridLayout>
      </Content>
    </Container>
  );
});

export default PortfolioSection;
