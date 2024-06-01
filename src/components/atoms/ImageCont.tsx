import { FC } from 'react';
import styled from 'styled-components';

interface ImgProps {
  clickable: boolean;
}

const StyledImg = styled.img<ImgProps>`
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
  &:hover,
  &:focus {
    opacity: ${props => (props.clickable ? 0.5 : 1)};
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
      clickable={onClick ? true : false}
    />
  );
};

export default ImageCont;
