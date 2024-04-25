import { Location } from './Location';

export type Service = {
  id: string;
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
