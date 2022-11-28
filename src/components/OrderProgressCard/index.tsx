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
  Flex,
} from './styles';

interface Props{
  id: string;
  pizza: string;

  status: StatusTypesProps;
  table_number: string;
  quantity: string;
}


export function OrderPorgressCard({
  id,
  pizza,
  status,
  table_number,
  quantity
}: Props) {
  return (
    <Container>
      <Image source={queijo} />

      <Name>{pizza}</Name>

      <Description>
        Mesa: {table_number} - Qnt: {quantity}
      </Description>

    
      <StatusContainer status={status}>
        <StatusLabel status={status}>{status}</StatusLabel>
      </StatusContainer>
    </Container>
  )
}