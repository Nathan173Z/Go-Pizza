import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Alert, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {InputHome} from '../../components/InputHome'

import emoji from '../../assets/images/happy.png'

import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Title,
  MenuHeader,
  MenuItemsNumber,
} from './styles';

export function Menu() {

    const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={emoji}/>
          <GreetingText>Olá, Garçom</GreetingText>
        </Greeting>

      <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>
      </Header>

      <InputHome/>


      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemsNumber>32 pizzas</MenuItemsNumber>
      </MenuHeader>

    </Container>
  )
}