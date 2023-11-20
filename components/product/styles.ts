'use client';

import styled from 'styled-components';

export const Product = styled.article`
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.montserratLight};
  overflow: hidden;

  img {
    max-width: 200px;
    height: auto;
  }

  > a {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1.2rem;
    gap: 0.8rem;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 1rem;
`;

export const Price = styled.strong`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.4rem;
  font-size: 0.7rem;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.charcoal};
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.montserratLight};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.cobaltBlue};
  color: ${({ theme }) => theme.colors.white};

  > p {
    font-weight: bold;
  }

  > .icon {
    font-size: 1.2rem;
  }
`;
