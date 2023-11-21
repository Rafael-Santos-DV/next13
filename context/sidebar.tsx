'use client';

import React, { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
import { cartTotal } from '../utils/mksCient';
import { getCart } from '../utils/cartClient';

export interface IProduct {
  amount: number;
  brand: string;
  count: number;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
}

const SidebarContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    products: { cart_items: Array<IProduct>; count: number; total: number };
  }
);

export const SidebarContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isLoading, data } = useQuery({
    queryKey: 'mks-cart-prices',
    queryFn: async () => {
      return cartTotal(getCart('cart_items') || []);
    },
  });

  if (isLoading) return 'loading...';

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, products: data }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
