export enum Category {
  wearable = 'wearable',
  laptops = 'laptops',
  phones = 'phones',
  drones = 'drones',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
  price: number;
  category: Category;
}
