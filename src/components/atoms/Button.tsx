import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const StyledButton = styled.button`
  border: none;
  text-transform: uppercase;
  border-radius: var(--spacing-half);
  font-family: var(--typography-face);
  color: var(--mui-palette-primary-white);
  font-size: var(--typography-size-caption);
  font-weight: var(--typography-weight-bold);
  padding: var(--spacing-1) var(--spacing-2);
  background-color: var(--mui-palette-primary-darkGrey);
  &.icon {
    padding: 0;
    background-color: transparent;
  }
  &:hover {
    opacity: 0.75;
  }
`;

type Props = {
  text?: string;
  variant?: string;
  icon?: ReactNode;
  onClick: () => void;
};

const Button: FC<Props> = ({ text, variant, onClick, icon }) => {
  return (
    <StyledButton className={variant} onClick={onClick}>
      {text && text}
      {icon && icon}
    </StyledButton>
  );
};

export default Button;
