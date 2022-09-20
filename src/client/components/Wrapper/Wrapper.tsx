import React, { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
