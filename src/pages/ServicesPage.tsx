import { useTranslation } from 'react-i18next';
import { Service } from '../types/Service.ts';
import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults.ts';
import ServiceData from '../components/ServiceData.tsx';

const ServicesPage = () => {
  const { t } = useTranslation();

  const [services, setServices] = useState<Service[]>([]);

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
      <h3 className={'pageTitle'}>{t('services.offered')}</h3>
      <div className={'boxContentContainer'}>
        {services &&
          services.map((data: Service) => <ServiceData data={data} key={data.id} />)}
      </div>
    </div>
  );
};

export default ServicesPage;
