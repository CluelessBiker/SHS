import { Locations } from './locations';
import { Services } from './services';
import { Languages } from './languages';

type User = { img: string; active: boolean };

const Dinos: User = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/dinos_ajafsn',
};

const Benjamin: User = {
  active: true,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/benjamin_ajlwdo',
};

const Georgette: User = {
  active: false,
  img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/georgette_wkbuvh',
};

// const Zelda: User = {
//   active: false,
//   img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/WhatsApp_Image_2024-05-29_at_12.32.24_1f566ff3_hkbxmx',
// };

// const Paulina: User = {
//   active: false,
//   img: 'https://res.cloudinary.com/cluelessbiker/image/upload/v1/media/images/DSC_9256_2_guvfpk',
// };

export const Practitioners = {
  DINOS: {
    EN: {
      id: 1,
      active: Dinos.active,
      createdAt: '2024-04-19T08:59:34.201028Z',
      updatedAt: '2024-04-19T08:59:34.201045Z',
      primary: true,
      prefix: 'Dr.',
      fName: 'Konstantinos',
      lName: 'Arhontoudis',
      degree: 'DC',
      title: 'Chiropractor',
      locations: [Locations.ATHENS.EN, Locations.TINOS.EN],
      services: [Services.CHIROPRACTIC.EN, Services.ACUPUNCTURE.EN],
      bio: 'Dr. Konstantinos (Dino) Arhontoudis, D.C., (Doctor of Chiropractic) was born in Toronto, Canada.  He graduated with his Doctor of Chiropractic (DC) from Cleveland University - Kansas City, Mo. (USA) in 2004.  Shortly after that, he came to Athens, Greece to work with the 2004 Olympic Games to provide care and consultations for many of the Olympic athletes.\r\n\r\nDr. Dino has close to 20 years of clinical experience and has developed several multi-disciplinary wellness & rehabilitation clinics in Greece, UK, and Canada during his career. \r\n\r\nHis international experience has made him one of the most dignified and well sought out chiropractic physicians in his field.  He is a member of the General Chiropractic Council (GCC UK), The Royal College of Chiropractors (UK), The International Federation of Sports Chiropractic (FICS), The Hellenic Chiropractic Association (HCA) as well as a being a certified Medical, Sports Medical and Clinical Acupuncturist with an additional five years training as a Kinesiologist and Physical Educator.  He is also a fully certified Rock Doc through Rocktape in Kinesiotaping, IASTM, and Roc Pod therapy. \r\n\r\n Dr. Dino has worked with several athletes and teams both in the UK and Greece at both amateur, professional and Olympic level.  He resides in Athens, Greece along with his wife and children and maintains a private practice in both Athens, the island of Tinos in the Aegean Cyclades and in central London.',
      personalExperience:
        '• Multiple private practices in Athens, Greece and London, UK\r\n• GCC (UK), ECU (Europe) and HCA (Greece) registered\r\n• Chiropractor for Athens 2004 Olympics\r\n• Rock Doc Certified (UK)\r\n• Current personal chiropractic physician for multiple professional individual athletes and teams.\r\n• Certified Medical and Traditional Acupuncturist (Canada)\r\n• Primary chiropractor for Greek National Rugby and Ice Hockey Teams as well as individual Olympic athletes\r\n• Lecturer at the European Institute of Integrative Health Sciences (EIIHS)',
      image: Dinos.img,
      language: Languages.EN,
    },
    EL: {
      id: 15,
      active: Dinos.active,
      createdAt: '2024-11-28T07:45:58.234324Z',
      updatedAt: '2024-11-28T07:45:58.234340Z',
      primary: true,
      prefix: 'Δρ.',
      fName: 'Κωνσταντίνος',
      lName: 'Αρχοντούδης',
      degree: 'Χειροπράκτορας',
      title: 'DC',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      services: [Services.CHIROPRACTIC.EL, Services.ACUPUNCTURE.EL],
      bio: 'Ο Δρ Κωνσταντίνος (Ντίνο) Αρχοντούδης, D.C., (Διδάκτωρ Χειροπρακτικής) γεννήθηκε στο Τορόντο του Καναδά.  Αποφοίτησε με τον Διδάκτωρ Χειροπρακτικής (DC) από το Πανεπιστήμιο του Κλίβελαντ - Κάνσας Σίτι, Μο. (ΗΠΑ) το 2004. Λίγο μετά, ήρθε στην Αθήνα, Ελλάδα για να εργαστεί με τους Ολυμπιακούς Αγώνες του 2004 για να παράσχει φροντίδα και συμβουλές σε πολλούς οι αθλητές του Ολυμπιακού.\\r\\n\\r\\nΟ Δρ. Ο Ντίνο έχει σχεδόν 20 χρόνια κλινικής εμπειρίας και έχει αναπτύξει πολλές διεπιστημονικές κλινικές ευεξίας και αποκατάστασης στην Ελλάδα, το Ηνωμένο Βασίλειο και τον Καναδά κατά τη διάρκεια της καριέρας του. \\r\\n\\r\\nΗ διεθνής του εμπειρία τον έχει κάνει έναν από τους πιο αξιοπρεπείς και περιζήτητους χειροπρακτικούς ιατρούς στον τομέα του.  Είναι μέλος του Γενικού Συμβουλίου Χειροπρακτικής (GCC UK), του Βασιλικού Κολλεγίου Χειροπρακτικών (Ηνωμένο Βασίλειο), της Διεθνούς Ομοσπονδίας Αθλητικής Χειροπρακτικής (FICS), της Ελληνικής Εταιρείας Χειροπρακτικής (HCA) καθώς και πιστοποιημένος Ιατρικός, Αθλητικός Ιατρικός και Κλινικός Βελονιστής με επιπλέον πενταετή εκπαίδευση ως Κινησιολόγος και Φυσικοπαιδαγωγός.  Είναι επίσης πλήρως πιστοποιημένος Rock Doc μέσω Rocktape στη θεραπεία Kinesiotaping, IASTM και Roc Pod. \\r\\n\\r\\n Ο Δρ Ντίνο έχει συνεργαστεί με αρκετούς αθλητές και ομάδες τόσο στο Ηνωμένο Βασίλειο όσο και στην Ελλάδα σε ερασιτεχνικό, επαγγελματικό και Ολυμπιακό επίπεδο.  Διαμένει στην Αθήνα, μαζί με τη σύζυγο και τα παιδιά του και διατηρεί ιδιωτικό ιατρείο τόσο στην Αθήνα, στο νησί της Τήνου των Κυκλάδων του Αιγαίου όσο και στο κεντρικό Λονδίνο.',
      personalExperience:
        '• Πολλαπλά ιδιωτικά ιατρεία σε Αθήνα, Ελλάδα και Λονδίνο, Ηνωμένο Βασίλειο\\r\\n• Εγγεγραμμένος σε GCC (Ηνωμένο Βασίλειο), ECU (Ευρώπη) και HCA (Ελλάδα)\\r\\n• Χειροπράκτης για Ολυμπιακούς Αγώνες Αθήνα 2004\\r\\n• Πιστοποιημένο Rock Doc (Ηνωμένο Βασίλειο)\\r\\n• Τρέχων προσωπικός ιατρός χειροπρακτικής για πολλούς επαγγελματίες μεμονωμένους αθλητές και ομάδες.\\r\\n• Πιστοποιημένος ιατρικός και παραδοσιακός Βελονιστής (Καναδάς)\\r\\n• Κύριος χειροπράκτης για τις Ελληνικές Εθνικές Ομάδες Ράγκμπι και Χόκεϊ επί Πάγου καθώς και μεμονωμένους Ολυμπιακούς αθλητές\\r\\n• Λέκτορας στο Ευρωπαϊκό Ινστιτούτο Ολοκληρωμένων Επιστημών Υγείας (EIIHS)',
      image: Dinos.img,
      language: Languages.EL,
    },
    FR: {
      id: 14,
      active: Dinos.active,
      createdAt: '2024-11-28T07:44:10.344368Z',
      updatedAt: '2024-11-28T07:44:10.344387Z',
      primary: true,
      prefix: 'Dr.',
      fName: 'Konstantino',
      lName: 'Arhontoudis',
      degree: 'DC',
      title: 'Chiropracteur',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      services: [Services.CHIROPRACTIC.FR, Services.ACUPUNCTURE.FR],
      bio: "Le Dr Konstantinos (Dino) Arhontoudis, D.C., (docteur en chiropratique) est né à Toronto, au Canada.  Il a obtenu son doctorat en chiropratique (DC) de l'Université de Cleveland - Kansas City, Missouri (États-Unis) en 2004. Peu de temps après, il est venu à Athènes, en Grèce, pour travailler avec les Jeux Olympiques de 2004 afin de prodiguer des soins et des consultations à de nombreux patients. les athlètes olympiques.\\r\\n\\r\\nDr. Dino possède près de 20 ans d'expérience clinique et a développé plusieurs cliniques multidisciplinaires de bien-être et de réadaptation en Grèce, au Royaume-Uni et au Canada au cours de sa carrière. \\r\\n\\r\\nSon expérience internationale a fait de lui l'un des médecins chiropratiques les plus dignes et les plus recherchés dans son domaine.  Il est membre du General Chiropractic Council (GCC UK), du Royal College of Chiropractors (Royaume-Uni), de la Fédération internationale de chiropratique sportive (FICS), de l'Hellenic Chiropractic Association (HCA), ainsi que d'un médecin certifié. Acupuncteur médical et clinique avec une formation supplémentaire de cinq ans en tant que kinésiologue et éducateur physique.  Il est également un Rock Doc entièrement certifié via Rocktape en kinésiotaping, IASTM et thérapie Roc Pod. \\r\\n\\r\\n Le Dr Dino a travaillé avec plusieurs athlètes et équipes au Royaume-Uni et en Grèce aux niveaux amateur, professionnel et olympique.  Il réside à Athènes, en Grèce, avec sa femme et ses enfants et possède un cabinet privé à Athènes, sur l'île de Tinos dans les Cyclades égéennes et dans le centre de Londres.",
      personalExperience:
        "• Plusieurs cabinets privés à Athènes, en Grèce et à Londres, au Royaume-Uni\\r\\n• GCC (Royaume-Uni), ECU (Europe) et HCA (Grèce) enregistrés\\r\\n• Chiropracteur pour les Jeux olympiques d'Athènes 2004\\r\\n• Certifié Rock Doc (Royaume-Uni)\\r\\n• Médecin chiropratique personnel actuel pour plusieurs athlètes et équipes professionnels individuels.\\r\\n• Acupuncteur médical et traditionnel certifié (Canada)\\r\\n• Chiropracteur principal pour le rugby national grec et Équipes de hockey sur glace ainsi que athlètes olympiques individuels\\r\\n• Maître de conférences à l'Institut européen des sciences de la santé intégrative (EIIHS)",
      image: Dinos.img,
      language: Languages.FR,
    },
  },
  BENJAMIN: {
    EN: {
      id: 2,
      active: Benjamin.active,
      createdAt: '2024-04-19T09:01:16.669734Z',
      updatedAt: '2024-04-25T08:40:03.787430Z',
      primary: false,
      prefix: null,
      fName: 'Benjamin',
      lName: 'Saez',
      degree: 'L.Ac.',
      title: 'Acupuncturist & Massage Therapist',
      locations: [Locations.ATHENS.EN, Locations.TINOS.EN],
      services: [Services.ACUPUNCTURE.EN],
      bio: 'Benjamin Saez is a graduate of International College of Oriental Medicine (ICOM) East Grinstead, UK where he received his Bachelors of Acupuncture in conjunction with Greenwich University.  Prior to graduating with his degree in Oriental Medicine, he studied Ayurveda in Coimbatore, India. \r\n\r\nShortly after graduating, Benjamin volunteered and provided Acupuncture treatments at the main hospital in Stone Town, Zanzibar working with a group of commissioned Chinese doctors that were lending their aid with the majority of compromised healthcare conditions commonly seen. \r\n\r\nHe spent time working with the indigenous population treating hemiplegia, recurrent miscarriage, diabetes, malaria, and a host of other medical conditions inside the hospital setting.  He currently resides in Athens, Greece and maintains a private practice in addition to teaching specialty courses in classical Chinese medicine.',
      personalExperience:
        '• Massage Therapist, Arya Vaidya Pharmacy, Coimbatore, India\r\n• Treating physical and psychological conditions in the local Ayurvedic hospital.\r\n• Private Practice, Bordeaux, France\r\n• Provides services in East Asian Medicine which include Acupuncture, Manual Therapy, and Functional Nutrition.\r\n• Acupuncture Physician, Mnazi Moja Hospital, Stone Town, Zanzibar\r\n• Volunteered and provided Acupuncture treatments to the indigenous population of Zanzibar in the main hospital in Stone Town. Worked with commissioned Chinese doctors threatening cases of severe cases of diabetes, hemiplegia, and malaria, along with other medical conditions.\r\n• Private Practice, Athens Acupuncture, Athens, Greece\r\n• Founder, Lecturer & Clinic Supervisor at the European Institute of Integrative Health Sciences (EIIHS).\r\n• Head of Education for the European Traditional Chinese Medicine Association (ETCMA)',
      image: Benjamin.img,
      language: Languages.EN,
    },
    EL: {
      id: 9,
      active: Benjamin.active,
      createdAt: '2024-11-28T07:34:43.255928Z',
      updatedAt: '2024-11-28T07:34:43.255946Z',
      primary: false,
      prefix: null,
      fName: 'Benjamin',
      lName: 'Saez',
      degree: 'L.Ac.',
      title: 'Βελονιστής & Μασάζ',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      services: [Services.ACUPUNCTURE.EL],
      bio: 'Ο Benjamin Saez είναι απόφοιτος του International College of Oriental Medicine (ICOM) East Grinstead, UK όπου έλαβε το πτυχίο του στον βελονισμό σε συνεργασία με το Πανεπιστήμιο Greenwich.  Πριν αποφοιτήσει με το πτυχίο του στην Ανατολική Ιατρική, σπούδασε Αγιουρβέδα στο Κοϊμπατόρε της Ινδίας. \\r\\n\\r\\nΛίγο μετά την αποφοίτησή του, ο Benjamin προσφέρθηκε εθελοντικά και παρείχε θεραπείες βελονισμού στο κεντρικό νοσοκομείο στο Stone Town της Ζανζιβάρης, συνεργαζόμενος με μια ομάδα εντεταλμένων Κινέζων γιατρών που δάνειζαν τη βοήθειά τους με την πλειονότητα των διακυβευμένων συνθηκών υγειονομικής περίθαλψης που συνήθως παρατηρούνται. \\r\\n\\r\\nΠέρασε χρόνο δουλεύοντας με τον αυτόχθονα πληθυσμό θεραπεύοντας την ημιπληγία, τις επαναλαμβανόμενες αποβολές, τον διαβήτη, την ελονοσία και μια σειρά από άλλες ιατρικές καταστάσεις εντός του νοσοκομειακού περιβάλλοντος.  Σήμερα κατοικεί στην Αθήνα, Ελλάδα και διατηρεί ιδιωτικό ιατρείο εκτός από τη διδασκαλία μαθημάτων ειδικότητας στην κλασική κινεζική ιατρική.',
      personalExperience:
        '• Θεραπευτής μασάζ, Arya Vaidya Pharmacy, Coimbatore, Ινδία\\r\\n• Αντιμετώπιση σωματικών και ψυχολογικών καταστάσεων στο τοπικό νοσοκομείο Αγιουρβέδα.\\r\\n• Ιδιωτικό ιατρείο, Μπορντό, Γαλλία\\r\\n• Παρέχει υπηρεσίες στην Ιατρική της Ανατολικής Ασίας που περιλαμβάνουν Βελονισμό, Χειροκίνητη Θεραπεία και Λειτουργική Διατροφή.\\r\\n• Ιατρός Βελονισμού, Νοσοκομείο Mnazi Moja, Stone Town, Zanzibar\\r\\n• Προσφέρθηκε εθελοντικά και παρείχε θεραπείες βελονισμού στον αυτόχθονα πληθυσμό της Ζανζιβάρης στο κεντρικό νοσοκομείο της Stone Town. Συνεργάστηκε με εξουσιοδοτημένους Κινέζους γιατρούς που απειλούν περιπτώσεις σοβαρών περιπτώσεων διαβήτη, ημιπληγίας και ελονοσίας, μαζί με άλλες ιατρικές καταστάσεις.\\r\\n• Ιδιωτικό ιατρείο, Athens Acupuncture, Αθήνα, Ελλάδα\\r\\n• Ιδρυτής, Λέκτορας & Επόπτης Κλινικής στο το Ευρωπαϊκό Ινστιτούτο Ολοκληρωμένων Επιστημών Υγείας (EIIHS).\\r\\n• Υπεύθυνος Εκπαίδευσης για την Ευρωπαϊκή Ένωση Παραδοσιακής Κινεζικής Ιατρικής (ETCMA)',
      image: Benjamin.img,
      language: Languages.EL,
    },
    FR: {
      id: 8,
      active: Benjamin.active,
      createdAt: '2024-11-28T07:32:55.736541Z',
      updatedAt: '2024-11-28T07:32:55.736558Z',
      primary: false,
      prefix: null,
      fName: 'Benjamin',
      lName: 'Saez',
      degree: 'L.Ac.',
      title: 'Acupuncteur et massothérapeute',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      services: [Services.ACUPUNCTURE.FR],
      bio: "Benjamin Saez est diplômé du Collège international de médecine orientale (ICOM) d'East Grinstead, au Royaume-Uni, où il a obtenu son baccalauréat en acupuncture en collaboration avec l'Université de Greenwich.  Avant d'obtenir son diplôme en médecine orientale, il a étudié l'Ayurveda à Coimbatore, en Inde. \\r\\n\\r\\nPeu de temps après avoir obtenu son diplôme, Benjamin s'est porté volontaire et a prodigué des traitements d'acupuncture à l'hôpital principal de Stone Town, à Zanzibar, en collaboration avec un groupe de médecins chinois mandatés qui apportaient leur aide pour la majorité des problèmes de santé compromis couramment observés. \\r\\n\\r\\nIl a passé du temps à travailler avec la population autochtone pour traiter l'hémiplégie, les fausses couches à répétition, le diabète, le paludisme et une foule d'autres problèmes médicaux en milieu hospitalier.  Il réside actuellement à Athènes, en Grèce et exerce en pratique privée en plus d'enseigner des cours spécialisés en médecine classique chinoise.",
      personalExperience:
        "• Massothérapeute, Pharmacie Arya Vaidya, Coimbatore, Inde\\r\\n• Traitement des problèmes physiques et psychologiques dans l'hôpital ayurvédique local.\\r\\n• Cabinet privé, Bordeaux, France\\r\\n• Fournit des services de médecine d'Asie de l'Est qui comprennent l'acupuncture, la thérapie manuelle et la nutrition fonctionnelle.\\r\\n• Médecin en acupuncture, hôpital Mnazi Moja, Stone Town, Zanzibar\\r\\n• Bénévole et a fourni des traitements d'acupuncture à la population indigène de Zanzibar dans le principal hôpital de Stone Town. A travaillé avec des médecins chinois mandatés pour menacer des cas graves de diabète, d'hémiplégie et de paludisme, ainsi que d'autres problèmes de santé.\\r\\n• Cabinet privé, Acupuncture d'Athènes, Athènes, Grèce\\r\\n• Fondateur, conférencier et superviseur de clinique à l'Institut européen des sciences de la santé intégrative (EIIHS).\\r\\n• Responsable de l'éducation de l'Association européenne de médecine traditionnelle chinoise (ETCMA)",
      image: Benjamin.img,
      language: Languages.FR,
    },
  },
  GEORGETTE: {
    EN: {
      id: 3,
      active: Georgette.active,
      createdAt: '2024-04-19T09:02:47.024806Z',
      updatedAt: '2024-04-19T09:02:47.024841Z',
      primary: false,
      prefix: null,
      fName: 'Georgette',
      lName: 'Young',
      degree: 'PhD.',
      title: 'Acupuncturist',
      locations: [Locations.ATHENS.EN],
      services: [Services.ACUPUNCTURE.EN],
      bio: 'Georgette Young, L.Ac., DAOM, is a graduate of Pacific College of Oriental Medicine (San Diego) where she received both her Master of Science & Doctoral Degrees in Acupuncture & Oriental Medicine.  She is also California State Licensed & National Board Certified by the National Council Commission for Acupuncture & Oriental Medicine (NCCAOM). These certifications are a mark of excellence that Georgette has met all the professional standards for the safe and competent practice of acupuncture & Chinese herbology.\r\n\r\n​As an American living in Athens, Greece, she brings her knowledge and experience in the field of East Asian Medicine & Integrative Women’s Health Care as the first American licensed acupuncturist to be a collaborative staff member at the Institute of Life – a fertility clinic located inside IASO, one of Europe’s largest maternity hospitals.\r\n\r\n​In addition, she is an approved Professional Development Educator with the NCCAOM (USA) and is an international consultant and lectures globally on various topics of Traditional East Asian Medicine and Acupuncture for MD’s, Physiotherapists, Psychologists, Nurses, and TCM students.  She also serves as the Hon. Secretary for the European Traditional Chinese Medicine Association (ETCMA) and is involved with the ongoing mission of promoting Chinese medicine in Europe.',
      personalExperience:
        '• Private Practice, San Diego, California\r\n• Qualified Medical Evaluator (QME) for the California Worker’s Compensation Division.  Evaluated work related injuries as a neutral 3rd party investigator and provided expert testimonial witness reports for injury disputes.\r\n• Certified in Acupuncture Orthopedics\r\n• Acupuncture Physician at Sea, Steiner Transocean, Miami, Florida\r\n• Pioneered the original Acupuncture-At-Sea Program On-Board Celebrity, Seaborn, Azamara, and Crystal Cruise Ships\r\n• On-Board in-Resident Acupuncture Physician & Oriental Medicine Clinic Manager\r\n• Set up, managed, and directed all aspects of on-board clinic operations: marketing & education, enrichment lectures, and patient care.\r\n• NCCAOM Approved Professional Development Educator, USA & Abroad\r\n• International Professional Development Educator and Consultant Promoting Knowledge of Traditional East Asian Medicine and Acupuncture for MD’s, Physiotherapists, Psychologists, Nurses, and TCM students.\r\n• Assisted Reproductive Acupuncturist, Institute of Life – Athens, Greece\r\n• She brings to Institute of Life her field specialty in TCM Gynecology & Obstetrics and treats a wide variety of conditions related to reproductive and general women’s health\r\n• Honorary Secretary for the European Traditional Chinese Medicine Association (ETCMA)\r\n• Founder, Lecturer & Clinic Supervisor at the European Institute of Integrative Health Sciences (EIIHS).',
      image: Georgette.img,
      language: Languages.EN,
    },
    EL: {
      id: 6,
      active: Georgette.active,
      createdAt: '2024-11-28T07:28:47.108689Z',
      updatedAt: '2024-11-28T07:28:47.108708Z',
      primary: false,
      prefix: null,
      fName: 'Ζορζέτ',
      lName: 'Young',
      degree: 'PhD.',
      title: 'βελονιστής',
      locations: [Locations.ATHENS.EL, Locations.TINOS.EL],
      services: [Services.ACUPUNCTURE.EL],
      bio: 'Η Georgette Young, L.Ac., DAOM, είναι απόφοιτος του Pacific College of Oriental Medicine (Σαν Ντιέγκο), όπου έλαβε και τα δύο Master of Science και διδακτορικά διπλώματα στον Βελονισμό και την Ανατολική Ιατρική.  Είναι επίσης αδειοδοτημένη από την Πολιτεία της Καλιφόρνια και πιστοποιημένη από το Εθνικό Συμβούλιο από την Επιτροπή του Εθνικού Συμβουλίου για τον Βελονισμό και την Ανατολική Ιατρική (NCCAOM). Αυτές οι πιστοποιήσεις αποτελούν ένδειξη αριστείας ότι η Georgette πληροί όλα τα επαγγελματικά πρότυπα για την ασφαλή και ικανή πρακτική του βελονισμού και της κινεζικής βοτανολογίας.\\r\\n\\r\\nΩς Αμερικανίδα που ζει στην Αθήνα, Ελλάδα, φέρνει τις γνώσεις και την εμπειρία της στην στον τομέα της Ιατρικής Ανατολικής Ασίας και της Ολοκληρωμένης Γυναικείας Υγείας ως ο πρώτος Αμερικανός αδειούχος βελονιστής που είναι συνεργατικό μέλος του προσωπικού στο Institute of Life – a κλινική γονιμότητας που βρίσκεται μέσα στο ΙΑΣΩ, ένα από τα μεγαλύτερα μαιευτήρια της Ευρώπης.\\r\\n\\r\\nΕπιπλέον, είναι εγκεκριμένη Εκπαιδεύτρια Επαγγελματικής Ανάπτυξης με το NCCAOM (ΗΠΑ) και είναι διεθνής σύμβουλος και δίνει διαλέξεις παγκοσμίως σε διάφορα θέματα της Παραδοσιακής Ανατολής Ασιατική Ιατρική και Βελονισμός για MD, Φυσικοθεραπευτές, Ψυχολόγους, Νοσηλευτές και TCM φοιτητές.  Υπηρετεί επίσης ως Επίτιμος. Γραμματέας του Ευρωπαϊκού Συνδέσμου Παραδοσιακής Κινεζικής Ιατρικής (ETCMA) και συμμετέχει στη διαρκή αποστολή της προώθησης της κινεζικής ιατρικής στην Ευρώπη.',
      personalExperience:
        '• Ιδιωτικό ιατρείο, Σαν Ντιέγκο, Καλιφόρνια\\r\\n• Πιστοποιημένος ιατρικός αξιολογητής (QME) για το τμήμα αποζημίωσης εργαζομένων της Καλιφόρνια.  Αξιολόγησε τους τραυματισμούς που σχετίζονται με την εργασία ως ουδέτερος ερευνητής τρίτου μέρους και παρείχε αναφορές μαρτυριών εμπειρογνωμόνων για διαφωνίες τραυματισμών.\\r\\n• Πιστοποιημένος στην Ορθοπεδική Βελονισμού\\r\\n• Ιατρός βελονισμού στη θάλασσα, Steiner Transocean, Μαϊάμι, Φλόριντα\\r\\n• Πρωτοπόρος στο αρχικό πρόγραμμα Acupuncture-At-Sea On-Board Celebrity, Seaborn, Azamara και Crystal Cruise Ships\\r\\n• On-Board Acupuncture Physician & Oriental Medicine Clinic Manager\\r\\n• Ρύθμιση, διαχείριση και διεύθυνση όλων των πτυχών των εργασιών της κλινικής επί του σκάφους: μάρκετινγκ και εκπαίδευση, εμπλουτισμός διαλέξεις και φροντίδα ασθενών.\\r\\n• Εγκεκριμένος Εκπαιδευτής Επαγγελματικής Ανάπτυξης από το NCCAOM, ΗΠΑ & Στο εξωτερικό\\r\\n• Εκπαιδευτής και σύμβουλος Διεθνούς Επαγγελματικής Ανάπτυξης Προώθηση της Γνώσης της Παραδοσιακής Ιατρικής και Βελονισμού της Ανατολικής Ασίας για Ιατρούς, Φυσικοθεραπευτές, Ψυχολόγους, Νοσηλευτές και φοιτητές TCM.\\r\\n• Υποβοηθούμενος Αναπαραγωγικός Βελονιστής, Ινστιτούτο Ζωής – Αθήνα, Αθήνα, \\r\\n• Φέρνει στο Institute of Life την ειδικότητά της στο TCM Γυναικολογία και Μαιευτική και αντιμετωπίζει μια μεγάλη ποικιλία καταστάσεων που σχετίζονται με την αναπαραγωγική και γενική υγεία της γυναίκας\\r\\n• Επίτιμος Γραμματέας της Ευρωπαϊκής Ένωσης Παραδοσιακής Κινεζικής Ιατρικής (ETCMA)\\r\\n• Ιδρυτής, Λέκτορας και Επόπτης Κλινικής στο Ευρωπαϊκό Ινστιτούτο Ολοκληρωτικές Επιστήμες Υγείας (EIIHS).',
      image: Georgette.img,
      language: Languages.EL,
    },
    FR: {
      id: 7,
      active: Georgette.active,
      createdAt: '2024-11-28T07:30:52.378548Z',
      updatedAt: '2024-11-28T07:30:52.378566Z',
      primary: false,
      prefix: null,
      fName: 'Georgette',
      lName: 'Young',
      degree: 'PhD.',
      title: 'Acupunctrice',
      locations: [Locations.ATHENS.FR, Locations.TINOS.FR],
      services: [Services.ACUPUNCTURE.FR],
      bio: "Georgette Young, L.Ac., DAOM, est diplômée du Pacific College of Oriental Medicine (San Diego), où elle a obtenu sa maîtrise ès sciences et son doctorat en acupuncture et médecine orientale.  Elle est également agréée par l'État de Californie et certifiée par le Conseil national de la Commission du Conseil national pour l'acupuncture et la médecine orientale (NCCAOM). Ces certifications sont une marque d'excellence selon laquelle Georgette a satisfait à toutes les normes professionnelles pour une pratique sûre et compétente de l'acupuncture et de l'herbologie chinoise.\\r\\n\\r\\nEn tant qu'Américaine vivant à Athènes, en Grèce, elle apporte ses connaissances et son expérience dans le domaine de la médecine d'Asie de l'Est et des soins de santé intégratifs des femmes en tant que premier acupuncteur américain agréé à faire partie du personnel collaboratif de l'Institute of Life - une clinique de fertilité située au sein de l'IASO, l'une des plus grandes maternités d'Europe hôpitaux.\\r\\n\\r\\nEn outre, elle est éducatrice en développement professionnel agréée par le NCCAOM (États-Unis), consultante internationale et donne des conférences dans le monde entier sur divers sujets de la médecine traditionnelle d'Asie de l'Est et de l'acupuncture pour les médecins, les physiothérapeutes, les psychologues, Infirmières et étudiants en MTC.  Elle est également l'hon. Secrétaire de l'Association européenne de médecine traditionnelle chinoise (ETCMA) et participe à la mission actuelle de promotion de la médecine chinoise en Europe.",
      personalExperience:
        "• Cabinet privé, San Diego, Californie\\r\\n• Évaluateur médical qualifié (QME) pour la division d'indemnisation des accidents du travail de Californie.  Évalué les blessures liées au travail en tant qu'enquêteur tiers neutre et fourni des rapports de témoins experts pour les litiges liés aux blessures.\\r\\n• Certifié en orthopédie d'acupuncture\\r\\n• Médecin d'acupuncture en mer, Steiner Transocean, Miami, Floride\\r\\n• Pionnier du programme original d'acupuncture en mer à bord des navires de croisière Celebrity, Seaborn, Azamara et Crystal\\r\\n• À bord Médecin d'acupuncture résident et responsable de la clinique de médecine orientale\\r\\n• Mise en place, gère et dirige tous les aspects des opérations de la clinique à bord : marketing et éducation, conférences d'enrichissement et soins aux patients.\\r\\n• Professionnel agréé par le NCCAOM Éducateur en développement, États-Unis et à l'étranger\\r\\n• Éducateur en développement professionnel international et consultant promouvant la connaissance de la médecine traditionnelle d'Asie de l'Est et de l'acupuncture pour les médecins, physiothérapeutes, psychologues, infirmières et Étudiants en MTC.\\r\\n• Acupuncteur en reproduction assistée, Institut de la vie - Athènes, Grèce\\r\\n• Elle apporte à l'Institut de la vie sa spécialité de domaine en gynécologie et obstétrique de MTC et traite une grande variété de conditions liées à la reproduction et à l'obstétrique générale. santé des femmes\\r\\n• Secrétaire honoraire de l'Association européenne de médecine traditionnelle chinoise (ETCMA)\\r\\n• Fondatrice, chargée de cours et superviseur de clinique à l'Institut européen des sciences de la santé intégrative (EIIHS).",
      image: Georgette.img,
      language: Languages.FR,
    },
  },
};

const practitionersArray = Object.values(Practitioners).flatMap(practitionersGroup =>
  Object.values(practitionersGroup),
);

const activePractitioners = practitionersArray.filter(item => item.active !== false);

export const PractitionersResponse = {
  count: activePractitioners.length,
  results: activePractitioners,
};
