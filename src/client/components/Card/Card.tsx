import React, { FC } from 'react';
import { ICard } from 'src/client/types/Card/ICard';
import { Link } from 'next/link';

const Card: FC<ICard> = ({ ID, categoryName, img, type }) => {
  return (
    <div className="card">
      <img src={img} alt="image" />
      <div className="card__categories">
        <h3 className="card__categories_title">{categoryName}</h3>
        <Link></Link>
      </div>
    </div>
  );
};

export default Card;
