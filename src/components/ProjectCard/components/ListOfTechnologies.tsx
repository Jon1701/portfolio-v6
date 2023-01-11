import React from 'react';
import styled from 'styled-components';

interface Props {
  /**
   * Array of technologies.
   */
  items: Array<string>;
}

/**
 * Component container.
 */
const Container = styled.ul`
  font-size: 1.25em;
  font-family: monospace;

  list-style: none;
  padding: 0 15px;

  li {
    float: left;
    border: solid 1px #fff;
    border-radius: 5px;
    padding: 3px;
    margin-bottom: 5px;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

/**
 * Displays a styled List of Technologies.
 */
const ListOfTechnologies: React.FC<Props> = ({ items }: Props) => {
  return (
    <React.Fragment>
      <Container>
        {items.map((item: string) => {
          const text: string = item.trim();
          const key: string = text.toLowerCase().replaceAll(' ', '-');

          return <li key={key}>{text}</li>;
        })}
      </Container>
      <span
        style={{
          content: '',
          clear: 'both',
          display: 'table',
          paddingBottom: '15px',
        }}>
        {/** clearfix */}
      </span>
    </React.Fragment>
  );
};

export default ListOfTechnologies;
