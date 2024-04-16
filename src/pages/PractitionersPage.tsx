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

  return (
    <div className={'boxVerticalGap'} style={{ padding: 'var(--spacing-2)' }}>
      <h1 className={'pageTitle'}>{t('practitioners.pract')}</h1>
      <div className={'boxContentContainer'}>
        {practitioners.length > 0 &&
          practitioners.map((it: Practitioner) => <PractitionerData data={it} />)}
      </div>
    </div>
  );
};

export default PractitionersPage;
