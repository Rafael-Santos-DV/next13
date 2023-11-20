'use client';

import styled from 'styled-components';

export const Box = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  display: flex;
  gap: 0.2rem;
  align-items: center;

  > strong:first-of-type {
    text-transform: uppercase;
    font-size: 2rem;
  }

  > strong:last-of-type {
    font-family: ${({ theme }) => theme.fonts.montserratLight};
  }
`;
