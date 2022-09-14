import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Wrapper;
