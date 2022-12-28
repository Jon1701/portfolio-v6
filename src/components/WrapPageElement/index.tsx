import React from 'react';

import GlobalStyle from '@components/GlobalStyle';

/**
 * T: GatsbyBrowser or GatsbySSR.
 */
interface Props<T> {
  /**
   * The "Page" React Element built by Gatsby.
   */
  element: React.ReactElement<T, string | React.JSXElementConstructor<T>>;
}

/**
 * Sets wrapper components around pages that won't get unmounted on page change.
 */
const WrapPageElement = <T extends unknown>({ element }: Props<T>) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {element}
    </React.Fragment>
  );
};

export default WrapPageElement;
