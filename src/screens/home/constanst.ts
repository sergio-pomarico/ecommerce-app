import {Product, Category} from '@core/models/product';

export const tabs = [
  {
    id: 'wearable',
    title: 'home.tabs.wearables',
  },
  {
    id: 'laptops',
    title: 'home.tabs.laptops',
  },
  {
    id: 'phones',
    title: 'home.tabs.phones',
  },
  {
    id: 'drones',
    title: 'home.tabs.drones',
  },
];

export const products: Array<Product> = [
  {
    id: '7cb7a28e-48d2-4520-aee3-b7ee64327e0b',
    name: 'Apple Watch - Serie 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas accumsan mi, a porttitor tortor euismod sed. Vivamus mollis augue neque, in vehicula turpis consectetur in. Maecenas aliquet nulla nec tortor iaculis suscipit.',
    image: require('@assets/img/apple_watch.jpg'),
    price: 100,
    category: Category.wearable,
  },
  {
    id: '530985ec-f8e1-4bf1-a378-b2ac8355cc67',
    name: 'Samsung Galaxy Watch 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas accumsan mi, a porttitor tortor euismod sed. Vivamus mollis augue neque, in vehicula turpis consectetur in. Maecenas aliquet nulla nec tortor iaculis suscipit.',
    image: require('@assets/img/apple_watch.jpg'),
    price: 100,
    category: Category.wearable,
  },
  {
    id: '20bd249c-2dea-4a93-bcdf-9bf651f1061c',
    name: 'Huawei Watch GT 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas accumsan mi, a porttitor tortor euismod sed. Vivamus mollis augue neque, in vehicula turpis consectetur in. Maecenas aliquet nulla nec tortor iaculis suscipit.',
    image: require('@assets/img/apple_watch.jpg'),
    price: 100,
    category: Category.wearable,
  },
];
