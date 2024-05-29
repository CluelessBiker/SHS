import { useEffect, useState } from 'react';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import LocationData from '../components/organisms/LocationData';
import ModalConfirmDelete from '../components/organisms/ModalConfirmDelete';
import { useTranslation } from 'react-i18next';
import ModalLocation from '../components/organisms/ModalLocation';
import { Location } from '../types/Location';
import TextPageHeading from '../components/atoms/TextPageHeading';

const LocationsPage = () => {
  const { t } = useTranslation();

  const [locations, setLocations] = useState<Location[]>([]);
  const [location, setLocation] = useState<Location>();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axiosReq.get(`/locations/`);
        setLocations(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLocations();
  }, []);

  const handleEdit = (data: Location) => {
    setLocation(data);
    setOpenEdit(true);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/locations/${location && location.id ? location.id : ''}/`);
    } catch (err) {
      console.log(err);
    }
    setOpenDelete(false);
  };

  return (
    <div className={'boxVerticalGap'} style={{ padding: 'var(--spacing-2)' }}>
      <TextPageHeading>{t('navbar.locations')}</TextPageHeading>
      <div className={'boxContentContainer'}>
        {locations.length > 0 &&
          locations.map((data: Location) => (
            <LocationData
              data={data}
              key={data.id}
              handleEdit={() => handleEdit(data)}
              handleDelete={() => {
                setLocation(data);
                setOpenDelete(true);
              }}
            />
          ))}

        <ModalConfirmDelete
          open={openDelete}
          setOpen={setOpenDelete}
          handleDelete={handleDelete}
          text={t('generic.location')}
        />

        <ModalLocation data={location} open={openEdit} setOpen={setOpenEdit} />
      </div>
    </div>
  );
};

export default LocationsPage;
