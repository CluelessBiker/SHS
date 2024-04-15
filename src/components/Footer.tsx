import IconFB from '../assets/svgs/IconFB.tsx';
import IconIG from '../assets/svgs/IconIG.tsx';
import footer from '../styles/Footer.module.css';
import moment from 'moment';

const Footer = () => {
  const year = moment().year();

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
    </div>
  );
};

export default Footer;
