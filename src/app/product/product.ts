import { Currency } from '../enums/currency.enum';

export interface Product {
  id: number;
  title: string;
  price: number;
  currency: Currency;
  image: string;
}
