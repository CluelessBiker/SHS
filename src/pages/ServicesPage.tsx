import { useTranslation } from 'react-i18next';
import { Service } from '../types/Service.ts';
import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults.ts';

const ServicesPage = () => {
  const { t } = useTranslation();

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axiosReq.get('/services/');
        setServices(data.resultes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchServices();
  }, []);

  console.log(services);

  return (
    <div>
      <h3>{t('services.offered')}</h3>
    </div>
  );
};

export default ServicesPage;
