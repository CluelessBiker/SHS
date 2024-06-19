import styled from 'styled-components';
import { FC } from 'react';

type StyledProps = {
  heading: boolean;
};

const StyledP = styled.p<StyledProps>`
  max-width: 500px;
  text-align: center;
  font-size: ${props => (props.heading ? '1.5rem' : '1rem')};
  text-transform: ${props => (props.heading ? 'uppercase' : 'none')};
  &.white {
    color: var(--mui-palette-primary-white);
  }
`;

type Props = {
  text: string;
  variant?: string;
  heading?: boolean;
};

const TextSection: FC<Props> = ({ text, variant, heading = false }) => {
  return (
    <StyledP heading={heading} className={variant}>
      {text}
    </StyledP>
  );
};

export default TextSection;
