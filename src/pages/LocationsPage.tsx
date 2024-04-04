import { useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults.ts';
import LocationData from '../components/LocationData.tsx';

const LocationsPage = () => {
  const [locations, setLocations] = useState<Location[]>([]);

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

  return (
    <div className={'boxInner'}>
      {locations.length > 0 &&
        locations.map((data: Location) => <LocationData data={data} />)}
    </div>
  );
};

export default LocationsPage;
