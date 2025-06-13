import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Practitioner } from '../types/Practitioner';
import PractitionerData from '../components/organisms/PractitionerData';
import ModalPractDetails from '../components/organisms/ModalPractDetails';
import TextPageHeading from '../components/atoms/TextPageHeading';
import { handleLang } from '../utils/handleLang';
import BoxVerticalGap from '../components/atoms/BoxVerticalGap';
import { PractitionersResponse } from '../constants/practitioners';

const PractitionersPage = () => {
  const { t } = useTranslation();
  const lang: 'en' | 'el' | 'fr' =
    (localStorage.getItem('i18nextLng') as 'en' | 'el' | 'fr') || 'en';

  const [details, setDetails] = useState<Practitioner>();
  // const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const practitioners = PractitionersResponse.results;
  const practitionersLang = handleLang(practitioners, lang);

  // useEffect(() => {
  //   const fetchPractitioners = async () => {
  //     try {
  //       const { data } = await axiosReq.get('/practitioners/');
  //       setPractitioners(data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchPractitioners();
  // }, []);

  /**
   * Fix sort order to display owner (primary) first
   */
  const primaryFirst = (data: Practitioner[]) => {
    return data.sort((it: Practitioner) => (it.primary ? -1 : 1));
  };

  return (
    <BoxVerticalGap style={{ padding: 'var(--spacing-2)' }}>
      <TextPageHeading>{t('practitioners.pract')}</TextPageHeading>
      <div className={'boxContentContainer'}>
        {practitionersLang.length > 0 &&
          primaryFirst(practitionersLang).map((it: Practitioner) => (
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
    </BoxVerticalGap>
  );
};

export default PractitionersPage;
