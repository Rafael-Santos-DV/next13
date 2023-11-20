'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    cobaltBlue: '#0F52BA',
    white: '#FFFFFF',
    lightWhite: '#F9F9F9',
  },
  fonts: {},
  fontSizes: {},
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
