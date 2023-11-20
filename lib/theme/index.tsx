'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    cobaltBlue: '#0F52BA',
    white: '#FFFFFF',
    lightWhite: '#F9F9F9',
    darkGray: '#373737',
    charcoal: '#2C2C2C',
    lightGray: '#EEEEEE',
    black: '#000000',
  },
  fonts: {
    montserrat: 'var(--font-montserrat)',
    montserratLight: 'var(--font-montserrat-light)',
  },
  fontSizes: {},
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
