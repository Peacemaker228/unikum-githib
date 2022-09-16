interface ICatalogImage {
  ID?: number;
  url: string;
}

export interface ICatalogProduct {
  ID: number;
  price: number | string;
  name: string;
  images: ICatalogImage;
}
