import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults.ts';
import { Practitioner } from '../types/Practitioner.ts';
import PractitionerData from '../components/PractitionerData.tsx';

const PractitionersPage = () => {
  const { t } = useTranslation();

  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);

  useEffect(() => {
    const fetchPractitioners = async () => {
      try {
        const { data } = await axiosReq.get('/practitioners/');
        setPractitioners(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPractitioners();
  }, []);

  console.log(practitioners);

  return (
    <div>
      <h3>{t('practitioners.pract')}</h3>
      {practitioners.length > 0 &&
        practitioners.map((it: Practitioner) => <PractitionerData data={it} />)}
    </div>
  );
};

export default PractitionersPage;
