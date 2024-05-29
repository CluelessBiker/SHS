import { ChangeEvent, FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 20px;
  border-radius: 8px;
  color: var(--mui-palette-primary-pink);
  caret-color: var(--mui-palette-primary-pink);
  border: 1px dotted var(--mui-palette-primary-darkGrey);
`;

type Props = {
  label: string;
  children: ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const InputSelect: FC<Props> = ({ label, onChange, children }) => {
  return (
    <StyledSelect name={label} id={label} onChange={onChange}>
      {children}
    </StyledSelect>
  );
};

export default InputSelect;
