import React, { FC } from 'react';
// import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Link from 'next/link';
import { ICategory } from 'src/shared/types/client/CatalogCategory/ICategory';

interface ICatalog {
  categories: ICategory[];
  index: number;
  ancestors: number[];
  activeCategoryId: number;
}

const CatalogList: FC<ICatalog> = ({
  categories,
  index,
  ancestors,
  activeCategoryId,
}) => {
  return (
    <ul className="category__list" style={{ paddingLeft: `${index * 20}px` }}>
      {categories.map((el) => {
        return (
          <>
            <li
              className={classNames(
                'category__list_item',
                activeCategoryId === el.ID ? 'category__active' : '',
              )}
              key={el.ID}
            >
              <Link href={`catalog?category=${el.ID}`}>
                <a
                  href={`catalog?category=${el.ID}`}
                  className={classNames(
                    'category__list_link',
                    activeCategoryId === el.ID
                      ? 'subcategory__link_active'
                      : '',
                  )}
                >
                  {el.name}
                </a>
              </Link>
            </li>
            <li
              style={{ display: ancestors.includes(el.ID) ? 'block' : 'none' }}
            >
              <CatalogList
                key={el.ID}
                categories={el.categories}
                ancestors={ancestors}
                activeCategoryId={activeCategoryId}
                index={index + 1}
              />
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default CatalogList;
