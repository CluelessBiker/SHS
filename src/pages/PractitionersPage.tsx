import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults';
import { Practitioner } from '../types/Practitioner';
import PractitionerData from '../components/organisms/PractitionerData';
import ModalPractDetails from '../components/organisms/ModalPractDetails';
import TextPageHeading from '../components/atoms/TextPageHeading';

const PractitionersPage = () => {
  const { t } = useTranslation();

  const [details, setDetails] = useState<Practitioner>();
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [open, setOpen] = useState<boolean>(false);

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

  /**
   * Fix sort order to display owner (primary) first
   */
  const primaryFirst = (data: Practitioner[]) => {
    return data.sort((it: Practitioner) => (it.primary ? -1 : 1));
  };

  return (
    <div className={'boxVerticalGap'} style={{ padding: 'var(--spacing-2)' }}>
      <TextPageHeading>{t('practitioners.pract')}</TextPageHeading>
      <div className={'boxContentContainer'}>
        {primaryFirst(practitioners).length > 0 &&
          practitioners.map((it: Practitioner) => (
            <PractitionerData
              data={it}
              key={it.id}
              onClick={() => {
                setDetails(it);
                setOpen(true);
              }}
            />
          ))}
      </div>
      {details && <ModalPractDetails open={open} data={details} setOpen={setOpen} />}
    </div>
  );
};

export default PractitionersPage;
