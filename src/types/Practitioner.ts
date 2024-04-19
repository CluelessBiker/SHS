import { Location } from './Location.ts';
import { Service } from './Service.ts';

export type Practitioner = {
  locations: Location[];
  services: Service[];
  createdAt: string;
  updatedAt: string;
  prefix: string;
  fName: string;
  lName: string;
  degree: string;
  title: string;
  bio: string;
  image: string;
  personalExperience: string;
  language: string;
};
