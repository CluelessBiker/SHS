import { Location } from './Location';
import { Language } from './Language';

export type Service = {
  id: string;
  locations: Location[];
  createdAt: string;
  updatedAt: string;
  title: string;
  blurb: string;
  description: string;
  price?: number | null;
  image: string;
  duration?: number | null;
  active?: boolean;
  language: Language;
};
