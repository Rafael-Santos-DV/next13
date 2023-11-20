import React from 'react';
import { Footer, FullPage, Header, Main } from './styles';
import { Logo } from '../components/logo';
import { Cart } from '../components/cart';
import { GlobalStyles } from '../components/globalStyles/styles';

export default function Page() {
  return (
    <FullPage>
      <GlobalStyles />
      <Header>
        <Logo />
        <Cart products={[2, 1]} />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </FullPage>
  );
}
