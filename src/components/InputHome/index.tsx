import React from "react";
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, Input, Button, InputArea, ButtonClear } from './styles';


export function InputHome() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <InputArea>
        <Input placeholder="pesquisar..." />

        <ButtonClear >
          <Feather name="x" size={16} />
        </ButtonClear>
      </InputArea>

      <Button >
        <Feather name="search" size={16} color={COLORS.TITLE} />
      </Button>
    </Container>
  )
}