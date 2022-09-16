import { ICategory } from 'src/shared/types/client/CatalogCategory/ICategory';
import { NestedArray } from 'src/shared/types/client/NestedArray/NestedArray';

export const getAncestors = (
  catId: number,
  children: any[],
  parentArray: number[] = [],
): number[] => {
  for (let node of children) {
    if (node.ID === catId) {
      return parentArray.concat(node.ID);
    }

    const found = getAncestors(
      catId,
      node.categories,
      parentArray.concat(node.ID),
    );

    if (found.length > 0) {
      return found;
    }
  }

  return [];
};
