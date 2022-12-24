import React from 'react';
import styled from 'styled-components';

import ProjectCard from '@components/ProjectCard';

import evoMemberPortalImageURL from './assets/images/evo-member-portal.png';
import evoPluginImageURL from './assets/images/evo-plugin.png';
import evoWebsiteImageURL from './assets/images/evo-website.png';
import pmpGatewayDashboardImageURL from './assets/images/pmp-gateway-dashboard.png';
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
          />

          <ProjectCard
            title="Pricematepay Sales Site"
            description="Product information site highlighting the features of our Payment Gateway Platform in order to aid the sales team in client acquisition."
            imageSrc={pmpSalesSiteImageURL}
          />

          <ProjectCard
            title="EVO SEO WordPress Plugin"
            description="Plugin to seamlessly add Search Engine Optimizations to a WordPress web property."
            imageSrc={evoPluginImageURL}
          />

          <ProjectCard
            title="EVO SEO Member Portal"
            description="Paid value-add for the EVO SEO WordPress plugin which facilitated seamless integration with Google Search Console and Google Analytics."
            imageSrc={evoMemberPortalImageURL}
          />

          <ProjectCard
            title="EVO SEO Product Site"
            description="Product information site detailing the features and pricing of the EVO SEO WordPress Plugin."
            imageSrc={evoWebsiteImageURL}
          />
        </GridLayout>
      </Content>
    </Container>
  );
});

export default PortfolioSection;
