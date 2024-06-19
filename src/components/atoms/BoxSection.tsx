import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  min-height: 400px;
  align-items: center;
  gap: var(--spacing-2);
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-2);
`;

type Props = {
  children: ReactNode;
};

const BoxSection: FC<Props> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default BoxSection;
