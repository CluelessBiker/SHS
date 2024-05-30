import { ChangeEvent, FC } from 'react';
import InputContainer from '../atoms/InputContainer';
import InputLabel from '../atoms/InputLabel';
import InputError from '../atoms/InputError';
import InputField from '../atoms/InputField';

type Props = {
  type?: string;
  label: string;
  error?: string;
  required?: boolean;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({
  type = 'text',
  label,
  value,
  error,
  onChange,
  required = false,
}) => {
  return (
    <InputContainer>
      <InputLabel
        htmlFor={value as string}
        label={`${label}${required ? ' *' : undefined}`}
      />
      <InputField
        type={type}
        value={value}
        label={label}
        required={required}
        onChange={onChange}
        aria-label={`${label} input field`}
      />
      {error && <InputError error={error} />}
    </InputContainer>
  );
};

export default FormInput;
