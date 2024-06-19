import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const StyledDiv = styled.div`
  min-width: 300px;
  max-width: 500px;
  background-color: white;
  padding: var(--spacing-2);
  justify-content: space-between;
  box-shadow: 5px 5px 20px #e5e5e2;
  border-radius: var(--spacing-half);
  &.verticalGap {
    display: flex;
    text-align: center;
    align-items: center;
    gap: var(--spacing-1);
    flex-direction: column;
  }
  &.horizontalGap {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--spacing-1);
  }
  &.halfGap {
    gap: var(--spacing-half);
  }
`;

type Props = {
  variant?: string;
  children: ReactNode;
};

const BoxContent: FC<Props> = ({ variant, children }) => {
  return <StyledDiv className={variant}>{children}</StyledDiv>;
};

export default BoxContent;
