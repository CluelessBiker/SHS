import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import FormInput from '../components/molecules/FormInput';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import ContactHours from '../components/molecules/ContactHours';
import TextSection from '../components/atoms/TextSection';
import BoxContent from '../components/atoms/BoxContent';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_eqc9ltd', 'template_tjczyzf', form.current, 'E1ixKlLbduurKoiHf')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    navigate('/locations');
  };

  return (
    <div className={'boxContentContainer'}>
      <BoxContent variant={'verticalGap'}>
        <TextSection text={t('contact.contactUs')} heading />
        <form ref={form} onSubmit={sendEmail}>
          <FormInput required name={'from_name'} label={t('contact.form.name')} />
          <FormInput
            required
            type={'email'}
            name={'from_email'}
            label={t('contact.form.eml')}
          />
          <FormInput
            required
            type={'tel'}
            name={'from_number'}
            label={t('contact.form.phn')}
          />
          <FormInput required name={'from_subject'} label={t('contact.form.subj')} />
          <FormInput required name={'from_message'} label={t('contact.form.msg')} />

          <Button type={'submit'} text={t('buttons.submit')} />
        </form>
      </BoxContent>
      <ContactHours />
    </div>
  );
};

export default ContactPage;
