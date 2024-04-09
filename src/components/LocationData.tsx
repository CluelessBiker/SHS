import { FC } from 'react';
import { Location } from '../types/Location.ts';
import { useCurrentUser } from '../context/CurrentUserContext.tsx';
import IconEdit from '../assets/svgs/IconEdit.tsx';
import IconDelete from '../assets/svgs/IconDelete.tsx';
import btn from '../styles/Buttons.module.css';

type Props = {
  data: Location;
  handleEdit: () => void;
  handleDelete: () => void;
};

const LocationData: FC<Props> = ({ data, handleEdit, handleDelete }) => {
  const currentUser = useCurrentUser();

  return (
    <div className={'boxes'}>
      <img src={data.image} className={'roundImage'} />
      <h3>{data.title}</h3>
      <p>Phone: +30 {data.phone}</p>
      <p>Email: {data.email}</p>
      <p>{data.description}</p>
      <p>
        {data.streetNum}, {data.street}
      </p>
      <p>
        {data.area}, {data.city}, {data.postcode}
      </p>
      <p>
        See on{' '}
        <a
          href={data.gMap}
          target={'_blank'}
          rel={'noreferrer'}
          aria-label={'google maps'}
        >
          google maps
        </a>
      </p>
      <p>
        See{' '}
        <a
          target={'_blank'}
          rel={'noreferrer'}
          href={data.gRating}
          aria-label={'google reviews'}
        >
          reviews
        </a>
      </p>
      {currentUser && (
        <div>
          <button className={btn.iconButton} onClick={handleEdit}>
            <IconEdit height={'14px'} />
          </button>
          <button className={btn.iconButton} onClick={handleDelete}>
            <IconDelete height={'14px'} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationData;
