import styled from 'styled-components';
import { FC } from 'react';

const StyledSpan = styled.span`
  max-width: 300px;
  text-transform: uppercase;
  font-size: var(--typography-size-caption);
  font-weight: var(--typography-weight-light);
`;

type Props = {
  value?: string;
  line2?: string;
  line3?: string;
  keyLeft: string;
};

const TextKeyValue: FC<Props> = ({ keyLeft, value, line2, line3 }) => {
  return (
    <p>
      <StyledSpan>{`${keyLeft}${value || line2 || line3 ? ' :' : ''}`}</StyledSpan>{' '}
      {value}
      {line2 && (
        <>
          <br />
          {line2}
        </>
      )}
      {line3 && (
        <>
          <br />
          {line3}
        </>
      )}
    </p>
  );
};

export default TextKeyValue;
