import React from 'react';

import { RiShoppingCartFill } from 'react-icons/ri';
import { Container } from './styles';
import { IProduct } from '../product';

export const Cart = ({
  products,
  toggleSidebar,
}: {
  products: Array<IProduct>;
  toggleSidebar: () => void;
}) => {
  return (
    <Container onClick={toggleSidebar}>
      <RiShoppingCartFill />
      <span>{products.length}</span>
    </Container>
  );
};
