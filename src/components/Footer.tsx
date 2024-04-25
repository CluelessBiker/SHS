import IconFB from '../assets/svgs/IconFB';
import IconIG from '../assets/svgs/IconIG';
import footer from '../styles/Footer.module.css';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const year = moment().year();
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={footer.footerMain}>
      <div className={footer.iconBox}>
        <a
          target={'_blank'}
          rel={'noreferrer'}
          aria-label={'facebook page'}
          href={'https://www.facebook.com/athenschiropractor/'}
        >
          <IconFB width={'30px'} height={'30px'} />
        </a>
        <a
          target={'_blank'}
          rel={'noreferrer'}
          aria-label={'instagram page'}
          href={'https://www.instagram.com/systemhealthspine'}
        >
          <IconIG width={'30px'} height={'30px'} />
        </a>
      </div>
      <p className={'caption'}>©{year} System Health & Spine</p>
      <div className={footer.lang}>
        <button onClick={() => changeLang('en')}>EN</button>
        <button onClick={() => changeLang('el')}>EL</button>
        <button onClick={() => changeLang('fr')}>FR</button>
      </div>
    </div>
  );
};

export default Footer;
