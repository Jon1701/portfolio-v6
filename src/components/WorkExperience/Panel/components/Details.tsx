import React from 'react';
import { endOfMonth, format, startOfMonth } from 'date-fns';
import styled from 'styled-components';

import { WorkExperienceEntry } from '..';
import { tabletBreakpoint } from '@util/breakpoints';

// Token used to format Dates.
const DATE_FORMAT_TOKEN = 'MMMM yyyy';

/**
 * Component container.
 */
const Container = styled.article`
  padding: 25px;

  ${tabletBreakpoint`
    min-height: 500px;
  `}
`;

/**
 * Sets content to boldface using font variation.
 */
const Bold = styled.span`
  font-family: 'Zen Maru Gothic Black', sans-serif;
`;

/**
 * Work Experience details.
 */
const Details: React.FC<WorkExperienceEntry> = ({
  position,
  company,
  startDate,
  endDate,
  duties,
}: WorkExperienceEntry) => {
  const formattedStartDate = format(startOfMonth(startDate), DATE_FORMAT_TOKEN);

  return (
    <Container>
      <Bold>{position}</Bold> at <Bold>{company}</Bold>
      <div>
        {formattedStartDate} &#x2014;{' '}
        {endDate !== undefined
          ? format(endOfMonth(endDate), DATE_FORMAT_TOKEN)
          : 'present'}
      </div>
      <ul>
        {duties.map(item => {
          const key = item.trim().toLowerCase().replaceAll(' ', '-');

          return <li key={key}>{item}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Details;
