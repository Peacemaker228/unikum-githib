import React, { FC } from 'react';

const Subtitle: FC<{ subtitle: string }> = ({ subtitle }) => {
  return <h2>{subtitle}</h2>;
};

export default Subtitle;
