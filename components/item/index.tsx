import React from 'react';
import { IoMdClose } from 'react-icons/io';
import * as components from './styles';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import Image from 'next/image';
import { IProduct } from '../../context/sidebar';
import { useQuery, useQueryClient } from 'react-query';
import * as CartClient from '../../utils/cartClient';

export const Item = (props: IProduct) => {
  const queryClient = useQueryClient();

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

  const handleRemoveItemFromCart = async (id: number) => {
    CartClient.removeCart('cart_items', id);
    await queryClient.refetchQueries({
      queryKey: 'mks-cart-prices',
      active: true,
    });
  };

  const handleDeleteItemFromCart = async (id: number) => {
    CartClient.deleteItem('cart_items', id);
    await queryClient.refetchQueries({
      queryKey: 'mks-cart-prices',
      active: true,
    });
  };

  return (
    <components.Item>
      <button onClick={() => handleDeleteItemFromCart(props.id)}>
        <IoMdClose />
      </button>
      <div className='wrapper'>
        <components.Row>
          <Image alt={props.name} src={props.photo} width={100} height={80} />
        </components.Row>
        <components.Name>Apple Watch Series 4 GPS</components.Name>
        <components.Row className='last-row'>
          <components.Box>
            <span>Qtd: </span>
            <div>
              <CiCircleMinus
                className='circle-icon minus'
                role='button'
                onClick={() => handleRemoveItemFromCart(props.id)}
              />
              <components.Amount>{props.count}</components.Amount>
              <CiCirclePlus
                className='circle-icon plus'
                role='button'
                onClick={() => handleAddToCart(props.id)}
              />
            </div>
          </components.Box>
          <components.Price>
            {parseFloat(props.price).toLocaleString('pt-br', {
              currency: 'BRL',
              style: 'currency',
            })}
          </components.Price>
        </components.Row>
      </div>
    </components.Item>
  );
};
