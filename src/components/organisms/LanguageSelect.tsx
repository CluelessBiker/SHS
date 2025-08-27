import { useEffect, useState } from 'react';
import { LanguageArray } from '../../constants/languages';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  color: var(--mui-palette-primary-pink);
  background-color: white;
  border-radius: var(--spacing-half);
  padding: var(--spacing-half);
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--typography-size-caption);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  margin-left: var(--spacing-1);

  &:hover {
    background-color: var(--mui-palette-primary-green);
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <StyledSelect value={language} onChange={handleLangChange}>
      {LanguageArray.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.code}
        </option>
      ))}
    </StyledSelect>
  );
};

export default LanguageSelect;
