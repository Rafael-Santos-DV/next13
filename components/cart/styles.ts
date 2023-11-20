'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 0.4rem 0.9rem;
  gap: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
