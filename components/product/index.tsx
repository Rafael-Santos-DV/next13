'use client';

import React from 'react';
import * as components from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { getProducts } from '../../utils/mksCient';
import { useQuery } from 'react-query';
import { Skeleton } from '../skeleton';

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
  const { data, error, isLoading } = useQuery<{
    count: number;
    products: IProduct[];
  }>({
    queryKey: 'mks-products',
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return getProducts({ orderBy: 'ASC', page: 1, rows: 8, sortBy: 'name' });
    },
  });

  if (isLoading) return <Skeleton skeletons={8} />;

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
      <components.Button>
        <HiMiniShoppingBag className='icon' />
        <p>Comprar</p>
      </components.Button>
    </components.Product>
  ));
};
