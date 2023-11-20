import React from 'react';
import { Checkout, Container, Row } from './styles';
import { IoIosCloseCircle } from 'react-icons/io';

import { ScrollArea } from '@radix-ui/themes';

export const Sidebar = ({
  children,
  toggleSidebar,
}: {
  children: React.ReactNode;
  toggleSidebar: () => void;
}) => {
  return (
    <Container className='sidebar'>
      <Row>
        <h2>Carrinho de Compras</h2>

        <button className='btn-close' onClick={toggleSidebar}>
          <IoIosCloseCircle />
        </button>
      </Row>

      <ScrollArea className='scroll-area'>
        <div className='content'>
          {children}
          {children}
          {children}
          {children}
          {children}
        </div>
      </ScrollArea>

      <div className='separator-amount'>
        <Row style={{ width: '100%', justifyContent: 'space-between' }}>
          <p>Total: </p>
          <p>R$ 500,00</p>
        </Row>

        <Checkout>Finalizar Compra</Checkout>
      </div>
    </Container>
  );
};
