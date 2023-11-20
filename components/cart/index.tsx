import React from 'react';

import { RiShoppingCartFill } from 'react-icons/ri';
import { Container } from './styles';

export const Cart = ({ products }: { products: Array<any> }) => {
  return (
    <Container>
      <RiShoppingCartFill />
      <span>{products.length}</span>
    </Container>
  );
};
