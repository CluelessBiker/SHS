import { Location } from '../types/Location';

export type Hour = {
  id: number;
  location: number;
  createdAt: string;
  updatedAt: string;
  day: string;
  open: string;
  close: string;
  info: string | null;
};
