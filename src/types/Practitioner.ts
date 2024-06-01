import { Location } from './Location';
import { Service } from './Service';
import { Language } from './Language';

export type Practitioner = {
  id: string;
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
  language: Language;
  primary: boolean;
};
