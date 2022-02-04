import React, {ReactNode} from 'react';
import {
  createTheme,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from '@shopify/restyle';
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlexStyle,
  Dimensions,
} from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle | FlexStyle;
};

const {width} = Dimensions.get('screen');
export const aspectRatio = width / 375;

const palette = {
  black: '#000000',
  blue: '#7DCCEC',
  lightBlue: '#D3F2FF',
  grey: '#9A9A9D',
  darkGrey: '#868686',
  lightGrey: '#F5F5F8',
  mediumGrey: '#C4C4C4',
  indigo: '#5956E9',
  ligthIndigo: '#F4F6FA',
  red: '#FA4A0C',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    background: palette.lightGrey,
    primary: palette.indigo,
    text: palette.black,
    white: palette.white,
    blue: palette.blue,
  },
  spacing: {
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 64,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 64,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      color: 'white',
      fontSize: 50,
      fontFamily: 'Raleway-ExtraBold',
      lineHeight: 50,
      textAlign: 'center',
    },
    button: {
      fontFamily: 'Raleway-Bold',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
    },
  },
});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const makeStyle =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const curretTheme = useTheme();
    return styles(curretTheme);
  };

export default theme;
