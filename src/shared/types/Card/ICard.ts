export interface ICard {
  id: number;
  img: string;
  categoryName: string;
  subcategory: string[];
  type: 'main' | 'catalog' | 'shop';
}

export interface IShopCard {
  price: number;
}
