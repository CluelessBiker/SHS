import { Service } from '../types/Service';
import { FC } from 'react';
import { Location } from '../types/Location';
import ImageCont from './atoms/ImageCont';
import TextContentTitle from './atoms/TextContentTitle';
import { useTranslation } from 'react-i18next';
import TextKeyValue from './atoms/TextKeyValue';
import BoxContent from './atoms/BoxContent';

type Props = {
  data: Service;
};

const ServiceData: FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <BoxContent variant={'verticalGap'}>
      <div className={'boxVerticalGap'}>
        <TextContentTitle>{data.title}</TextContentTitle>

        <ImageCont src={data.image} altText={data.title} variant={'large'} />
      </div>
      <div className={'boxVerticalGap'}>
        <p>{data.blurb}</p>
        <p>{data.description}</p>
      </div>
      <div className={'boxVerticalGap'}>
        {data.duration && (
          <TextKeyValue
            keyLeft={t('generic.duration')}
            value={data.duration.toString()}
          />
        )}
        {data.price && (
          <TextKeyValue keyLeft={t('generic.price')} value={`€${data.price}`} />
        )}
        <div className={'boxHorizontalGap'}>
          <TextKeyValue keyLeft={t('services.offeredAt')} value={''} />
          {data.locations.map((it: Location) => (
            <p key={it.id}>{it.title}. </p>
          ))}
        </div>
      </div>
    </BoxContent>
  );
};

export default ServiceData;
