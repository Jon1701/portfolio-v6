import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import {
  laptopBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from '@util/breakpoints';

import CompanyButton from './components/CompanyButton';
import Details from './components/Details';
import mansfieldLogoURL from './assets/images/mansfield-logo.png';
import navtechLogoURL from './assets/images/navtech-logo.png';
import pricematepayLogoURL from './assets/images/pricematepay-logo.png';

/**
 * Component container.
 */
const Container = styled.div`
  ${mobileBreakpoint`
    flex-flow: column;
    gap: 5px;
  `}

  ${tabletBreakpoint`
    gap: 10px;
  `}

  ${laptopBreakpoint`
    gap: 15px;
  `}

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 25px;
`;

/**
 * Container for the Company buttons.
 */
const ContainerCompanyButtons = styled.ul`
  ${mobileBreakpoint`
    width: 100%;

    li {
      float: left;
      width: calc(100% / 3);
    }
  `}

  margin: 0;
  padding: 0;
  list-style: none;

  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0 4px 5px 0,
    rgb(0 0 0 / 12%) 0 1px 10px 0;
`;

/**
 * Describes props for Container Experience Details component.
 */
interface ContainerExperienceDetailsProps {
  /**
   * Minimum height of the container.
   */
  minHeight: number;
}

/**
 * Container for Work Experience details.
 */
const ContainerExperienceDetails = styled.div<ContainerExperienceDetailsProps>`
  background-color: #202020;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 4px -1px, rgb(0 0 0 / 14%) 0 4px 5px 0,
    rgb(0 0 0 / 12%) 0 1px 10px 0;

  width: 100%;
  min-height: ${props => props.minHeight}px;
`;

export enum CompanyEnums {
  PricematePay = 'PricematePay',
  NavigateTechnologies = 'NavigateTechnologies',
  Mansfield = 'Mansfield',
}

export interface WorkExperienceEntry {
  /**
   * Position held at company.
   */
  position: string;

  /**
   * Company employed at.
   */
  company: string;

  /**
   * Employment start date.
   */
  startDate: Date;

  /**
   * Employment end date.
   */
  endDate: Date;

  /**
   * Array of work duties.
   */
  duties: Array<string>;
}

export interface WorkHistory {
  /**
   * Work Experience at Pricematepay.
   */
  [CompanyEnums.PricematePay]: WorkExperienceEntry;

  /**
   * Work Experience at Navigate Technologies.
   */
  [CompanyEnums.NavigateTechnologies]: WorkExperienceEntry;

  /**
   * Work Experience at Mansfield.
   */
  [CompanyEnums.Mansfield]: WorkExperienceEntry;
}

/**
 * Object containing Work History for all Companies worked at.
 */
export const workHistory: WorkHistory = {
  [CompanyEnums.PricematePay]: {
    position: 'Senior Front-End Software Engineer',
    company: 'Pricematepay',
    startDate: new Date(2019, 2, 1),
    endDate: new Date(2021, 11, 1),
    duties: [
      'Architected and implemented the Payment Gateway dashboard using a responsive and mobile-first approach, leveraging our internal APIs and infrastructure, leading to a successful launch.',
      'Developed and deployed the Product Information Website which aided in several successful client acquisitions and onboarding.',
      'Implemented, tested, and deployed requested features within 3 weeks, building client trust and confidence for a new platform.',
      'Added i18n internationalization support which would have led to expansion into Quebec, the United States, and other markets.',
      'Ensured feasibility of provided designs using a collaborative and iterative design process, which led to consistent branding and user experience.',
      'Improved platform stability by performing QA and filing 100+ reproducible bug reports to be resolved by appropriate teams.',
      'Published documentation to aid developers in creating third-party integrations in order to promote platform growth and longevity.',
    ],
  },
  [CompanyEnums.NavigateTechnologies]: {
    position: 'Front-End Software Engineer',
    company: 'Navigate Technologies',
    startDate: new Date(2017, 2, 1),
    endDate: new Date(2019, 1, 1),
    duties: [
      'Developed the front-end for the EVO SEO Member Portal leveraging responsive design, internal APIs, and Stripe integration, which grew our user base to at least 50 users.',
      'Wrote detailed end-user documentation which resulted in a 20% reduction in customer support requests.',
      'Participated throughout an iterative design process which resulted in the creation of a consistent brand identity across products, including the creation of rich user experiences.',
      'Improved product stability through unit testing, QA, filing and resolution of bug reports within 2 weeks, which led to improvement of overall stability of the product suite.',
    ],
  },
  [CompanyEnums.Mansfield]: {
    position: 'Analytics Developer',
    company: 'Mansfield',
    startDate: new Date(2014, 11, 1),
    endDate: new Date(2016, 0, 1),
    duties: [
      'Developed and deployed a web scraping algorithm to automate the creation of infographics highlighting certain NHL game statistics, reducing creation time from 2.5 hours to less than 1 minute. This removed the need for a designer to create the infographic while the game was in-progress.',
      'Constructed demos highlighting the Big Data Analytics capabilities of the agency, which resulted in gaining at least 5 clients.',
      'Performed data analysis and generated reports containing various KPI’s and metrics used in client shareholder meetings.',
    ],
  },
};

/**
 * Describes component props.
 */
interface Props {
  /**
   * Function to scroll to the top of the section.
   */
  scrollToSection(): void;
}

// Default value of the minimum height.
const minHeightDefaultValue: number = 0;

/**
 * Panel which displays Work Experience.
 */
const WorkExperiencePanel: React.FC<Props> = ({ scrollToSection }: Props) => {
  // Reference to the Container Company Buttons element.
  const refContainerCompanyButtons = useRef<HTMLUListElement>(null);

  // Controls the minimum height of the Container Company Buttons element.
  const [minHeight, setMinHeight] = useState<number>(minHeightDefaultValue);

  // Controls the currently selected company.
  const [selectedCompany, setSelectedCompany] = useState<CompanyEnums>(
    CompanyEnums.PricematePay
  );

  // Destructure Work History.
  const { position, company, startDate, endDate, duties } =
    workHistory[selectedCompany];

  useEffect(() => {
    if (refContainerCompanyButtons === null) {
      return;
    }

    setMinHeight(
      refContainerCompanyButtons.current?.offsetHeight || minHeightDefaultValue
    );
  }, [refContainerCompanyButtons]);

  return (
    <Container>
      <ContainerCompanyButtons ref={refContainerCompanyButtons}>
        <li>
          <CompanyButton
            isSelected={selectedCompany === CompanyEnums.PricematePay}
            companyEnum={CompanyEnums.PricematePay}
            logoURL={pricematepayLogoURL}
            handleClick={() => {
              scrollToSection();
              setSelectedCompany(CompanyEnums.PricematePay);
            }}
            text="Pricematepay"
            accentColor="#b3def5"
          />
        </li>
        <li>
          <CompanyButton
            isSelected={selectedCompany === CompanyEnums.NavigateTechnologies}
            companyEnum={CompanyEnums.NavigateTechnologies}
            logoURL={navtechLogoURL}
            handleClick={() => {
              scrollToSection();
              setSelectedCompany(CompanyEnums.NavigateTechnologies);
            }}
            text="Navigate Technologies"
            accentColor="#23c2b1"
          />
        </li>
        <li>
          <CompanyButton
            isSelected={selectedCompany === CompanyEnums.Mansfield}
            companyEnum={CompanyEnums.Mansfield}
            logoURL={mansfieldLogoURL}
            handleClick={() => {
              scrollToSection();
              setSelectedCompany(CompanyEnums.Mansfield);
            }}
            text="Mansfield"
            accentColor="#df3226"
          />
        </li>
        <span />
      </ContainerCompanyButtons>

      <ContainerExperienceDetails minHeight={minHeight}>
        <Details
          position={position}
          company={company}
          startDate={startDate}
          endDate={endDate}
          duties={duties}
        />
      </ContainerExperienceDetails>
    </Container>
  );
};

export default WorkExperiencePanel;
