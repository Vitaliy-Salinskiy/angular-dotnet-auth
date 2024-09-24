export interface ITravelCard {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface IBasicSelect<T> {
  value: T;
  label: string;
}
