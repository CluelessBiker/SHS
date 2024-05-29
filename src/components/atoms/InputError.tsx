import { FC } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: darkred;
  font-size: var(--typography-size-error);
`;

type Props = {
  error: string;
};

const InputError: FC<Props> = ({ error }) => {
  return <StyledP>{error}</StyledP>;
};

export default InputError;
