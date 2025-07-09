import { Languages } from './languages';
import { Location } from '../types/Location';

const athens = {
  IMG: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/athens_c9qh0e',
  MAP: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12576.444636695656!2d23.7785369!3d37.9978676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a198d495e45169%3A0xbc70c1948b911e1b!2sSystem%20Health%20%26%20Spine!5e0!3m2!1sen!2sgr!4v1713256227369!5m2!1sen!2sgr',
  RATING: '',
};

const tinos = {
  IMG: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/tinos_o3c2qz',
  MAP: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78337.68589334993!2d25.08672848095038!3d37.537449022685315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ed6e2fbdd077%3A0x7eb700f65762619c!2sSystem%20Health%20%26%20Spine!5e0!3m2!1sen!2sgr!4v1713257229754!5m2!1sen!2sgr',
  RATING: '',
};

export const Locations = {
  ATHENS: {
    EN: {
      id: '1',
      createdAt: '2024-04-19T08:04:10.630348Z',
      updatedAt: '2024-04-19T08:04:10.630365Z',
      title: 'Athens',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '17',
      street: 'Xenopoulou Grigoriou',
      city: 'Athens',
      postcode: '11525',
      gRating: athens.RATING,
      gMap: athens.MAP,
      image: athens.IMG,
      language: Languages.EN,
      area: 'N. Psychiko',
      description:
        'We are located between Katexaki & Ethniki Amina stations, just north of Messogeion Ave.',
    },
    EL: {
      id: '5',
      createdAt: '2024-11-14T13:49:56.345325Z',
      updatedAt: '2024-11-14T13:49:56.345343Z',
      title: 'Αθήνα',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '17',
      street: 'Ξενοπούλου Γρηγορίου"',
      city: 'Αθήνα',
      postcode: '11525',
      gRating: athens.RATING,
      gMap: athens.MAP,
      image: athens.IMG,
      language: Languages.EL,
      area: 'Ν. Ψυχικό',
      description:
        'Βρισκόμαστε ανάμεσα στους σταθμούς Κατεχάκη και Εθνική Άμυνα, λίγο βόρεια της λεωφόρου Μεσογείων.',
    },
    FR: {
      id: '6',
      createdAt: '2024-11-14T13:52:02.349505Z',
      updatedAt: '2024-11-14T13:52:02.349524Z',
      title: 'Athènes',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '17',
      street: 'Xénopoulou Grigoriou',
      city: 'Athènes',
      postcode: '11525',
      gRating: athens.RATING,
      gMap: athens.MAP,
      image: athens.IMG,
      language: Languages.FR,
      area: 'N. Psychiko',
      description:
        "Nous sommes situés entre les stations Katexaki et Ethniki Amina, juste au nord de l'avenue Messogeion.",
    },
  },
  TINOS: {
    EN: {
      id: '2',
      createdAt: '2024-04-19T08:05:29.410806Z',
      updatedAt: '2024-06-01T07:19:31.615505Z',
      title: 'Tinos',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '4',
      street: 'Agiou Eleftheriou',
      city: 'Tinos',
      postcode: '84200',
      gRating: tinos.RATING,
      gMap: tinos.MAP,
      image: tinos.IMG,
      language: Languages.EN,
      area: null,
      description: '',
    },
    EL: {
      id: '3',
      createdAt: '2024-11-14T12:57:22.915789Z',
      updatedAt: '2024-11-14T12:57:22.915807Z',
      title: 'Τήνος',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '4',
      street: 'Αγίου Ελευθερίου',
      city: 'Τήνος',
      postcode: '84200',
      gRating: tinos.RATING,
      gMap: tinos.MAP,
      image: tinos.IMG,
      language: Languages.EL,
      area: null,
      description: '',
    },
    FR: {
      id: '4',
      createdAt: '2024-11-14T12:58:36.755869Z',
      updatedAt: '2024-11-14T12:58:36.755889Z',
      title: 'Tinos',
      phone: '2111829292',
      email: 'info@systemhealthspine.com',
      streetNum: '4',
      street: 'Saint-Eleuthère',
      city: 'Tinos',
      postcode: '84200',
      gRating: tinos.RATING,
      gMap: tinos.MAP,
      image: tinos.IMG,
      language: Languages.FR,
      area: null,
      description: '',
    },
  },
};

const locationsArray = Object.values(Locations).flatMap(locationGroup =>
  Object.values(locationGroup),
) as Location[];

const activeLocations = locationsArray.filter(location => location.active !== false);

export const LocationsResponse = {
  count: activeLocations.length,
  results: activeLocations,
};
