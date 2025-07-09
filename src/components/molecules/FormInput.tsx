import { FC, InputHTMLAttributes, useId } from 'react';
import InputContainer from '../atoms/InputContainer';
import InputLabel from '../atoms/InputLabel';
import InputField from '../atoms/InputField';

type Props = {
  label: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<Props> = ({ label, required = false, ...rest }) => {
  const id = useId();

  return (
    <InputContainer>
      <InputLabel htmlFor={id} label={`${label}${required && ' *'}`} />
      <InputField id={id} label={label} required={required} {...rest} />
      {/* {error && <InputError error={error} />} */}
    </InputContainer>
  );
};

export default FormInput;
