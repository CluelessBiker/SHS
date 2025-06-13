import { Hour } from '../types/Hour';
import { Locations } from './locations';

const Hours = {
  MON: {
    id: 8,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:49:15.795753Z',
    updatedAt: '2024-04-19T08:49:15.795768Z',
    day: 'mon',
    open: '09:00:00',
    close: '20:00:00',
    info: null,
  },
  TUE: {
    id: 9,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:49:24.422570Z',
    updatedAt: '2024-04-19T08:49:24.422588Z',
    day: 'tue',
    open: '09:00:00',
    close: '20:00:00',
    info: null,
  },
  WED: {
    id: 10,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:49:33.898687Z',
    updatedAt: '2024-04-19T08:49:33.898708Z',
    day: 'wed',
    open: '09:00:00',
    close: '20:00:00',
    info: null,
  },
  THU: {
    id: 11,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:49:44.157127Z',
    updatedAt: '2024-04-19T08:49:44.157143Z',
    day: 'thu',
    open: '09:00:00',
    close: '20:00:00',
    info: null,
  },
  FRI: {
    id: 12,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:49:52.611498Z',
    updatedAt: '2024-04-19T08:49:52.611513Z',
    day: 'fri',
    open: '09:00:00',
    close: '20:00:00',
    info: null,
  },
  SAT: {
    id: 13,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-04-19T08:50:05.151090Z',
    updatedAt: '2024-04-19T08:50:05.151107Z',
    day: 'sat',
    open: '10:00:00',
    close: '13:00:00',
    info: null,
  },
  SUN: {
    id: 14,
    location: Locations.ATHENS.EN.id,
    createdAt: '2024-06-19T07:19:26.081472Z',
    updatedAt: '2024-06-19T07:19:26.081487Z',
    day: 'sun',
    open: '07:19:21',
    close: '07:19:22',
    info: 'closed',
  },
};

const hoursArray = Object.values(Hours);

export const HoursResponse = {
  count: hoursArray.length,
  results: hoursArray as Hour[],
};
