import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import Theme from '../lib/theme';
import '@radix-ui/themes/styles.css';

import { Theme as RadixTheme } from '@radix-ui/themes';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const montserratLight = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat-light',
  weight: '100',
});

export const metadata: Metadata = {
  title: 'MKS Front-end challenge',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={`${montserrat.variable} ${montserratLight.variable}`}>
        <StyledComponentsRegistry>
          <RadixTheme>
            <Theme>{children}</Theme>
          </RadixTheme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
