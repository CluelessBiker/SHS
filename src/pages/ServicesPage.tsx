import { useTranslation } from 'react-i18next';
import { Service } from '../types/Service';
import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults';
import ServiceData from '../components/ServiceData';
import TextPageHeading from '../components/atoms/TextPageHeading';
import { handleLang } from '../utils/handleLang';

const ServicesPage = () => {
  const { t } = useTranslation();
  const lang: 'en' | 'el' | 'fr' =
    (localStorage.getItem('i18nextLng') as 'en' | 'el' | 'fr') || 'en';

  const [services, setServices] = useState<Service[]>([]);
  const servicesLang = handleLang<Service>(services, lang);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axiosReq.get('/services/');
        setServices(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className={'boxVerticalGap'} style={{ padding: 'var(--spacing-2)' }}>
      <TextPageHeading>{t('services.offered')}</TextPageHeading>
      <div className={'boxContentContainer'}>
        {servicesLang &&
          servicesLang.map((data: Service) => <ServiceData data={data} key={data.id} />)}
      </div>
    </div>
  );
};

export default ServicesPage;
