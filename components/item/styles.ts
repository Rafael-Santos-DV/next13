'use client';

import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 380px;
  border-radius: 1rem;
  padding: 0.4rem 0.5rem;
  gap: 0.2rem;
  margin: 0.5rem 0;
  position: relative;
  z-index: 1;

  > div.wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 0.3rem;

    & img {
      width: 70px;
      height: auto;
    }
  }

  button {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(10%, -20%);
    z-index: 2;
    background-color: black;
    border-radius: 50%;
    color: white;
    align-items: center;
    justify-content: center;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Name = styled.p`
  font-size: 0.6rem;
`;

export const Box = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    align-items: center;
  }

  & .circle-icon {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Amount = styled.p`
  font-size: 1.2rem;
`;

export const Price = styled.p`
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.4rem;
  font-size: 0.5rem;
  flex-wrap: nowrap;
`;
