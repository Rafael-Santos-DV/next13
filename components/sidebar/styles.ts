'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme: { colors } }) => colors.cobaltBlue};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate(100%);
  height: 100vh;

  .scroll-area {
    & div.content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  display: flex;
  flex-direction: column;

  & .separator-amount {
    color: white;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 18rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  justify-content: space-between;
  gap: 5px;

  h2 {
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.white};

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  > button.btn-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2.5rem;
  }
`;

export const Checkout = styled.button`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0.8rem 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
