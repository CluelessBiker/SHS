import { FC } from 'react';
import ModalBase from '../molecules/ModalBase';
import { Practitioner } from '../../types/Practitioner';
import { useTranslation } from 'react-i18next';
import TextContentTitle from '../atoms/TextContentTitle';

type Props = {
  open: boolean;
  data: Practitioner;
  setOpen: (value: boolean) => void;
};

const ModalPractDetails: FC<Props> = ({ open, data, setOpen }) => {
  const { t } = useTranslation();

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

        <p>
          <span className={'dataLabel paragraphs'}>{t('about.available')}:</span>
          {data.locations.length > 0 && data.locations.map(it => <> {it.city}.</>)}
        </p>
        <p style={{ textAlign: 'center' }}>
          <span className={'dataLabel'}>{t('about.provides')}:</span>
          {data.services.length > 0 && data.services.map(it => <> {it.title}.</>)}
        </p>
      </div>
    </ModalBase>
  );
};

export default ModalPractDetails;
