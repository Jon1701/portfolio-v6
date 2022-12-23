import { createGlobalStyle } from 'styled-components';

import ZenMaruGothicBlackTTF from './ZenMaruGothic/ZenMaruGothic-Black.ttf';
import ZenMaruGothicBoldTTF from './ZenMaruGothic/ZenMaruGothic-Bold.ttf';
import ZenMaruGothicLightTTF from './ZenMaruGothic/ZenMaruGothic-Light.ttf';
import ZenMaruGothicMediumTTF from './ZenMaruGothic/ZenMaruGothic-Medium.ttf';
import ZenMaruGothicRegularTTF from './ZenMaruGothic/ZenMaruGothic-Regular.ttf';

export const ZenMaruGothicBlack = createGlobalStyle`
	@font-face {
		font-family: 'Zen Maru Gothic Black';
		src: url(${ZenMaruGothicBlackTTF}) format('truetype');
	}
`;

export const ZenMaruGothicBold = createGlobalStyle`
	@font-face {
		font-family: 'Zen Maru Gothic Bold';
		src: url(${ZenMaruGothicBoldTTF}) format('truetype');
	}
`;

export const ZenMaruGothicLight = createGlobalStyle`
	@font-face {
		font-family: 'Zen Maru Gothic Light';
		src: url(${ZenMaruGothicLightTTF}) format('truetype');
	}
`;

export const ZenMaruGothicMedium = createGlobalStyle`
	@font-face {
		font-family: 'Zen Maru Gothic Medium';
		src: url(${ZenMaruGothicMediumTTF}) format('truetype');
	}
`;

export const ZenMaruGothicRegular = createGlobalStyle`
	@font-face {
		font-family: 'Zen Maru Gothic Regular';
		src: url(${ZenMaruGothicRegularTTF}) format('truetype');
	}
`;
