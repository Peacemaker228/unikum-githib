import React, { FC, useState } from 'react';
// import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Link from 'next/link';
import { Category } from './../../__mocks__/Catalog/CatalogCategory';
import { useRouter } from 'next/router';

const CatalogCategory: FC = () => {
  const [active, setActive] = useState(false);

  const catId = Number(useRouter().query.category);
  console.log(Number(catId));

  //   const id = useParams();

  return (
    <div className="category">
      <h2 className="category__title">Каталог</h2>

      <ul className="category__list">
        {Category.map((el) => {
          if (el.categories.length === 0) {
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
          } else {
            return (
              <>
                <li
                  // onClick={() => setActive(!active)}
                  className={classNames(
                    'category__list_item',
                    catId === el.ID ? 'category__active' : '',
                  )}
                  key={el.ID}
                  onClick={() => setActive(!active)}
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
                {/*  */}
                {active && (
                  <ul className="category__list">
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
                          <Link href={`catalog?category=${sub.ID}`}>
                            <a
                              href={`catalog?category=${sub.ID}`}
                              className="subcategory__list_link"
                            >
                              {sub.name}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            );
          }
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
