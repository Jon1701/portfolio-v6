export interface Range {
  /**
   * Start of range.
   */
  min: number;

  /**
   * End of range.
   */
  max: number;
}

export interface Breakpoints {
  /**
   * Breakpoints for Mobile devices.
   */
  mobile: Range;

  /**
   * Breakpoints for Tablet devices.
   */
  tablet: Range;

  /**
   * Breakpoints for Laptop devices.
   */
  laptop: Range;

  /**
   * Breakpoints for Desktop devices.
   */
  desktop: Range;

  /**
   * Breakpoints for TV devices.
   */
  tv: Range;
}

// Object defining all breakpoints for all devices.
export const breakpoints: Breakpoints = Object.freeze({
  mobile: {
    min: 0,
    max: 480,
  },
  tablet: {
    min: 481,
    max: 768,
  },
  laptop: {
    min: 769,
    max: 1024,
  },
  desktop: {
    min: 1025,
    max: 1200,
  },
  tv: {
    min: 1201,
    max: 99999,
  },
});

/**
 * Generates CSS rules for the Mobile breakpoint.
 *
 * @param rules CSS rules.
 * @returns CSS rules for the Mobile breakpoint.
 */
export const mobileBreakpoint = (rules: TemplateStringsArray): string =>
  `@media screen
		and (min-device-width: ${breakpoints.mobile.min}px)
		and (max-device-width: ${breakpoints.mobile.max}px) {
			${String(rules)}
	}`;

/**
 * Generates CSS rules for the Tablet breakpoint.
 *
 * @param rules CSS rules.
 * @returns CSS rules for the Tablet breakpoint.
 */
export const tabletBreakpoint = (rules: TemplateStringsArray): string =>
  `@media screen
		and (min-device-width: ${breakpoints.tablet.min}px)
		and (max-device-width: ${breakpoints.tablet.max}px) {
			${String(rules)}
	}`;

/**
 * Generates CSS rules for the Laptop breakpoint.
 *
 * @param rules CSS rules.
 * @returns CSS rules for the Laptop breakpoint.
 */
export const laptopBreakpoint = (rules: TemplateStringsArray): string =>
  `@media screen
		and (min-device-width: ${breakpoints.laptop.min}px)
		and (max-device-width: ${breakpoints.laptop.max}px) {
			${String(rules)}
	}`;

/**
 * Generates CSS rules for the Desktop breakpoint.
 *
 * @param rules CSS rules.
 * @returns CSS rules for the Desktop breakpoint.
 */
export const desktopBreakpoint = (rules: TemplateStringsArray): string =>
  `@media screen
		and (min-device-width: ${breakpoints.desktop.min}px)
		and (max-device-width: ${breakpoints.desktop.max}px) {
			${String(rules)}
	}`;

/**
 * Generates CSS rules for the TV breakpoint.
 *
 * @param rules CSS rules.
 * @returns CSS rules for the TV breakpoint.
 */
export const tvBreakpoint = (rules: TemplateStringsArray): string =>
  `@media screen
		and (min-device-width: ${breakpoints.tv.min}px)
		and (max-device-width: ${breakpoints.tv.max}px) {
			${String(rules)}
	}`;
