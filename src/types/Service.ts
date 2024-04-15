import { Location } from './Location.ts';

export type Service = {
  locations: Location[];
  createdAt: string;
  updatedAt: string;
  title: string;
  blurb: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  language: string;
};
