import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FC } from 'react';
import { ICatalogProduct } from 'src/shared/types/client/CatalogCard/ICatalogCard';
import def from '../../assets/images/catalog/black.png';

type ICatalogCard = {
  product: ICatalogProduct;
};

const CatalogCard: FC<ICatalogCard> = ({ product }) => {
  const catId = Number(useRouter().query.category);

  return (
    <div className="catalog__card">
      <div className="catalog__card_image">
        <Link href={`/catalog/${product.ID}`}>
          <img src={product.images.url} alt="product" />
        </Link>
      </div>
      <h3 className="catalog__card_price">
        {product.price} <span>₽</span>
      </h3>
      <Link href={`/catalog/${product.ID}`}>
        <a className="catalog__card_name">{product.name}</a>
      </Link>
    </div>
  );
};

export default CatalogCard;
