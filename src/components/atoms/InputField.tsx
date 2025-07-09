import { FC, InputHTMLAttributes } from 'react';
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
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField: FC<Props> = ({ label, ...rest }) => {
  return <StyledInput aria-label={`${label} input field`} {...rest} />;
};

export default InputField;
