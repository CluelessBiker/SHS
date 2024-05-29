import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  top: 50%;
  left: 50%;
  width: 500px;
  boxshadow: 24;
  max-height: 80vh;
  overflow: scroll;
  position: absolute;
  background-color: #ffffff;
  padding: var(--spacing-2);
  border-radius: var(--spacing-2);
  transform: translate(-50%, -50%);
  @media screen and (max-width: 600px) {
    width: 325px;
  }
`;

type Props = {
  children: ReactNode;
};

const BoxModal: FC<Props> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default BoxModal;
