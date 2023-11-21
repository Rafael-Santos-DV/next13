'use client';

import React from 'react';

import { RiShoppingCartFill } from 'react-icons/ri';
import { Container } from './styles';
import { useSidebarContext } from '../../context/sidebar';

export const Cart = () => {
  const { isOpen, setIsOpen, products } = useSidebarContext();

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <RiShoppingCartFill />
      <span>{products.count}</span>
    </Container>
  );
};
