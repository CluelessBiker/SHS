import { FC } from 'react';
import { Practitioner } from '../../types/Practitioner';
import ImageCont from '../atoms/ImageCont';
import BoxCard from '../atoms/BoxCard';
import TextContentTitle from '../atoms/TextContentTitle';

type Props = {
  data: Practitioner;
  onClick: () => void;
};

const PractitionerData: FC<Props> = ({ data, onClick }) => {
  return (
    <BoxCard>
      <TextContentTitle>
        {data.prefix && data.prefix + ' '}
        {data.fName} {data.lName}
        {data.degree && ' ' + data.degree}
      </TextContentTitle>

      <ImageCont src={data.image} altText={data.title} onClick={onClick} />
      <h4 className={'subTitle'}>{data.title}</h4>
    </BoxCard>
  );
};

export default PractitionerData;
