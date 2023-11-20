import React from 'react';
import { IoMdClose } from 'react-icons/io';
import * as components from './styles';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import Image from 'next/image';

export const Item = () => {
  return (
    <components.Item>
      <button>
        <IoMdClose />
      </button>
      <div className='wrapper'>
        <components.Row>
          <Image
            alt=''
            src='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp'
            width={100}
            height={80}
          />
        </components.Row>
        <components.Name>Apple Watch Series 4 GPS</components.Name>
        <components.Row>
          <components.Box>
            <span>Qtd: </span>
            <div>
              <CiCircleMinus className='circle-icon minus' />

              <components.Amount>1</components.Amount>
              <CiCirclePlus className='circle-icon plus' />
            </div>
          </components.Box>
          <components.Price>R$ 2000.00</components.Price>
        </components.Row>
      </div>
    </components.Item>
  );
};
