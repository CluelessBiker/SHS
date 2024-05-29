import { ChangeEvent, FC } from 'react';
import { Language } from '../../types/Language';
import InputContainer from '../atoms/InputContainer';
import InputLabel from '../atoms/InputLabel';
import InputError from '../atoms/InputError';
import InputSelect from '../atoms/InputSelect';

type Props = {
  label: string;
  error?: string;
  data: Language[];
  selected: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FormDropdown: FC<Props> = ({ label, data, error, selected, onChange }) => {
  return (
    <InputContainer>
      <InputLabel label={label} htmlFor={label} />
      <InputSelect label={label} onChange={onChange}>
        {data.map((it: Language) => (
          <option key={it.id} value={it.id} selected={it.id === selected}>
            {it.name}
          </option>
        ))}
      </InputSelect>
      {error && <InputError error={error} />}
    </InputContainer>
  );
};

export default FormDropdown;
