import { Languages } from './languages';
import { Locations } from './locations';
import { Service } from '../types/Service';

type Data = { img: string; active: boolean };

const acupuncture: Data = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/acupuncture_wvc6a3',
};

const chiropactor: Data = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/chiropractic_uwfjrg',
};

const nutrition: Data = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/cnc_fjlxak',
};

const kinesiology: Data = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/balance-6157258_640_wdmkit',
};

export const Services = {
  ACUPUNCTURE: {
    EN: {
      id: '2',
      locations: [Locations.ATHENS.EN, Locations.TINOS.EN],
      createdAt: '2024-04-19T08:52:09.466334Z',
      updatedAt: '2024-04-25T08:39:02.513315Z',
      title: 'Acupuncture',
      blurb: 'Re-balancing Your Body',
      description:
        'Acupuncture forms an integral part of our approach to treating the whole body, not just a complaint in isolation. This service is fundamental to ensuring our patients’ long-term health and wellness. Our highly trained staff is here to assist you for all your required needs.',
      price: null,
      active: acupuncture.active,
      image: acupuncture.img,
      duration: null,
      language: Languages.EN,
    },
    EL: {
      id: '7',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      createdAt: '2024-11-18T09:17:06.854818Z',
      updatedAt: '2024-11-18T09:17:06.854843Z',
      title: 'Βελονισμός',
      blurb: 'Εξισορροπήστε το σώμα σας',
      description:
        'Ο βελονισμός αποτελεί αναπόσπαστο μέρος της προσέγγισής μας στη θεραπεία ολόκληρου του σώματος, όχι απλώς ένα παράπονο μεμονωμένα. Αυτή η υπηρεσία είναι θεμελιώδης για τη διασφάλιση της μακροπρόθεσμης υγείας και ευεξίας των ασθενών μας. Το άρτια εκπαιδευμένο προσωπικό μας είναι εδώ για να σας βοηθήσει για όλες τις απαραίτητες ανάγκες σας.',
      price: null,
      active: acupuncture.active,
      image: acupuncture.img,
      duration: null,
      language: Languages.EL,
    },
    FR: {
      id: '12',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      createdAt: '2024-11-18T09:24:06.611385Z',
      updatedAt: '2024-11-18T09:24:06.611411Z',
      title: 'Acupuncture',
      blurb: 'Re-balancing Your Body',
      description:
        "L'acupuncture fait partie intégrante de notre approche du traitement du corps dans son ensemble, et non seulement d'une pathologie isolée. Ce service est fondamental pour assurer la santé et le bien-être à long terme de nos patients. Notre personnel hautement qualifié est là pour vous aider pour tous vos besoins.",
      price: null,
      active: acupuncture.active,
      image: acupuncture.img,
      duration: null,
      language: Languages.FR,
    },
  },
  CHIROPRACTIC: {
    EN: {
      id: '1',
      locations: [Locations.ATHENS.EN, Locations.TINOS.EN],
      createdAt: '2024-04-19T08:51:12.768473Z',
      updatedAt: '2024-04-25T08:39:17.727234Z',
      title: 'Chiropractic',
      blurb: 'Re-aligning Your Body',
      description:
        'Chiropractic focuses on the spine and other joints of the body, with their connection to the nervous system. The word “chiropractic” means “to be done by hand.” As primary health care providers, chiropractors use specific adjustments to restore joint function and support the nervous system. They help patients maintain optimal health while avoiding unnecessary drugs or surgery. Please click on any of the issues underneath that we can help you with.',
      price: null,
      active: chiropactor.active,
      image: chiropactor.img,
      duration: null,
      language: Languages.EN,
    },
    EL: {
      id: '8',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      createdAt: '2024-11-18T09:18:12.896440Z',
      updatedAt: '2024-11-18T09:18:12.896464Z',
      title: 'Χειροπρακτική',
      blurb: 'Εκ νέου ευθυγράμμιση του σώματός σας',
      description:
        'Chiropractic focuses on the spine and other joints of the body, with their connection to the nervous system. The word “chiropractic” means “to be done by hand.” As primary health care providers, chiropractors use specific adjustments to restore joint function and support the nervous system. They help patients maintain optimal health while avoiding unnecessary drugs or surgery. Please click on any of the issues underneath that we can help you with.',
      price: null,
      active: chiropactor.active,
      image: chiropactor.img,
      duration: null,
      language: Languages.EL,
    },
    FR: {
      id: '13',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      createdAt: '2024-11-18T09:25:00.492398Z',
      updatedAt: '2024-11-18T09:25:00.492416Z',
      title: 'Chiropratique',
      blurb: 'Réaligner votre corps',
      description:
        "La chiropratique se concentre sur la colonne vertébrale et les autres articulations du corps, ainsi que sur leur lien avec le système nerveux. Le mot « chiropratique » signifie « à faire à la main ». En tant que prestataires de soins de santé primaires, les chiropraticiens utilisent des ajustements spécifiques pour restaurer la fonction articulaire et soutenir le système nerveux. Ils aident les patients à maintenir une santé optimale tout en évitant les médicaments ou les interventions chirurgicales inutiles. Veuillez cliquer sur l'un des problèmes ci-dessous pour lesquels nous pouvons vous aider.",
      price: null,
      active: chiropactor.active,
      image: chiropactor.img,
      duration: null,
      language: Languages.FR,
    },
  },
  NUTRITION: {
    EN: {
      id: '3',
      locations: [Locations.ATHENS.EN],
      createdAt: '2024-04-19T08:54:48.408434Z',
      updatedAt: '2024-04-19T08:54:48.408451Z',
      title: 'Clinical Nutritional Counselling',
      blurb: 'Improve your general wellbeing',
      description:
        "We are proud to offer one of the most important units to everyone's health. Our main clinician is one of Greece's top yet first ever, fully licensed Clinical Nutritionist in the country.  With over several decades of experience as well as multiple published artifacts and resources, we offer a well-balanced approach to the body as a whole.  Through our multidisciplinary approach we know not only encompass how your body should move and act but what you should put in it as well.",
      price: null,
      active: nutrition.active,
      image: nutrition.img,
      duration: null,
      language: Languages.EN,
    },
    EL: {
      id: '9',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      createdAt: '2024-11-18T09:20:01.324023Z',
      updatedAt: '2024-11-18T09:20:01.324040Z',
      title: 'Κλινική Διατροφική Συμβουλευτική',
      blurb: 'Βελτιώστε τη γενική σας ευεξία',
      description:
        'Είμαστε περήφανοι που προσφέρουμε μια από τις πιο σημαντικές μονάδες για την υγεία όλων. Ο κύριος κλινικός μας ιατρός είναι ένας από τους κορυφαίους αλλά και πρώτους στην Ελλάδα, πλήρως αδειοδοτημένους Κλινικούς Διατροφολόγους στη χώρα.  Με περισσότερες από πολλές δεκαετίες εμπειρίας, καθώς και πολλαπλά δημοσιευμένα τεχνουργήματα και πόρους, προσφέρουμε μια καλά ισορροπημένη προσέγγιση στο σώμα ως σύνολο.  Μέσω της διεπιστημονικής προσέγγισής μας, γνωρίζουμε όχι μόνο πώς πρέπει να κινείται και να ενεργεί το σώμα σας, αλλά και τι πρέπει να βάλετε σε αυτό.',
      price: null,
      active: nutrition.active,
      image: nutrition.img,
      duration: null,
      language: Languages.EL,
    },
    FR: {
      id: '14',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      createdAt: '2024-11-18T09:26:07.687770Z',
      updatedAt: '2024-11-18T09:26:07.687812Z',
      title: 'Conseils nutritionnels cliniques',
      blurb: 'Améliorez votre bien-être général',
      description:
        "We are proud to offer one of the most important units to everyone's health. Our main clinician is one of Greece's top yet first ever, fully licensed Clinical Nutritionist in the country.  With over several decades of experience as well as multiple published artifacts and resources, we offer a well-balanced approach to the body as a whole.  Through our multidisciplinary approach we know not only encompass how your body should move and act but what you should put in it as well.",
      price: null,
      active: nutrition.active,
      image: nutrition.img,
      duration: null,
      language: Languages.FR,
    },
  },
  KINESIOLOGY: {
    EN: {
      id: '6',
      locations: [Locations.ATHENS.EN, Locations.TINOS.EN],
      createdAt: '2024-11-14T10:55:47.467211Z',
      updatedAt: '2024-11-14T10:55:47.467230Z',
      title: 'Kinesiology',
      blurb: 'Making your Core Stronger!',
      description:
        'Focussing on the study of movement with relation to proper stability of core muscles and optimal movement.  We focus on getting you stability whether it be for the professional athlete, studying student or weekend warrior.',
      price: null,
      active: kinesiology.active,
      image: kinesiology.img,
      duration: null,
      language: Languages.EN,
    },
    EL: {
      id: '10',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      createdAt: '2024-11-18T09:22:24.183462Z',
      updatedAt: '2024-11-18T09:22:24.183485Z',
      title: 'Κινησιολογία',
      blurb: 'Κάνοντας τον Πυρήνα σας Δυνατό!',
      description:
        'Εστίαση στη μελέτη της κίνησης σε σχέση με τη σωστή σταθερότητα των μυών του πυρήνα και τη βέλτιστη κίνηση.  Εστιάζουμε στο να σας εξασφαλίσουμε σταθερότητα είτε πρόκειται για επαγγελματία αθλητή, σπουδαστή ή πολεμιστή του Σαββατοκύριακου.',
      price: null,
      active: kinesiology.active,
      image: kinesiology.img,
      duration: null,
      language: Languages.EL,
    },
    FR: {
      id: '11',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      createdAt: '2024-11-18T09:23:19.477906Z',
      updatedAt: '2024-11-18T09:23:19.477923Z',
      title: 'Kinésiologie',
      blurb: 'Rendre votre noyau plus fort !',
      description:
        "Se concentrer sur l'étude du mouvement en relation avec la bonne stabilité des muscles centraux et un mouvement optimal.  Nous nous concentrons sur votre stabilité, que ce soit pour l'athlète professionnel, l'étudiant ou le guerrier du week-end.",
      price: null,
      active: kinesiology.active,
      image: kinesiology.img,
      duration: null,
      language: Languages.FR,
    },
  },
};

const servicesArray = Object.values(Services).flatMap(serviceGroup =>
  Object.values(serviceGroup),
) as Service[];
const activeServices = servicesArray.filter(service => service.active !== false);

export const ServicesResponse = {
  count: activeServices.length,
  results: activeServices,
};
