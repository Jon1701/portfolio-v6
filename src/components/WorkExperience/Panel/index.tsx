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
    position: 'Front-End Software Engineer',
    company: 'Pricematepay Inc.',
    startDate: new Date(2019, 2, 1),
    endDate: new Date(2021, 11, 1),
    duties: [
      'Developed, tested, and maintained the Payment Gateway dashboard with a responsive, mobile-first approach.',
      'Built and deployed the product information and sales site to aid the sales and marketing teams in client acquisition and conversion.',
      'Collaborated with cross-functional teams to ensure seamless integration between platform components.',
      'Worked with the UI/UX designer and provided feedback on various designs to maintain a balance between features and functionality.',
      'Performed code reviews, filed reproducible bug reports, and participated in weekly sprint planning.',
      'Aided in the setup of the company virtual office.',
      'Documented business and development processes to aid in daily operations and onboarding of future team members.',
    ],
  },
  [CompanyEnums.NavigateTechnologies]: {
    position: 'Front-End Software Engineer',
    company: 'Navigate Technologies Inc.',
    startDate: new Date(2017, 2, 1),
    endDate: new Date(2019, 1, 1),
    duties: [
      'Championed the development of the EVO SEO WordPress plugin which allowed users to add SEO to their web properties.',
      'Developed the Member Portal as a paid integration for the plugin.',
      'Collaborated with cross-functional teams to develop, design, and test features in a timely manner.',
      'Converted the product information and sales site to leverage our existing processes and deployment infrastructure, and to track changes instead of directly modifying production.',
      'Worked with the User Experience and Design teams and provided feedback on designs and functionality.',
      'Performed code reviews and QA, filed reproducible bug reports, and participated in weekly sprint planning.',
    ],
  },
  [CompanyEnums.Mansfield]: {
    position: 'Analytics Developer',
    company: 'Mansfield Inc.',
    startDate: new Date(2014, 11, 1),
    endDate: new Date(2016, 0, 1),
    duties: [
      'Developed and maintained a web scraping algorithm used to generate infographics highlighting player and game statistics for NHL games.',
      'Constructed demos highlighting the Big Data Analytics capabilities of the agency.',
      'Worked with other Analytics Developers to generate reports containing various KPI’s and metrics for clients using Big Data Analytics and traditional analysis techniques.',
      'Set up and maintained development environments and code repositories for the agency.',
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
