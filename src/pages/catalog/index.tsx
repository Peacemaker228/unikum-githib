import React, { FC, useEffect } from 'react';

import { useRouter } from 'next/router';

import CatalogCard from 'src/client/components/CatalogCard/CatalogCard';
import Order from 'src/client/components/Order/Order';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import { Category } from 'src/client/__mocks__/Catalog/CatalogCategory';
import Pagination from 'src/client/components/Pagination/Pagination';
import Gallery from 'src/client/components/Gallery/Gallery';
import CatalogMenu from 'src/client/components/CatalogCategory/CatalogMenu';
import Subtitle from 'src/client/components/Subtitle/Subtitle';

interface ICatalogPage {
  title: string;
}

const CatalogPage: FC<ICatalogPage> = ({ title = 'Женщинам' }) => {
  const router = useRouter();

  const pageId = Number(router.query.page);
  const catId = Number(router.query.catalog);

  const pageSize = 8;

  const currentData = () => {
    const firstPageIndex = (pageId - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return productCard.slice(firstPageIndex, lastPageIndex);
  };

  useEffect(() => {
    currentData();
  }, [pageId]);

  return (
    <div className="catalog">
      <section className="wrapper">
        <div className="wrapper__container">
          <Subtitle subtitle={title} />
          <div className="catalog__container">
            <CatalogMenu rootCategory={Category} />
            <div className="catalog__container_content">
              <div className="catalog__container_grid">
                {currentData().map((el) => {
                  return <CatalogCard product={el} key={el.ID} />;
                })}
              </div>
              <Pagination
                currentPage={pageId}
                totalCount={productCard.length}
                pageSize={pageSize}
                onPageChange={(page: number) =>
                  router.push({
                    pathname: '/catalog',
                    query: { category: catId, page: page },
                  })
                }
              />
            </div>
          </div>
        </div>
      </section>
      <Order />
      <Gallery />
    </div>
  );
};

export default CatalogPage;
