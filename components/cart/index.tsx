'use client';

import React from 'react';

import { RiShoppingCartFill } from 'react-icons/ri';
import { Container } from './styles';
import { IProduct } from '../product';
import { useSidebarContext } from '../../context/sidebar';

export const Cart = ({ products }: { products: Array<IProduct> }) => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <RiShoppingCartFill />
      <span>{products.length}</span>
    </Container>
  );
};
