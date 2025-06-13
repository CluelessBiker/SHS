import { useTranslation } from 'react-i18next';
import { Service } from '../types/Service';
import ServiceData from '../components/ServiceData';
import TextPageHeading from '../components/atoms/TextPageHeading';
import { handleLang } from '../utils/handleLang';
import BoxVerticalGap from '../components/atoms/BoxVerticalGap';
import { ServicesResponse } from '../constants/services';
// import { useEffect, useState } from 'react';
// import { axiosReq } from '../api/axiosDefaults';

const ServicesPage = () => {
  const { t } = useTranslation();
  const lang: 'en' | 'el' | 'fr' =
    (localStorage.getItem('i18nextLng') as 'en' | 'el' | 'fr') || 'en';

  // const [services, setServices] = useState<Service[]>([]);
  const services = ServicesResponse.results;
  const servicesLang = handleLang<Service>(services, lang);

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const { data } = await axiosReq.get('/services/');
  //       setServices(data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchServices();
  // }, []);

  return (
    <BoxVerticalGap style={{ padding: 'var(--spacing-2)' }}>
      <TextPageHeading>{t('services.offered')}</TextPageHeading>
      <div className={'boxContentContainer'}>
        {servicesLang &&
          servicesLang.map((data: Service) => <ServiceData data={data} key={data.id} />)}
      </div>
    </BoxVerticalGap>
  );
};

export default ServicesPage;
