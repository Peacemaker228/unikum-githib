import React, { FC, useState } from 'react';
// import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Link from 'next/link';
import { Category } from './../../__mocks__/Catalog/CatalogCategory';
import { useRouter } from 'next/router';

const CatalogCategory: FC = () => {
  // const [active, setActive] = useState(catId);
  const catId = Number(useRouter().query.category);
  const subId = Number(useRouter().query.subcategory);

  return (
    <div className="category">
      <h2 className="category__title">Каталог</h2>
      <ul className="category__list">
        {Category.map((el) => {
          return (
            <li
              className={classNames(
                'category__list_item',
                catId === el.ID ? 'category__active' : '',
              )}
              key={el.ID}
            >
              <Link href={`catalog?category=${el.ID}`}>
                <a
                  href={`catalog?category=${el.ID}`}
                  className="category__list_link"
                >
                  {el.name}
                </a>
              </Link>
              <ul
                className={classNames(
                  'category__list',
                  catId === el.ID && el.categories.length !== 0
                    ? 'category__list_active'
                    : 'category__list_none',
                )}
              >
                {el.categories.map((sub) => {
                  return (
                    <li
                      // onClick={() => setActive(!active)}
                      className={classNames(
                        'category__list_subitem',
                        catId === sub.ID ? 'category__active' : '',
                      )}
                      key={sub.ID}
                    >
                      <Link
                        href={`catalog?category=${el.ID}&subcategory=${sub.ID}`}
                      >
                        <a
                          href={`catalog?category=${el.ID}&subcategory=${sub.ID}`}
                          className={classNames(
                            'subcategory__list_link',
                            subId === sub.ID ? 'subcategory__link_active' : '',
                          )}
                        >
                          {sub.name}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatalogCategory;

/* <ul className="category__list">
        {Category.map((el) => {
          return (
            <li
              // onClick={() => setActive(!active)}
              className={classNames(
                'category__list_item',
                catId === el.ID ? 'category__active' : '',
              )}
              key={el.ID}
            >
              <Link href={`catalog?category=${el.ID}`}>
                <a
                  href={`catalog?category=${el.ID}`}
                  className="category__list_link"
                >
                  {el.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul> */
