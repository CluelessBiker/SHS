import { useTranslation } from 'react-i18next';
import btn from '../styles/Buttons.module.css';

const BtnBookNow = () => {
  const { t } = useTranslation();
  return (
    <div>
      <a
        target={'_blank'}
        rel={'noreferrer'}
        className={btn.bookNow}
        aria-label={'book appointment'}
        href={''}
      >
        {t('buttons.bookNow')}
      </a>
    </div>
  );
};

export default BtnBookNow;
