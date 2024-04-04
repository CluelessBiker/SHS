import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
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
  setOpen: (open: boolean) => void;
};

const ModalLocation: FC<Props> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const imageInput = useRef(null);

  const [errors, setErrors] = useState<any>({});
  const [lang, setLang] = useState<Language[]>([]);
  const [location, setLocation] = useState<Location>({
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

  console.log(location);

  const handleCreateLocation = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('title', location.title);
    formData.append('phone', location.phone);
    formData.append('email', location.email);
    formData.append('streetNum', location.streetNum);
    formData.append('street', location.street);
    formData.append('city', location.city);
    formData.append('postcode', location.postcode);
    formData.append('gRating', location.gRating);
    formData.append('gMap', location.gMap);
    formData.append('language', location.language);
    formData.append('area', location.area);
    formData.append('description', location.description);
    formData.append('image', imageInput?.current?.files[0]);
    try {
      await axiosReq.post('/locations/', formData);
      navigate('/locations');
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
          value={location.title}
          error={handleError('title')}
          onChange={value => onChange('title', value)}
        />

        {/*<FormInput*/}
        {/*  label={'language'}*/}
        {/*  value={location.language as number}*/}
        {/*  error={handleError('language')}*/}
        {/*  onChange={value => onChange('language', value)}*/}
        {/*/>*/}
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
          value={location.phone}
          error={handleError('phone')}
          onChange={value => onChange('phone', value)}
        />

        <FormInput
          type={'email'}
          label={'email'}
          value={location.email}
          error={handleError('email')}
          onChange={value => onChange('email', value)}
        />
      </div>

      <div className={'boxInner'}>
        <FormInput
          label={'street number'}
          value={location.streetNum}
          error={handleError('streetNum')}
          onChange={value => onChange('streetNum', value)}
        />

        <FormInput
          label={'street name'}
          value={location.street}
          error={handleError('street')}
          onChange={value => onChange('street', value)}
        />
      </div>

      <div className={'boxInner'}>
        <FormInput
          label={'area'}
          value={location.area}
          error={handleError('area')}
          onChange={value => onChange('area', value)}
        />

        <FormInput
          label={'city'}
          value={location.city}
          error={handleError('city')}
          onChange={value => onChange('city', value)}
        />

        <FormInput
          type={'number'}
          label={'post code'}
          value={location.postcode}
          error={handleError('postcode')}
          onChange={value => onChange('postcode', value)}
        />
      </div>

      <FormInput
        type={'url'}
        value={location.gRating}
        label={'google ratings url'}
        error={handleError('gRating')}
        onChange={value => onChange('gRating', value)}
      />

      <FormInput
        type={'url'}
        value={location.gMap}
        label={'google map url'}
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

      <button onClick={handleCreateLocation}>{t('buttons.addLoc')}</button>

      {/*{handleError('non_field_errors') !== '' ||*/}
      {/*  (!handleError('non_field_errors') && <p>{handleError('non_field_errors')}</p>)}*/}
    </ModalBase>
  );
};

export default ModalLocation;
