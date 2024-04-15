import { FC } from 'react';
import { Practitioner } from '../types/Practitioner.ts';

type Props = {
  data: Practitioner;
};

const PractitionerData: FC<Props> = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <img
        src={data.image}
        alt={`${data.title} image`}
        aria-label={`${data.title} image`}
      />
      <p>{data.personalExperience}</p>
      <p>{data.bio}</p>
      <p>
        {data.fName} {data.lName}
      </p>
      {data.locations.length > 0 &&
        data.locations.map(it => (
          <p>
            {it.title}, {it.city}
          </p>
        ))}
      {data.services.length > 0 && data.services.map(it => <p>{it.title}</p>)}
    </div>
  );
};

export default PractitionerData;
