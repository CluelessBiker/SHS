import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from 'react';
import ModalBase from '../molecules/ModalBase';
import { useNavigate } from 'react-router-dom';
import { Location } from '../../types/Location';
import { useTranslation } from 'react-i18next';
import { axiosReq } from '../../api/axiosDefaults';
import FormInput from '../molecules/FormInput';
import { Language } from '../../types/Language';
import FormDropdown from '../molecules/FormDropdown';
import { handleError } from '../../utils/handleError';

type Props = {
  open: boolean;
  data?: Location;
  setOpen: (open: boolean) => void;
};

const ModalLocation: FC<Props> = ({ data, open, setOpen }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const imageInput = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<any>({});
  const [lang, setLang] = useState<Language[]>([]);
  const [location, setLocation] = useState<Partial<Location>>({
    title: '',
    phone: '',
    email: '',
    streetNum: '',
    street: '',
    city: '',
    postcode: '',
    gRating: '',
    gMap: '',
    image: '',
    language: 2,
    area: '',
    description: '',
  });

  useMemo(() => {
    if (data) setLocation(data);
  }, [data]);

  /**
   * Return language options
   */
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const { data } = await axiosReq.get(`/languages/`);
        setLang(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLanguages();
  }, []);

  const onChange = (
    fieldName: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = event?.target.value;
    setLocation(oldValue => ({
      ...oldValue,
      [fieldName]: value,
    }));
  };

  const handleChangeImage = (event: any) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(location.image as string);
      setLocation({
        ...location,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', location.title as string);
    formData.append('phone', location.phone as string);
    formData.append('email', location.email as string);
    formData.append('streetNum', location.streetNum as string);
    formData.append('street', location.street as string);
    formData.append('city', location.city as string);
    formData.append('postcode', location.postcode as string);
    formData.append('gRating', location.gRating as string);
    formData.append('gMap', location.gMap as string);
    formData.append('language', location.language?.code as string);
    formData.append('area', location.area as string);
    formData.append('description', location.description as string);
    if (imageInput.current?.files && imageInput.current.files[0]) {
      formData.append('image', imageInput.current.files[0]);
    }

    try {
      if (data) {
        await axiosReq.put(`/locations/${data.id}/`, formData);
      } else {
        await axiosReq.post('/locations/', formData);
        navigate('/locations');
      }
      setOpen(false);
    } catch (error: any) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <ModalBase open={open} setOpen={setOpen}>
      <div>
        <FormInput
          label={'title'}
          value={location.title as string}
          error={handleError('title', errors)}
          onChange={value => onChange('title', value)}
        />

        <FormDropdown
          data={lang}
          label={'language'}
          error={handleError('language', errors)}
          selected={location.language?.code as string}
          onChange={event => onChange('language', event)}
        />
      </div>

      <div>
        <FormInput
          type={'tel'}
          label={'phone'}
          value={location.phone as string}
          error={handleError('phone', errors)}
          onChange={value => onChange('phone', value)}
        />

        <FormInput
          type={'email'}
          label={'email'}
          value={location.email as string}
          error={handleError('email', errors)}
          onChange={value => onChange('email', value)}
        />
      </div>

      <div>
        <FormInput
          label={'street number'}
          value={location.streetNum as string}
          error={handleError('streetNum', errors)}
          onChange={value => onChange('streetNum', value)}
        />

        <FormInput
          label={'street name'}
          value={location.street as string}
          error={handleError('street', errors)}
          onChange={value => onChange('street', value)}
        />
      </div>

      <div>
        <FormInput
          label={'area'}
          value={location.area as string}
          error={handleError('area', errors)}
          onChange={value => onChange('area', value)}
        />

        <FormInput
          label={'city'}
          value={location.city as string}
          error={handleError('city', errors)}
          onChange={value => onChange('city', value)}
        />

        <FormInput
          type={'number'}
          label={'post code'}
          value={location.postcode as string}
          error={handleError('postcode', errors)}
          onChange={value => onChange('postcode', value)}
        />
      </div>

      <FormInput
        label={'description'}
        value={location.description as string}
        error={handleError('description', errors)}
        onChange={value => onChange('description', value)}
      />

      <FormInput
        type={'url'}
        value={location.gRating as string}
        label={'google ratings url'}
        error={handleError('gRating', errors)}
        onChange={value => onChange('gRating', value)}
      />

      <FormInput
        type={'url'}
        label={'google map url'}
        value={location.gMap as string}
        error={handleError('gMap', errors)}
        onChange={value => onChange('gMap', value)}
      />

      <label htmlFor="file">image</label>
      <input
        id="file"
        type={'file'}
        accept="image/*"
        ref={imageInput}
        onChange={handleChangeImage}
      />

      <button onClick={handleSubmit}>
        {data
          ? t('buttons.editItem', { item: t('generic.location') })
          : t('buttons.addItem', { item: t('generic.location') })}
      </button>

      {/*{handleError('non_field_errors') !== '' ||*/}
      {/*  (!handleError('non_field_errors') && <p>{handleError('non_field_errors')}</p>)}*/}
    </ModalBase>
  );
};

export default ModalLocation;
