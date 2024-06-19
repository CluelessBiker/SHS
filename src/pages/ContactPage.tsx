import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { Contact } from '../types/Contact';
import { handleError } from '../utils/handleError';
import FormInput from '../components/molecules/FormInput';
import { axiosReq } from '../api/axiosDefaults';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import ContactHours from '../components/molecules/ContactHours';
import axios, { AxiosError } from 'axios';
import TextSection from '../components/atoms/TextSection';
import BoxContent from '../components/atoms/BoxContent';

const ContactPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<any>({});
  const [contact, setContact] = useState<Omit<Contact, 'createdAt'>>({
    name: '',
    subject: '',
    message: '',
    email: '',
    phone: '',
    read: false,
  });

  const onChange = (fieldName: string, event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setContact(oldValue => ({
      ...oldValue,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axiosReq.post('/contact/', contact);
      navigate('/locations');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError);
        if (axiosError.response?.status !== 401) {
          setErrors(axiosError.response?.data);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className={'boxContentContainer'}>
      <BoxContent variant={'verticalGap'}>
        <TextSection text={t('contact.contactUs')} heading />
        <FormInput
          required
          value={contact.name}
          label={t('contact.form.name')}
          error={handleError('name', errors)}
          onChange={value => onChange('name', value)}
        />
        <FormInput
          required
          type={'email'}
          value={contact.email}
          label={t('contact.form.eml')}
          error={handleError('email', errors)}
          onChange={value => onChange('email', value)}
        />
        <FormInput
          required
          type={'tel'}
          value={contact.phone}
          label={t('contact.form.phn')}
          error={handleError('phone', errors)}
          onChange={value => onChange('phone', value)}
        />
        <FormInput
          required
          value={contact.subject}
          label={t('contact.form.subj')}
          error={handleError('subject', errors)}
          onChange={value => onChange('subject', value)}
        />
        <FormInput
          required
          value={contact.message}
          label={t('contact.form.msg')}
          error={handleError('message', errors)}
          onChange={value => onChange('message', value)}
        />

        <Button onClick={handleSubmit} text={t('buttons.submit')} />
      </BoxContent>
      <ContactHours />
    </div>
  );
};

export default ContactPage;
