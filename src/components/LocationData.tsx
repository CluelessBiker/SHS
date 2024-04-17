import { FC } from 'react';
import { Location } from '../types/Location.ts';
import { useCurrentUser } from '../context/CurrentUserContext.tsx';
import IconEdit from '../assets/svgs/IconEdit.tsx';
import IconDelete from '../assets/svgs/IconDelete.tsx';
import btn from '../styles/Buttons.module.css';
import { useTranslation } from 'react-i18next';

type Props = {
  data: Location;
  handleEdit: () => void;
  handleDelete: () => void;
};

const LocationData: FC<Props> = ({ data, handleEdit, handleDelete }) => {
  const currentUser = useCurrentUser();
  const { t } = useTranslation();

  return (
    <div className={'boxContent boxVerticalGap'}>
      <div className={'boxVerticalGap'}>
        <h3 className={'contentTitle'}>{data.title}</h3>
        <img src={data.image} className={'squareImg'} />
      </div>
      <div className={'boxVerticalGap'}>
        <p>
          <span className={'dataLabel'}>{t('contact.form.phn')}:</span> +30 {data.phone}
        </p>
        <p>
          <span className={'dataLabel'}>{t('contact.form.eml')}:</span> {data.email}
        </p>

        <br />
        <p className={'dataLabel'}>{t('contact.form.adr')}:</p>
        <p>
          {data.streetNum}, {data.street}
        </p>
        <p>
          {data.area}, {data.city}, {data.postcode}
        </p>
      </div>

      <div className={'boxVerticalGap'}>
        <iframe
          loading="lazy"
          src={data.gMap}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className={'dataLabel'}>{data.description}</p>

        <p>
          Leave a{' '}
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href={data.gRating}
            aria-label={'google reviews'}
          >
            review
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
    </div>
  );
};

export default LocationData;
