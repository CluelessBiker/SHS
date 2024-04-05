import { Location } from '../types/Location.ts';
import { FC, useState } from 'react';
import { useCurrentUser } from '../context/CurrentUserContext.tsx';
import IconEdit from '../assets/svgs/IconEdit.tsx';
import IconDelete from '../assets/svgs/IconDelete.tsx';
import btn from '../styles/Buttons.module.css';

type Props = {
  data: Location;
};

const LocationData: FC<Props> = ({ data }) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const currentUser = useCurrentUser();
  console.log(currentUser);

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
      {currentUser && (
        <div>
          <button className={btn.iconButton} onClick={() => setOpenEdit(true)}>
            <IconEdit height={'14px'} />
          </button>
          <button className={btn.iconButton} onClick={() => setOpenDelete(true)}>
            <IconDelete height={'14px'} />
          </button>
        </div>
      )}
      {/*TODO: implement confirmation modal for delete*/}
      {/*TODO: implement confirmation modal for edit*/}
    </div>
  );
};

export default LocationData;
