import React, { FC } from 'react';
import { IServiceCard } from 'src/shared/types/ServiceCard/IServiceCard';

const ServiceCard: FC<IServiceCard> = ({ id, img, name, subname }) => {
  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="service__body">
        <h3 className="service__body_title">{name}</h3>
        <p className="service__body_subtitle">{subname}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
