import { FC } from 'react';
import ModalBase from '../molecules/ModalBase';
import { Location } from '../../types/Location';
import { useTranslation } from 'react-i18next';
import BoxVerticalGap from '../atoms/BoxVerticalGap';
import TextKeyValue from '../atoms/TextKeyValue';

type Props = {
  open: boolean;
  data: Location;
  setOpen: (value: boolean) => void;
};

const ModalLocationDetails: FC<Props> = ({ open, data, setOpen }) => {
  const { t } = useTranslation();

  return (
    <ModalBase open={open} setOpen={setOpen}>
      <BoxVerticalGap>
        <TextKeyValue keyLeft={t('contact.form.eml')} value={data.email} />
        <TextKeyValue
          keyLeft={t('contact.form.adr')}
          line2={`${data.streetNum} ${data.street}`}
          line3={`${data.area ? data.area + ', ' : ''}${
            data.city ? data.city + ', ' : ''
          }${data.postcode}`}
        />

        <iframe
          loading="lazy"
          src={data.gMap}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <TextKeyValue keyLeft={data.description} />

        <p>
          {t('generic.leaveReview')}{' '}
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href={data.gRating}
            aria-label={'google reviews'}
          >
            {t('generic.review')}
          </a>
        </p>
      </BoxVerticalGap>
    </ModalBase>
  );
};

export default ModalLocationDetails;
