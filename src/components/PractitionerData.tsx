import { FC } from 'react';
import { Practitioner } from '../types/Practitioner';
import { useTranslation } from 'react-i18next';

type Props = {
  data: Practitioner;
};

const PractitionerData: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className={'boxContent boxVerticalGap'}>
      <div className={'boxVerticalGap'}>
        <h3 className={'contentTitle'}>
          {data.prefix && data.prefix + ' '}
          {data.fName} {data.lName}
          {data.degree && ' ' + data.degree}
        </h3>
        <h4 className={'subTitle'}>{data.title}</h4>
        <img
          src={data.image}
          className={'roundImage'}
          alt={`${data.title} image`}
          aria-label={`${data.title} image`}
        />
      </div>
      <div className={'boxVerticalGap'}>
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
    </div>
  );
};

export default PractitionerData;
