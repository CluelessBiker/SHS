import { FC } from 'react';
import { Location } from '../../types/Location';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { useTranslation } from 'react-i18next';
import ImageCont from '../atoms/ImageCont';
import TextContentTitle from '../atoms/TextContentTitle';
import IconEdit from '../../assets/svgs/IconEdit';
import IconDelete from '../../assets/svgs/IconDelete';
import TextKeyValue from '../atoms/TextKeyValue';
import BoxCard from '../atoms/BoxCard';
import Button from '../atoms/Button';

type Props = {
  data: Location;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleViewDetails: () => void;
};

const LocationData: FC<Props> = ({
  data,
  handleEdit,
  handleDelete,
  handleViewDetails,
}) => {
  const { t } = useTranslation();
  const currentUser = useCurrentUser();

  return (
    <BoxCard>
      <TextContentTitle>{data.title}</TextContentTitle>
      <ImageCont
        src={data.image}
        variant={'square'}
        onClick={handleViewDetails}
        altText={`${data.title} location`}
      />
      <TextKeyValue keyLeft={t('contact.form.phn')} value={`+30 ${data.phone}`} />

      {currentUser && (
        <div>
          {handleEdit && (
            <Button
              variant={'icon'}
              onClick={handleEdit}
              icon={<IconEdit height={'14px'} />}
            />
          )}
          {handleDelete && (
            <Button
              variant={'icon'}
              onClick={handleDelete}
              icon={<IconDelete height={'14px'} />}
            />
          )}
        </div>
      )}
    </BoxCard>
  );
};

export default LocationData;
