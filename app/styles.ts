'use client';

import styled from 'styled-components';

export const FullPage = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 100%;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.cobaltBlue};
  padding: 2rem 3.4rem;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.main`
  background-color: ${({ theme: { colors } }) => colors.lightWhite};
`;

export const Footer = styled.footer``;
