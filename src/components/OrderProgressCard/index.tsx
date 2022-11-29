import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import queijo from '../../assets/images/queijo.png'

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from './styles';

interface Props{
  image: string;
  pizza: string;
  status: StatusTypesProps;
  table_number: string;
  quantity: string;
}


export function OrderPorgressCard({
  image,
  pizza,
  status,
  table_number,
  quantity
}: Props) {
  return (
    <Container>
      <Image source={image} />

      <Name>{pizza}</Name>

      <Description>
        Mesa: {table_number} • Qnt: {quantity}
      </Description>

    
      <StatusContainer status={status}>
        <StatusLabel status={status}>{status}</StatusLabel>
      </StatusContainer>
    </Container>
  )
}