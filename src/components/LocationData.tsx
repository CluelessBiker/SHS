import { Location } from '../types/Location.ts';
import { FC } from 'react';

type Props = {
  data: Location;
};

const LocationData: FC<Props> = ({ data }) => {
  return (
    <div className={'boxes'}>
      <img src={data.image} className={'roundImage'} />
      <h3>{data.title}</h3>
      <p>Phone: {data.phone}</p>
      <p>Email: {data.email}</p>
      <p>{data.description}</p>
      <p>
        {data.streetNum}, {data.street}
      </p>
      <p>
        {data.area}, {data.city}, {data.postcode}
      </p>
      <p>
        See on <a href={data.gMap}>google maps</a>
      </p>
      <p>
        See <a href={data.gRating}>reviews</a>
      </p>
    </div>
  );
};

export default LocationData;
