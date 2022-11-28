import React from 'react';
import { FlatList } from 'react-native';
import { OrderPorgressCard } from '../../components/OrderProgressCard';
import { ItemSeparator } from '../../components/ItemSeparator';

import { 
  Container,
  Header,
  Title,
  Flex,
} from './styles';

export function OrderProgress(){ 
    return(
        <Container>
          <Header>
            <Title>Pedidos feitos</Title>
          </Header>
        
          <Flex>
          <OrderPorgressCard 
          status='Pronto' 
          id='1' 
          table_number='1'
          quantity='1'
          pizza='4 Queijo'/>
          
          <OrderPorgressCard 
          status='Preparando' 
          id='1' 
          table_number='1'
          quantity='1'
          pizza='4 Queijo'/>

          <ItemSeparator/>
          
          <OrderPorgressCard 
          status='Entregue' 
          id='1' 
          table_number='1'
          quantity='1'
          pizza='4 Queijo'/>
          
          </Flex>
            
          
        </Container>
    )
}
