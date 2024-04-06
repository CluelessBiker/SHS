import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from 'react';
import ModalBase from './ModalBase.tsx';
import { useNavigate } from 'react-router-dom';
import { Location } from '../types/Location.ts';
import { useTranslation } from 'react-i18next';
import { axiosReq } from '../api/axiosDefaults.ts';
import FormInput from './FormInput.tsx';
import { Language } from '../types/Language.ts';
import FormDropdown from './FormDropdown.tsx';

type Props = {
  open: boolean;
  data?: Location;
  setOpen: (open: boolean) => void;
};

const ModalLocation: FC<Props> = ({ data, open, setOpen }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const imageInput = useRef(null);

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
    language: 1,
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

  console.log(lang);

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
      URL.revokeObjectURL(location.image);
      setLocation({
        ...location,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event: any) => {
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
    formData.append('language', location.language as string);
    formData.append('area', location.area as string);
    formData.append('description', location.description as string);
    formData.append('image', imageInput?.current?.files[0]);
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

  const handleError = (data: any) => {
    if (!errors) return '';
    const found = errors[data];
    return found ? found[0] : undefined;
  };

  return (
    <ModalBase open={open} setOpen={setOpen}>
      <div className={'boxInner'}>
        <FormInput
          label={'title'}
          value={location.title as string}
          error={handleError('title')}
          onChange={value => onChange('title', value)}
        />

        <FormDropdown
          data={lang}
          label={'language'}
          error={handleError('language')}
          onChange={event => onChange('language', event)}
        />
      </div>

      <div className={'boxInner'}>
        <FormInput
          type={'tel'}
          label={'phone'}
          value={location.phone as string}
          error={handleError('phone')}
          onChange={value => onChange('phone', value)}
        />

        <FormInput
          type={'email'}
          label={'email'}
          value={location.email as string}
          error={handleError('email')}
          onChange={value => onChange('email', value)}
        />
      </div>

      <div className={'boxInner'}>
        <FormInput
          label={'street number'}
          value={location.streetNum as string}
          error={handleError('streetNum')}
          onChange={value => onChange('streetNum', value)}
        />

        <FormInput
          label={'street name'}
          value={location.street as string}
          error={handleError('street')}
          onChange={value => onChange('street', value)}
        />
      </div>

      <div className={'boxInner'}>
        <FormInput
          label={'area'}
          value={location.area as string}
          error={handleError('area')}
          onChange={value => onChange('area', value)}
        />

        <FormInput
          label={'city'}
          value={location.city as string}
          error={handleError('city')}
          onChange={value => onChange('city', value)}
        />

        <FormInput
          type={'number'}
          label={'post code'}
          value={location.postcode as string}
          error={handleError('postcode')}
          onChange={value => onChange('postcode', value)}
        />
      </div>

      <FormInput
        label={'description'}
        value={location.description as string}
        error={handleError('description')}
        onChange={value => onChange('description', value)}
      />

      <FormInput
        type={'url'}
        value={location.gRating as string}
        label={'google ratings url'}
        error={handleError('gRating')}
        onChange={value => onChange('gRating', value)}
      />

      <FormInput
        type={'url'}
        label={'google map url'}
        value={location.gMap as string}
        error={handleError('gMap')}
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
