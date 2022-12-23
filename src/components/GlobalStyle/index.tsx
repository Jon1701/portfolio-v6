import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ZenMaruGothicRegular } from '@fonts/index';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;

		font-family: "Zen Maru Gothic Regular", sans-serif;
		background-color: #121212;
		color: #C4C7C5;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}
`;

/**
 * Global stylesheet.
 */
const Wrapped: React.FC = () => (
  <React.Fragment>
    <ZenMaruGothicRegular />
    <GlobalStyle />
  </React.Fragment>
);

export default Wrapped;
