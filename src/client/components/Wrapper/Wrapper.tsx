import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__container">{children}</div>
    </div>
  );
};

export default Wrapper;
