import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const StyledDiv = styled.div`
  width: 350px;
  display: flex;
  text-align: center;
  align-items: center;
  gap: var(--spacing-2);
  flex-direction: column;
  background-color: white;
  padding: var(--spacing-2);
  justify-content: space-between;
  box-shadow: 5px 5px 20px #e5e5e2;
  border-radius: var(--spacing-half);
`;

type Props = {
  variant?: string;
  children: ReactNode;
};

const BoxCard: FC<Props> = ({ variant, children }) => {
  return <StyledDiv className={variant}>{children}</StyledDiv>;
};

export default BoxCard;
