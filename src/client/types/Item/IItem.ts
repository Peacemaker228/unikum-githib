type ItemImages = {
  url: string;
};

export interface IItem {
  ID: number | string;
  name: string;
  type: string;
  article: number | string;
  wholesale: number | string;
  retail: number | string;
  text: string;
  images: ItemImages[];
  image: ItemImages;
}
