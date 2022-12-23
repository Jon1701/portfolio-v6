import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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

export default GlobalStyle;
