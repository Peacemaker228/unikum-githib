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
  const router = useRouter();

  const routerNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <Link href={`/catalog/${product.ID}`}>
      <div className="catalog__card">
        <div className="catalog__card_image">
          <img src={product.images.url} alt="product" />
        </div>
        <h3 className="catalog__card_price">
          {product.price} <span>₽</span>
        </h3>

        <span className="catalog__card_name">{product.name}</span>
      </div>
    </Link>
  );
};

export default CatalogCard;
