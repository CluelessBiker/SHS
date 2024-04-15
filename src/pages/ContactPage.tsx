import { useTranslation } from 'react-i18next';
import { ChangeEvent, useState } from 'react';
import { Contact } from '../types/Contact.ts';
import { handleError } from '../utils/handleError.ts';
import FormInput from '../components/FormInput.tsx';
import { axiosReq } from '../api/axiosDefaults.ts';
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
    <div>
      <h3>{t('contact.contactUs')}</h3>
      <div>
        <FormInput
          label={'name'}
          value={contact.name}
          error={handleError('name', errors)}
          onChange={value => onChange('name', value)}
        />
        <FormInput
          label={'subject'}
          value={contact.subject}
          error={handleError('subject', errors)}
          onChange={value => onChange('subject', value)}
        />
        <FormInput
          label={'message'}
          value={contact.message}
          error={handleError('message', errors)}
          onChange={value => onChange('message', value)}
        />
        <FormInput
          type={'tel'}
          label={'phone'}
          value={contact.phone}
          error={handleError('phone', errors)}
          onChange={value => onChange('phone', value)}
        />
        <FormInput
          type={'email'}
          label={'email'}
          value={contact.email}
          error={handleError('email', errors)}
          onChange={value => onChange('email', value)}
        />

        <button onClick={handleSubmit}>{t('buttons.submit')}</button>
      </div>
    </div>
  );
};

export default ContactPage;
