import { Service } from '../types/Service.ts';
import { FC } from 'react';

type Props = {
  data: Service;
};

const ServiceData: FC<Props> = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <img
        src={data.image}
        alt={`${data.title} image`}
        aria-label={`${data.title} image`}
      />
      <p>{data.blurb}</p>
      <p>{data.description}</p>
      <p>duration: {data.duration}</p>
      <p>€{data.price}</p>
      <p>Offered at: {data.blurb}</p>
    </div>
  );
};

export default ServiceData;
