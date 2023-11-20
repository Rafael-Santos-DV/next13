'use client';

import React, { useEffect } from 'react';
import { Footer, FullPage, Header, Main, Section } from './styles';
import { Logo } from '../components/logo';
import { Cart } from '../components/cart';
import { GlobalStyles } from '../components/globalStyles/styles';
import { Product } from '../components/product';
import { Sidebar } from '../components/sidebar';
import { Item } from '../components/item';
import { useAnimate } from 'framer-motion';

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
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
    <FullPage ref={scope}>
      <GlobalStyles />
      <Header>
        <Logo />
        <Cart products={[2, 1]} toggleSidebar={() => setIsOpen(!isOpen)} />
      </Header>
      <Sidebar toggleSidebar={() => setIsOpen(!isOpen)}>
        <Item />
      </Sidebar>
      <Main>
        <Section>
          <div className='grid'>
            <Product
              id={8}
              name='Headset Cloud Stinger'
              brand='HyperX'
              description='O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto qualidade de som superior e maior praticidade.'
              photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp'
              price='600.00'
              createdAt='2023-10-30T16:25:01.093Z'
              updatedAt='2023-10-30T16:25:01.093Z'
            />
          </div>
        </Section>
      </Main>
      <Footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </Footer>
    </FullPage>
  );
}
