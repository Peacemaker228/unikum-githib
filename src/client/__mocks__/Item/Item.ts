import { IItem } from 'src/shared/types/client/Item/IItem';

export const productObj: IItem = {
  ID: 1,
  name: 'Куртка «Бомбер» универсальная',
  type: 'Унисекс',
  article: '201',
  wholesale: '750',
  retail: '1750',
  text: 'По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.',
  images: [
    { url: '../../assets/images/catalog_item/def.png' },
    { url: '../../assets/images/catalog_item/def.png' },
    { url: '../../assets/images/catalog_item/def.png' },
    { url: '../../assets/images/catalog_item/def.png' },
  ],
  image: { url: '../../assets/images/catalog_item/def.png' },
};
