'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 200px;
    max-width: 250px;
    gap: 0.3rem;

    .skeleton-img {
      width: 100%;
      padding: 4rem 0;
    }

    > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;

      .skeleton-price,
      .skeleton-name {
        padding: 0.4rem;
      }
    }

    .skeleton-buy {
      padding: 0.5rem;
    }
  }
`;

export const Box = styled.div``;
