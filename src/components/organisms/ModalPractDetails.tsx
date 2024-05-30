import { FC } from 'react';
import ModalBase from '../molecules/ModalBase';
import { Practitioner } from '../../types/Practitioner';
import { useTranslation } from 'react-i18next';
import TextContentTitle from '../atoms/TextContentTitle';
import TextKeyValue from '../atoms/TextKeyValue';

type Props = {
  open: boolean;
  data: Practitioner;
  setOpen: (value: boolean) => void;
};

const ModalPractDetails: FC<Props> = ({ open, data, setOpen }) => {
  const { t } = useTranslation();

  const cities =
    data.locations.length > 0 ? data.locations.map(it => <> {it.city}.</>) : '';
  const services =
    data.services.length > 0 ? data.services.map(it => <> {it.title}.</>) : '';

  return (
    <ModalBase open={open} setOpen={setOpen}>
      <div className={'boxVerticalGap'}>
        <TextContentTitle>
          {data.prefix && data.prefix + ' '}
          {data.fName} {data.lName}
          {data.degree && ' ' + data.degree}
        </TextContentTitle>
        <p className={'paragraphs'}>
          <pre style={{ textWrap: 'wrap' }}>{data.bio}</pre>
        </p>
        <h4 className={'subTitle'}>{t('about.personal')}</h4>
        <p className={'paragraphs'}>
          <pre style={{ textWrap: 'wrap' }}>{data.personalExperience}</pre>
        </p>

        <TextKeyValue keyLeft={t('about.available')} value={cities as string} />
        <TextKeyValue keyLeft={t('about.provides')} value={services as string} />
      </div>
    </ModalBase>
  );
};

export default ModalPractDetails;
