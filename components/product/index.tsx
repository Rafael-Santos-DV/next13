'use client';

import React from 'react';
import * as components from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { getProducts } from '../../utils/mksCient';
import { useQuery, useQueryClient } from 'react-query';
import { Skeleton } from '../skeleton';
import * as CartClient from '../../utils/cartClient';

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export const Products = () => {
  const { data, isLoading } = useQuery<{
    count: number;
    products: IProduct[];
  }>({
    queryKey: 'mks-products',
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return getProducts({ orderBy: 'ASC', page: 1, rows: 8, sortBy: 'name' });
    },
  });
  const queryClient = useQueryClient();

  if (isLoading) return <Skeleton skeletons={8} />;

  const handleAddToCart = async (id: number) => {
    CartClient.addCart('cart_items', {
      count: 1,
      id,
    });
    await queryClient.refetchQueries({
      queryKey: 'mks-cart-prices',
      active: true,
    });
  };

  return data?.products.map((product) => (
    <components.Product key={product.id}>
      <Link href='#'>
        <Image
          src={product.photo}
          width={150}
          height={150}
          alt={product.name}
        />
        <components.Row className='row-name-price'>
          <components.Title>{product.name}</components.Title>
          <components.Price>
            {parseFloat(product.price).toLocaleString('pt-br', {
              currency: 'BRL',
              style: 'currency',
            })}
          </components.Price>
        </components.Row>
        <components.Description>
          {product.description.length >= 48
            ? product.description.slice(0, 48) + '...'
            : product.description}
        </components.Description>
      </Link>
      <components.Button onClick={() => handleAddToCart(product.id)}>
        <HiMiniShoppingBag className='icon' />
        <p>Comprar</p>
      </components.Button>
    </components.Product>
  ));
};
