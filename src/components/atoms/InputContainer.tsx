import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const StyledDiv = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: ReactNode;
};

const InputContainer: FC<Props> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default InputContainer;
