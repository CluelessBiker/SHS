import abt from '../styles/AboutPage.module.css';
import BtnBookNow from '../components/BtnBookNow.tsx';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*HERO SECTION*/}
      <div className={`${abt.heroBox} boxImageText`}>
        <div className={abt.heroTag}>
          <h2>{t('about.tagLine')}</h2>
          <p>{t('about.tagDescriptor')}</p>
        </div>
        <BtnBookNow />
      </div>

      {/*OUR STORY*/}
      <div className={'boxImageText'}>
        <div className={'horizontalRule'} />
        <div className={abt.story}>
          <h2>{t('about.ourStory')}</h2>
          <p>{t('about.ourStryTxt')}</p>
        </div>
        <div className={'horizontalRule'} />
      </div>

      <div className={`${abt.midImg} boxImageText`} />

      {/*ELFSIGHT : GOOGLE REVIEWS*/}
      <div className={'boxImageText'}>
        <div
          data-elfsight-app-lazy
          className="elfsight-app-8476a6be-7dab-46db-91e0-1d5e544f7c4d"
        />
      </div>
    </>
  );
};

export default AboutPage;
