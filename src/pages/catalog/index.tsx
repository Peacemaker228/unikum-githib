import { FC, useState } from 'react';
import CatalogCard from 'src/client/components/CatalogCard/CatalogCard';
import { useEffect } from 'react';
import CatalogCategory from 'src/client/components/CatalogCategory/CatalogCategory';
import Order from 'src/client/components/Order/Order';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import Pagination from './../../client/components/Pagination/Pagination';
import PriceTabs from 'src/client/components/PriceTabs/PriceTabs';
import { Category } from 'src/client/__mocks__/Catalog/CatalogCategory';
import Gallery from 'src/client/components/Gallery/Gallery';
import CatalogMenu from 'src/client/components/CatalogCategory/CatalogMenu';

const Post: FC = () => {
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(1);

  const pageSize = 8;

  const currentData = () => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return productCard.slice(firstPageIndex, lastPageIndex);
  };

  useEffect(() => {
    currentData();
  }, [page]);

  return (
    <div className="catalog">
      <section className="wrapper__container">
        <div className="catalog__container">
          <CatalogMenu rootCategory={Category} />
          <div className="catalog__container_content">
            <div className="catalog__container_grid">
              {currentData().map((el) => {
                return <CatalogCard product={el} key={el.ID} />;
              })}
            </div>
            <Pagination
              currentPage={page}
              totalCount={productCard.length}
              pageSize={pageSize}
              onPageChange={(page: number) => setPage(page)}
            />
          </div>
        </div>
      </section>
      <Order />
      <Gallery />
    </div>
  );
};

export default Post;
