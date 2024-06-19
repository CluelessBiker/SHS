import styled from 'styled-components';
import { FC } from 'react';

const StyledDiv = styled.div`
  width: 100%;
  height: 1px;
  max-width: 500px;
  border: 1px solid var(--mui-palette-primary-green);
`;

type Props = {
  variant?: string;
};

const DividerLine: FC<Props> = ({ variant }) => {
  return <StyledDiv className={variant} />;
};

export default DividerLine;
