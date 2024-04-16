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
          src={
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12576.444636695656!2d23.7785369!3d37.9978676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a198d495e45169%3A0xbc70c1948b911e1b!2sSystem%20Health%20%26%20Spine!5e0!3m2!1sen!2sgr!4v1713256227369!5m2!1sen!2sgr'
          }
          loading="lazy"
          // src={data.gMap}
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
