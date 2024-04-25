import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { Contact } from '../types/Contact';
import { handleError } from '../utils/handleError';
import FormInput from '../components/FormInput';
import { axiosReq } from '../api/axiosDefaults';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await axiosReq.post('/contact/', contact);
      navigate('/locations');
    } catch (error: any) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  return (
    <div className={'boxContentContainer'}>
      <div className={'boxVerticalGap boxContent'}>
        <h3>{t('contact.contactUs')}</h3>
        <FormInput
          required
          label={'name'}
          value={contact.name}
          error={handleError('name', errors)}
          onChange={value => onChange('name', value)}
        />
        <FormInput
          required
          type={'email'}
          label={'email'}
          value={contact.email}
          error={handleError('email', errors)}
          onChange={value => onChange('email', value)}
        />
        <FormInput
          required
          type={'tel'}
          label={'phone'}
          value={contact.phone}
          error={handleError('phone', errors)}
          onChange={value => onChange('phone', value)}
        />
        <FormInput
          required
          label={'subject'}
          value={contact.subject}
          error={handleError('subject', errors)}
          onChange={value => onChange('subject', value)}
        />
        <FormInput
          required
          label={'message'}
          value={contact.message}
          error={handleError('message', errors)}
          onChange={value => onChange('message', value)}
        />

        <button onClick={handleSubmit}>{t('buttons.submit')}</button>
      </div>
    </div>
  );
};

export default ContactPage;
