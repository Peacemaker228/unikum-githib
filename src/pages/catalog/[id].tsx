import Link from 'next/link';
import { GetServerSideProps } from 'next/types';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import CatalogCard from 'src/client/components/CatalogCard/CatalogCard';
import DropDown from 'src/client/components/DropDown/DropDown';
import TabsCustom from 'src/client/components/TabsCustom/TabsCustom';
import { IItem } from 'src/shared/types/client/Item/IItem';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import { articleArr, sizeArr } from 'src/client/__mocks__/DropDown/DropDown';
import { productObj } from 'src/client/__mocks__/Item/Item';
import { tabsContent } from 'src/client/__mocks__/Tabs/Tabs';
import Button from './../../client/components/Button/Button';
import inst from '../../client/assets/images/contacts/inst.svg';

const CatalogItem: FC = () => {
  const [product, setProduct] = useState({} as IItem);

  const router = useRouter();

  const [active, setActive] = useState<number>(1);
  const [article, setArticle] = useState(articleArr[0]);
  const [size, setSize] = useState(sizeArr[0]);
  const [count, setCount] = useState<number>(1);

  return (
    <div className="catalog__item">
      <section className="wrapper">
        <div className="wrapper__container">
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
                <span className="description__title_type">
                  {productObj.type}
                </span>
                <span className="description__title_article">
                  Артикул: {productObj.article}
                </span>
              </div>
              <div className="item__description_price">
                <div className="description__price">
                  <span className="description__price_value">
                    {productObj.retail} <span>₽</span>
                  </span>
                  <span className="description__price_title">
                    Розничная цена
                  </span>
                </div>
                <div className="description__price">
                  <span className="description__price_value">
                    <span>от</span> {productObj.wholesale} <span>₽</span>
                  </span>
                  <span className="description__price_title">Оптовая цена</span>
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
                  <DropDown
                    data={sizeArr}
                    selected={size}
                    setSelected={setSize}
                  />
                </div>
                <div className="description__choice">
                  <span className="description__choice_text">Количество:</span>
                  <div className="description__choice_count">
                    <button
                      disabled={count === 0}
                      onClick={() => count > 0 && setCount((prev) => prev - 1)}
                    >
                      <svg
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
                    </button>
                    <input
                      className="count__input"
                      type="text"
                      maxLength={3}
                      min={1}
                      max={100}
                      autoComplete="off"
                      value={count}
                      pattern="[0-9]"
                      onChange={(e) => {
                        if (Number(e.target.value) <= 100) {
                          setCount(Number(e.target.value));
                        } else {
                          setCount(100);
                        }
                      }}
                    />
                    <button
                      onClick={() => {
                        if (count < 100) {
                          setCount((prev) => prev + 1);
                        } else {
                          setCount(100);
                        }
                      }}
                      disabled={count === 100}
                    >
                      <svg
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
                    </button>
                  </div>
                </div>
              </div>
              <div className="item__description_btn-group">
                <Button
                  isWhite
                  type="button"
                  btnText="Создать свой дизайн"
                  onClick={() => router.push('/custom-design')}
                />
                <Button isBlue type="button" btnText="Добавить в корзину" />
              </div>
            </div>
          </div>
          <div className="catalog__item_about">
            <TabsCustom
              content={tabsContent}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="catalog__item_similar">
            <div className="item__similar_container">
              <h2>Похожие товары</h2>
              <div className="item__similar_content">
                {productCard.map((el, index) => {
                  if (index < 5) {
                    return <CatalogCard product={el} key={el.ID} />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalogItem;
