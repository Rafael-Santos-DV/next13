'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.montserrat};
}


html, body {
    height: 100%;
}
`;
