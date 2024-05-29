import { FC } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

type Props = {
  label: string;
  htmlFor: string;
};

const InputLabel: FC<Props> = ({ label, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>;
};

export default InputLabel;
