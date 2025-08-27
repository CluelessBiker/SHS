import BtnBookNow from '../components/atoms/BtnBookNow';
import { useTranslation } from 'react-i18next';
import HeroImageContainer from '../components/atoms/HeroImageContainer';
import heroImage from '../assets/images/pexels-daria-liudnaya-8187685.jpg';
import midImage from '../assets/images/pexels-roman-odintsov-6193699.jpg';
import BoxSection from '../components/atoms/BoxSection';
import TextSection from '../components/atoms/TextSection';
import DividerLine from '../components/atoms/DividerLine';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*HERO SECTION*/}
      <HeroImageContainer img={heroImage}>
        <TextSection heading text={t('about.tagLine')} />
        <TextSection text={t('about.tagDescriptor')} />
        <BtnBookNow />
        <TextSection
          text={
            '+30 211.1829292\ninfo@systemhealthspine.com\n17 Xenopoulou Grigoriou, Neo Psyxchiko, 11525'
          }
        />
      </HeroImageContainer>

      {/*ELFSIGHT : GOOGLE REVIEWS*/}
      <BoxSection>
        <div
          data-elfsight-app-lazy
          className="elfsight-app-8476a6be-7dab-46db-91e0-1d5e544f7c4d"
        />
      </BoxSection>

      <HeroImageContainer img={midImage} />

      {/*OUR STORY*/}
      <BoxSection>
        <DividerLine />
        <TextSection heading text={t('about.ourStory')} />
        <TextSection text={t('about.ourStryTxt')} />
        <DividerLine />
      </BoxSection>
    </>
  );
};

export default AboutPage;
