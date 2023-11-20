import React from 'react';
import { Footer, FullPage, Header, Main, Section } from './styles';
import { Logo } from '../components/logo';
import { Cart } from '../components/cart';
import { GlobalStyles } from '../components/globalStyles/styles';
import { Product } from '../components/product';

export default function Page() {
  return (
    <FullPage>
      <GlobalStyles />
      <Header>
        <Logo />
        <Cart products={[2, 1]} />
      </Header>
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
