import { FC } from 'react';
import { Practitioner } from '../types/Practitioner.ts';

type Props = {
  data: Practitioner;
};

const PractitionerData: FC<Props> = ({ data }) => {
  return (
    <div className={'boxContent boxVerticalGap'}>
      <div className={'boxVerticalGap'}>
        <p>
          {data.fName} {data.lName}
        </p>
        <h3>{data.title}</h3>
        <img
          src={data.image}
          className={'roundImage'}
          alt={`${data.title} image`}
          aria-label={`${data.title} image`}
        />
      </div>
      <div className={'boxVerticalGap'}>
        <p>{data.personalExperience}</p>
        <p>{data.bio}</p>

        {data.locations.length > 0 &&
          data.locations.map(it => (
            <p>
              {it.title}, {it.city}
            </p>
          ))}
        {data.services.length > 0 && data.services.map(it => <p>{it.title}</p>)}
      </div>
    </div>
  );
};

export default PractitionerData;
