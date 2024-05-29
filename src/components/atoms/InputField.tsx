import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  font-size: 20px;
  border-radius: 8px;
  color: var(--mui-palette-primary-pink);
  caret-color: var(--mui-palette-primary-pink);
  border: 1px dotted var(--mui-palette-primary-darkGrey);
`;

type Props = {
  type?: string;
  label: string;
  required?: boolean;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputField: FC<Props> = ({
  type = 'text',
  label,
  value,
  onChange,
  required = false,
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      id={value as string}
      aria-label={`${label} input field`}
    />
  );
};

export default InputField;
