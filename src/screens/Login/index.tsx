import React from "react";
import { KeyboardAvoidingView, Platform, alert } from 'react-native';
import brandImg from '../../assets/images/brand.png'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"

import {
  Container,
  Nav,
  Title,
  Image,
  ForgotPasswordButton,
  ForgotPasswordLabel
} from './styles';
import { useNavigation } from "@react-navigation/native";




export function Login(){
  
  const navigation = useNavigation()


  function handleSignIn() {
    navigation.navigate('orderPress')
    console.log(handleSignIn)
  }

  

  




  return( 
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Nav>
        <Image source={brandImg} />

        <Title>Login</Title>

        <Input
         placeholder="E-mail"
         type="secondary"
         autoCorrect={false}
         autoCapitalize="none"
         />
        <Input
         placeholder="Senha"
         type="secondary"
         secureTextEntry
        />

        <ForgotPasswordButton>
          <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
        </ForgotPasswordButton>

        <Button
            title="Entrar"
            onPress={handleSignIn}
          />

        </Nav>
      </KeyboardAvoidingView>
    </Container>
  )
}