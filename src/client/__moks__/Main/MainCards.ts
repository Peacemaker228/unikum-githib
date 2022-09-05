import { ICard } from 'src/client/types/Card/ICard';

export const MainCards: ICard[] = [
  {
    ID: 1,
    img: '../../assets/images/main/1 картинка.png',
    type: 'main',
    categoryName: 'Свитшоты / толстовки',
    subcategory: [],
  },
  {
    ID: 2,
    img: '../../assets/images/main/2 картинка.png',
    type: 'main',
    categoryName: 'Штаны / шорты',
    subcategory: [],
  },
  {
    ID: 3,
    img: '../../assets/images/main/3 картинка.png',
    type: 'main',
    categoryName: 'Тренировочные майки',
    subcategory: ['Футболки'],
  },
  {
    ID: 4,
    img: '../../assets/images/main/4 картинка.png',
    type: 'main',
    categoryName: 'Куртки / жилеты',
    subcategory: ['Бомберы'],
  },
  {
    ID: 5,
    img: '../../assets/images/main/5 картинка.png',
    type: 'main',
    categoryName: 'Головные уборы',
    subcategory: ['Варежки', 'Снуды'],
  },
  {
    ID: 6,
    img: '../../assets/images/main/6 картинка.png',
    type: 'main',
    categoryName: 'Продукция',
    subcategory: ['Сувенирная'],
  },
];
