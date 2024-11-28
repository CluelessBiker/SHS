import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledButton = styled.a`
  text-transform: uppercase;
  border-radius: var(--spacing-half);
  font-family: var(--typography-face);
  color: var(--mui-palette-primary-white);
  font-size: var(--typography-size-caption);
  font-weight: var(--typography-weight-bold);
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--mui-palette-primary-green);
  &:hover {
    opacity: 0.75;
  }
`;

const BtnBookNow = () => {
  const { t } = useTranslation();
  return (
    <StyledButton
      target={'_blank'}
      rel={'noreferrer'}
      aria-label={'book appointment'}
      href={'https://systemhealthspine.janeapp.com/'}
    >
      {t('buttons.bookNow')}
    </StyledButton>
  );
};

export default BtnBookNow;
