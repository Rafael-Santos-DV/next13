import React from 'react';
import * as components from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { HiMiniShoppingBag } from 'react-icons/hi2';

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

export const Product = (props: IProduct) => {
  return (
    <components.Product>
      <Link href='#'>
        <Image src={props.photo} width={150} height={150} alt={props.name} />
        <components.Row>
          <components.Title>{props.name}</components.Title>
          <components.Price>
            {parseFloat(props.price).toLocaleString('pt-br', {
              currency: 'BRL',
              style: 'currency',
            })}
          </components.Price>
        </components.Row>
        <components.Description>
          {props.description.length >= 48
            ? props.description.slice(0, 48) + '...'
            : props.description}
        </components.Description>
      </Link>
      <components.Button>
        <HiMiniShoppingBag className='icon' />
        <p>Comprar</p>
      </components.Button>
    </components.Product>
  );
};
