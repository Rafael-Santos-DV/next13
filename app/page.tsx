import React from 'react';
import { Footer, FullPage, Header, Main, Section } from './styles';
import { Logo } from '../components/logo';
import { Cart } from '../components/cart';
import { GlobalStyles } from '../components/globalStyles/styles';
import { Products } from '../components/product';
import { Sidebar } from '../components/sidebar';

export default function Page() {
  return (
    <FullPage>
      <GlobalStyles />
      <Header>
        <Logo />
        <Cart />
      </Header>
      <Sidebar />
      <Main>
        <Section>
          <div className='grid'>
            <Products />
          </div>
        </Section>
      </Main>
      <Footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </Footer>
    </FullPage>
  );
}
