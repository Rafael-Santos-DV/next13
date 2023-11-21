'use client';

import React from 'react';
import { Checkout, Container, Row } from './styles';
import { IoIosCloseCircle } from 'react-icons/io';

import { ScrollArea } from '@radix-ui/themes';
import { useAnimate } from 'framer-motion';
import { useSidebarContext } from '../../context/sidebar';
import { Item } from '../item';

export const Sidebar = () => {
  const { isOpen, setIsOpen, products } = useSidebarContext();

  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'div.sidebar',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
        ]
      : [['div.sidebar', { transform: 'translateX(100%)' }, { at: '-0.1' }]];

    animate(menuAnimations);
  }, [isOpen]);

  return (
    <div ref={scope}>
      <Container className='sidebar'>
        <Row>
          <h2>Carrinho de Compras</h2>

          <button className='btn-close' onClick={() => setIsOpen(!isOpen)}>
            <IoIosCloseCircle />
          </button>
        </Row>

        <ScrollArea className='scroll-area'>
          <div className='content'>
            {products.cart_items.map((product) => (
              <Item key={product.id} {...product} />
            ))}
          </div>
        </ScrollArea>

        <div className='separator-amount'>
          <Row style={{ width: '100%', justifyContent: 'space-between' }}>
            <p>Total: </p>
            <p>
              {products.total.toLocaleString('pt-br', {
                currency: 'BRL',
                style: 'currency',
              })}
            </p>
          </Row>

          <Checkout>Finalizar Compra</Checkout>
        </div>
      </Container>
    </div>
  );
};
