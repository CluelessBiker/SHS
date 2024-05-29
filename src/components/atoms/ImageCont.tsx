import { FC } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  &.large {
    width: 300px;
    height: 300px;
  }
  &.square {
    width: 300px;
    height: 300px;
    max-width: 500px;
    border-radius: var(--spacing-half);
  }
`;

type Props = {
  src: string;
  altText: string;
  variant?: string;
  onClick?: () => void;
};

const ImageCont: FC<Props> = ({ src, onClick, altText, variant }) => {
  return (
    <StyledImg
      src={src}
      onClick={onClick}
      className={variant}
      alt={`${altText} image`}
      aria-label={`${altText} image`}
    />
  );
};

export default ImageCont;
