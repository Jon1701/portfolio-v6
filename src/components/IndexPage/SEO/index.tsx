import React from 'react';

import opengraphCardImageURL from './assets/images/opengraph-card.png';
import twitterCardImageURL from './assets/images/twitter-card.png';

// Page title.
const title: string = 'Jon Balon — Front-End Developer';

// Meta tag description value.
const description: string =
  'Front-End Developer with 5 years of professional experience working with JavaScript, HTML, and CSS in the React ecosystem.';

// Canonical site URL.
const siteURL: string = 'https://www.jonbalon.com';

interface AddressSchema {
  /**
   * Schema type.
   */
  '@type': 'PostalAddress';

  /**
   * Address country.
   */
  addressCountry: string;

  /**
   * Address locality.
   */
  addressLocality: string;

  /**
   * Address region.
   */
  addressRegion: string;

  /**
   * Postal code.
   */
  postalCode: string;

  /**
   * Street address.
   */
  streetAddress: string;
}

interface PersonSchema {
  /**
   * Schema context.
   */
  '@context': 'https://schema.org';

  /**
   * Schema type.
   */
  '@type': 'Person';

  /**
   * Name.
   */
  name: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Job title
   */
  jobTitle: string;

  /**
   * Alumni of which institution.
   */
  alumniOf: string;

  /**
   * Address.
   */
  address: AddressSchema;

  /**
   * Site URL.
   */
  url: string;

  /**
   * Other URLs.
   */
  sameAs: Array<string>;
}

const personSchema: PersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jon Balon',
  email: 'hello@jonbalon.com',
  jobTitle: 'Front-End Developer',
  alumniOf: 'University of Toronto',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Canada',
    addressLocality: 'Toronto',
    addressRegion: 'Ontario',
    postalCode: '(Redacted)',
    streetAddress: '(Redacted)',
  },
  url: 'https://www.jonbalon.com',
  sameAs: [
    'https://www.github.com/Jon1701',
    'https://www.linkedin.com/in/jonbalon/',
  ],
};

/**
 * Page title.
 */
export const Title: React.FC = () => <title>{title}</title>;

/**
 * Canonical site URL.
 */
export const CanonicalURL: React.FC = () => (
  <link rel="canonical" href={siteURL} />
);

/**
 * Page meta description.
 */
export const MetaDescription: React.FC = () => (
  <meta property="description" content={description} />
);

/**
 * Page meta robots.
 */
export const MetaRobots: React.FC = () => (
  <meta name="robots" content="index, follow" />
);

/**
 * OpenGraph markup.
 */
export const OpenGraphCard: React.FC = () => (
  <React.Fragment>
    <meta property="og:url" content={siteURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${siteURL}${opengraphCardImageURL}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
  </React.Fragment>
);

/**
 * Twitter card markup.
 */
export const TwitterCard: React.FC = () => (
  <React.Fragment>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${siteURL}${twitterCardImageURL}`} />
  </React.Fragment>
);

/**
 * JSON-LD Person Schema markup.
 */
export const PersonJSONLD: React.FC = () => (
  <script type="application/ld+json">
    {JSON.stringify(personSchema, null, 2)}
  </script>
);
