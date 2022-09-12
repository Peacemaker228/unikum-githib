import { ICategory } from 'src/client/types/CatalogCategory/ICategory';

export const Category: ICategory[] = [
  {
    ID: 1,
    name: 'Бомберы',
    categories: [],
  },
  {
    ID: 2,
    name: 'Свитшоты',
    categories: [],
  },
  {
    ID: 3,
    name: 'Толстовки',
    categories: [
      { ID: 11, name: 'Женские', categories: [] },
      { ID: 12, name: 'Мужские', categories: [] },
    ],
  },
  {
    ID: 4,
    name: 'Брюки спортивные',
    categories: [],
  },
  {
    ID: 5,
    name: 'Куртки-ветровки',
    categories: [],
  },
  {
    ID: 6,
    name: 'Утепленные куртки',
    categories: [],
  },
  {
    ID: 7,
    name: 'Жилеты',
    categories: [],
  },
  {
    ID: 8,
    name: 'Утепленные жилеты',
    categories: [],
  },
  {
    ID: 9,
    name: 'Футболки',
    categories: [],
  },

  {
    ID: 10,
    name: 'Тренировочные майки',
    categories: [],
  },
];
