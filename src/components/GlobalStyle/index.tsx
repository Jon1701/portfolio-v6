import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { ZenMaruGothicMedium } from '@fonts/index';
import bgURL from './assets/images/backgrounds/polygon-luminary.png';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;

		font-family: "Zen Maru Gothic Medium", sans-serif;
		color: #c4c7c5;

		background: url(${bgURL});
		background-size: cover;
		background-attachment: fixed;
		background-position: center;	
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
    <ZenMaruGothicMedium />
    <GlobalStyle />
  </React.Fragment>
);

export default Wrapped;
