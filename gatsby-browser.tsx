import type { GatsbyBrowser } from 'gatsby';

import WrapPageElement from '@components/WrapPageElement';

export const wrapPageElement = WrapPageElement<
  GatsbyBrowser['wrapPageElement']
>;
