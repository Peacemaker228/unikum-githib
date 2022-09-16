import { ICategory } from 'dist/shared/types/client/CatalogCategory/ICategory';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { getAncestors } from 'src/client/utils/getAncestors';
import CatalogCategory from './CatalogCategory';

interface IProps {
  rootCategory: ICategory[];
}

const CatalogMenu: FC<IProps> = ({ rootCategory }) => {
  const catId = Number(useRouter().query.category);
  const [ancestors, setAncestors] = useState([]);

  useEffect(() => {
    const resAncestors = getAncestors(
      catId,
      JSON.parse(JSON.stringify(rootCategory)),
    );

    setAncestors(resAncestors);
  }, [catId]);

  return (
    <div className="category">
      <h2 className="category__title">Каталог</h2>
      <CatalogCategory
        activeCategoryId={catId}
        categories={rootCategory}
        ancestors={ancestors}
        index={0}
      />
    </div>
  );
};

export default CatalogMenu;
