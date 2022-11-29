import React from 'react';
import { OrderPorgressCard } from '../../components/OrderProgressCard';
import { ItemSeparator } from '../../components/ItemSeparator';

import queijo from '../../assets/images/queijo.png'
import margherita from '../../assets/images/margherita.png'
import portuguesa from '../../assets/images/portuguesa.png'

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
          image={queijo}
          table_number='01'
          quantity='1'
          pizza='4 Queijo'/>
          
          <OrderPorgressCard 
          status='Preparando'
          image={portuguesa}
          table_number='01'
          quantity='1'
          pizza='Gauchesca'/>

          <ItemSeparator/>
          
          <OrderPorgressCard 
          status='Entregue'  
          image={margherita}
          table_number='01'
          quantity='1'
          pizza='Margherita'/>
          
          </Flex>
            
          
        </Container>
    )
}
