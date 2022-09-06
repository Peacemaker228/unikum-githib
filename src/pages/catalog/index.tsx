import { FC, useState } from 'react';
import CatalogCard from 'src/client/components/CatalogCard/CatalogCard';
import { useEffect } from 'react';
import CatalogCategory from 'src/client/components/CatalogCategory/CatalogCategory';
import Order from 'src/client/components/Order/Order';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import Pagination from './../../client/components/Pagination/Pagination';

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
      <div className="catalog__container">
        <CatalogCategory />
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
      <Order />
    </div>
  );
};

export default Post;
