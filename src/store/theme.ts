import { writable } from "svelte/store";

export type ColourGroup = Readonly<{
  main: string,
  dark: string,
  light: string,
  contrastText: string,
}>;

export type Palette = Readonly<{
  common: {
    black: string,
    white: string,
  },
  primary: ColourGroup,
  secondary: ColourGroup,
}>;

export type Value<T> = Readonly<T | T[]>;

export type ElementTypography = Readonly<{
  fontSize: Value<number>, /* rem */
  lineHeight: Value<number>,
  letterSpacing: Value<number> /* rem */
}>;

export type Typography = Readonly<{
  h1: ElementTypography,
  h2: ElementTypography,
  h3: ElementTypography,
  subtitle: ElementTypography,
  body1: ElementTypography,
  body2: ElementTypography,
  caption: ElementTypography
}>;

export type Theme = Readonly<{
  margin: string,
  palette: Palette,
  typography: Typography
}>;

export type ThemeKey = keyof typeof themes;

const BREAKPOINTS = {
  xs: 0,
  sm: 481,
  md: 769,
  lg: 1025,
  xl: 2561
} as const;

export const getValue = <T> (v:Value<T>, idx = 0):T => {
  if (!Array.isArray(v)) {
    return (v as T);
  }
  if (idx >= v.length) {
    return v[idx - 1];
  }
  return v[idx];
};

export const mediaQuery = (size:keyof typeof BREAKPOINTS) => 
  `@media screen and (max-width: ${BREAKPOINTS[size]}px)`;

export const toCss = ({ palette, typography, margin }:Theme):string => {
  const base = `
    --bg-header: ${palette.common.black};
    --text-header: ${palette.common.white};
    --bg-nav: ${palette.common.white};
    --bg-main: ${palette.primary.main};
    --bg-secondary: ${palette.secondary.main};
    --text: ${palette.primary.contrastText};
    --text-nav: ${palette.common.black};
    --margin: ${margin};
  `;

  const type = Object.entries(typography).map(([ key, val ]) => `
    --fontsize-${key}-xs: ${getValue(val.fontSize)}rem;
    --fontsize-${key}-sm: ${getValue(val.fontSize, 1)}rem;
    --fontsize-${key}-md: ${getValue(val.fontSize, 2)}rem;
    --fontsize-${key}-lg: ${getValue(val.fontSize, 3)}rem;
    --fontsize-${key}-xl: ${getValue(val.fontSize, 4)}rem;
    --lineheight-${key}-xs: ${getValue(val.lineHeight)};
    --lineheight-${key}-sm: ${getValue(val.lineHeight, 1)};
    --lineheight-${key}-md: ${getValue(val.lineHeight, 2)};
    --lineheight-${key}-lg: ${getValue(val.lineHeight, 3)};
    --lineheight-${key}-xl: ${getValue(val.lineHeight, 4)};
    --letterspacing-${key}-xs: ${getValue(val.letterSpacing)}rem;
    --letterspacing-${key}-sm: ${getValue(val.letterSpacing, 1)}rem;
    --letterspacing-${key}-md: ${getValue(val.letterSpacing, 2)}rem;
    --letterspacing-${key}-lg: ${getValue(val.letterSpacing, 3)}rem;
    --letterspacing-${key}-xl: ${getValue(val.letterSpacing, 4)}rem;
  `).join('');

  return `${base}${type}`;
};

const themes: { [index: string]: Theme } = {
  default: {
    margin: '20px',
    palette: {
      common: {
        black: '#111111',
        white: '#FFFFFF',
      },
      primary: {
        main: '#FFFFFF',
        dark: '#FFFFFF',
        light: '#FFFFFF',
        contrastText: '#111111',
      },
      secondary: {
        main: '#111111',
        light: '#111111',
        dark: '#111111',
        contrastText: '#FFFFFF',
      }
    },
    typography: {
      h1: {
        fontSize: [2, 2, 4, 4, 8],
        lineHeight: 1.2,
        letterSpacing: [0.4, 0.4, 0.8]
      },
      h2: {
        fontSize: [1.5, 1.5, 1.5, 1.5, 3],
        lineHeight: 1.8,
        letterSpacing: 0.3
      },
      h3: {
        fontSize: [1, 1, 1.2, 1.2, 1.5],
        lineHeight: 1.8,
        letterSpacing: 0.3
      },
      subtitle: {
        fontSize: [1.5, 1.5, 1.5, 1.5, 3],
        lineHeight: 2,
        letterSpacing: 0.5
      },
      body1: {
        fontSize: [1.2, 1.2, 1.2, 1.2, 2.4],
        lineHeight: 1.8,
        letterSpacing: 0.1
      },
      body2: {
        fontSize: [0.8, 0.8, 0.8, 0.8, 1.6],
        lineHeight: 1.5,
        letterSpacing: 0.2
      },
      caption: {
        fontSize: [1.2, 1.2, 1.2, 1.2, 2.4],
        lineHeight: 1.5,
        letterSpacing: 0.2
      }
    }
  }
} as const;

const ThemeStore = () => {
  const { subscribe, set } = writable<Theme>(themes.default);
  return { 
    subscribe,
    set: (theme: ThemeKey) => set(themes[theme]),
  };
};

export default ThemeStore();