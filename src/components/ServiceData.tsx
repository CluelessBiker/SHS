import { Service } from '../types/Service';
import { FC } from 'react';
import { Location } from '../types/Location';
import ImageCont from './atoms/ImageCont';
import TextContentTitle from './atoms/TextContentTitle';

type Props = {
  data: Service;
};

const ServiceData: FC<Props> = ({ data }) => {
  return (
    <div className={'boxContent boxVerticalGap'}>
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
          <p>
            <span className={'dataLabel'}>duration:</span> {data.duration}
          </p>
        )}
        {data.price && (
          <p>
            <span className={'dataLabel'}>Price:</span> €{data.price}
          </p>
        )}
        <div className={'boxHorizontalGap'}>
          <p className={'dataLabel'}>Offered at:</p>
          {data.locations.map((it: Location) => (
            <p key={it.id}>{it.title}. </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
