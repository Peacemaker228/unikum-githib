import React, { FC } from 'react';
import { ICard } from 'src/client/types/Card/ICard';
import Link from 'next/link';

const Card: FC<ICard> = ({ ID, categoryName, img, type }) => {
  return (
    <div className="card">
      <img src={img} alt="image" />
      <div className="card__categories">
        <h3 className="card__categories_title">{categoryName}</h3>
        <Link href={`/catalog/${ID}`}>
          <a href={`/catalog/${ID}`}>
            Перейти{' '}
            <span>
              <svg
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z"
                  fill="#616161"
                />
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
