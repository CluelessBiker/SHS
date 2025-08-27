import TextKeyValue from '../atoms/TextKeyValue';
import { useTranslation } from 'react-i18next';
import TextSection from '../atoms/TextSection';
import BoxContent from '../atoms/BoxContent';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BoxContent variant={'verticalGap halfGap'}>
        <TextSection text={t('contact.contactUs')} heading />
        <TextKeyValue value={'+30 211.1829292'} keyLeft={t('contact.details.phone')} />
        <TextKeyValue
          value={'info@systemhealthspine.com'}
          keyLeft={t('contact.details.email')}
        />
        <TextKeyValue
          value={t('contact.details.address')}
          keyLeft={t('contact.details.addTitle')}
        />
      </BoxContent>
    </div>
  );
};

export default ContactInfo;
