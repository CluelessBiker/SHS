import styled from 'styled-components';
import { FC, ReactNode } from 'react';

type StyledDivProps = {
  imgUrl: string;
};

const StyledDiv = styled.div<StyledDivProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  justify-content: center;
  padding: var(--spacing-2);
  background-position-y: 32%;
  background-image: url(${props => props.imgUrl});
`;

type Props = {
  img: string;
  children?: ReactNode;
};

const HeroImageContainer: FC<Props> = ({ img, children }) => {
  return <StyledDiv imgUrl={img}>{children}</StyledDiv>;
};

export default HeroImageContainer;
