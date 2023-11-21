'use client';

import styled from 'styled-components';

export const FullPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  align-content: space-between;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.cobaltBlue};
  padding: 2rem 3.4rem;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.main`
  background-color: ${({ theme: { colors } }) => colors.lightWhite};
  padding: 3rem 1rem;
  height: 100%;
  overflow-y: scroll;
`;

export const Section = styled.section`
  width: 100%;

  > div.grid {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    /* place-items: center; */
    gap: 2rem 0.6rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
  text-align: center;
  padding: 1rem;
`;
