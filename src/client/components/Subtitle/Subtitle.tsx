import React, { FC } from 'react';

interface ISubtitle {
  subtitle: string;
  className?: string;
}

const Subtitle: FC<ISubtitle> = ({ subtitle, className = '' }) => {
  return <h2 className={`title ${className}`}>{subtitle}</h2>;
};

export default Subtitle;
