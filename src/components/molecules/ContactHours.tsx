// import { Hour } from '../../types/Hour';
// import { useEffect, useState } from 'react';
// import { axiosReq } from '../../api/axiosDefaults';
import TextKeyValue from '../atoms/TextKeyValue';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import TextSection from '../atoms/TextSection';
import BoxContent from '../atoms/BoxContent';
import { HoursResponse } from '../../constants/hours';

const ContactHours = () => {
  const { t } = useTranslation();

  // const [hours, setHours] = useState<Hour[]>([]);

  // useEffect(() => {
  //   const fetchHours = async () => {
  //     try {
  //       const { data } = await axiosReq.get(`/hours/`);
  //       setHours(data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchHours();
  // }, []);

  const hours = HoursResponse.results;

  const foundDate = (date: string) => {
    const found = hours.find(hour => hour.day === date);
    if (found) {
      return found;
    } else {
      return { open: 'N/A', close: 'N/A', info: 'Closed' };
    }
  };

  const FormatTime = (time: string) => {
    return moment(time, 'HH:mm').format('h:mm a');
  };

  const week = foundDate('mon');
  const saturday = foundDate('sat');
  const sunday = foundDate('sun');

  return (
    <div>
      <BoxContent variant={'verticalGap halfGap'}>
        <TextSection text={t('clinicHours')} heading />
        <TextKeyValue
          value={`${FormatTime(week.open)} - ${FormatTime(week.close)}`}
          keyLeft={`${t('week.short.mon')}-${t('week.short.fri')}`}
        />
        <TextKeyValue
          keyLeft={t('week.long.sat')}
          value={`${FormatTime(saturday.open)} - ${FormatTime(saturday.close)}`}
        />
        <TextKeyValue keyLeft={t('week.long.sun')} value={sunday.info || ''} />
      </BoxContent>
    </div>
  );
};

export default ContactHours;
