import { Location } from './Location.ts';
import { Service } from './Service.ts';

export type Practitioner = {
  locations: Location[];
  services: Service[];
  createdAt: string;
  updatedAt: string;
  fName: string;
  lName: string;
  title: string;
  bio: string;
  image: string;
  personalExperience: string;
  language: string;
};
