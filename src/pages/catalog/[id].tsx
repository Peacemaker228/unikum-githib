import { GetServerSideProps } from 'next/types';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import DropDown from 'src/client/components/DropDown/DropDown';
import { IItem } from 'src/client/types/Item/IItem';
import { productObj } from 'src/client/__mocks__/Item/Item';
import Button from './../../client/components/Button/Button';

const CatalogItem: FC = () => {
  const [product, setProduct] = useState({} as IItem);

  const [article, setArticle] = useState(null);
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(0);

  console.log(article);

  const articleArr: string[] = [
    '14-8-8',
    '228',
    '13-37',
    '1945',
    '2k22',
    'wasd',
  ];
  const sizeArr: string[] = ['M', 'L', 'XXL'];

  return (
    <div className="catalog__item">
      <div className="catalog__item_container">
        <div className="item__image">
          <div className="item__image_slider">
            {productObj.images.map((el, index) => {
              return <img src={el.url} alt="product" key={index} />;
            })}
          </div>
          <div className="item__image_main">
            <img src={productObj.image.url} alt="" />
          </div>
        </div>
        <div className="item__description">
          <div className="item__description_title">
            <h2 className="description__title_name">{productObj.name}</h2>
            <span className="description__title_type">{productObj.type}</span>
            <span className="description__title_article">
              Артикул: {productObj.article}
            </span>
          </div>
          <div className="item__description_price">
            <div className="description__price">
              <span className="description__price_value">
                {productObj.retail} <span>₽</span>
              </span>
              <span className="description__price_text">Розничная цена</span>
            </div>
            <div className="description__price">
              <span className="description__price_value">
                <span>от</span> {productObj.wholesale} <span>₽</span>
              </span>
              <span className="description__price_text">Оптовая цена</span>
            </div>
          </div>
          <p className="item__description_text">{productObj.text}</p>
          <div className="item__description_choice">
            <div className="description__choice">
              <span className="description__choice_text">
                Выберете артикул:
              </span>
              <DropDown
                data={articleArr}
                selected={article}
                setSelected={setArticle}
              />
            </div>
            <div className="description__choice">
              <span className="description__choice_text">
                Выберете размер: <span>Таблица размеров</span>
              </span>
              <DropDown data={sizeArr} selected={size} setSelected={setSize} />
            </div>
            <div className="description__choice">
              <span className="description__choice_text">Количество:</span>
              <div className="description__choice_count">
                <svg
                  onClick={() => count > 0 && setCount(count - 1)}
                  width="15"
                  height="3"
                  viewBox="0 0 15 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="15"
                    y="0.5"
                    width="2"
                    height="15"
                    transform="rotate(90 15 0.5)"
                    fill="#C4C4C4"
                  />
                </svg>
                {count}
                <svg
                  onClick={() => setCount(count + 1)}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6.5" width="2" height="15" fill="#C4C4C4" />
                  <rect
                    x="15"
                    y="6.5"
                    width="2"
                    height="15"
                    transform="rotate(90 15 6.5)"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="item__description_btn-group">
            <Button isWhite type="button" btnText="Создать свой дизайн" />
            <Button isBlue type="button" btnText="Добавить в корзину" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
