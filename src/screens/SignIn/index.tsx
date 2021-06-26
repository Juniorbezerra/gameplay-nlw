import React from "react";
import IlustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from '../../components/Background';
import {Image, Container, Content, Title, Subtitle} from './styles';
import { useAuth } from "../../hooks/auth";
import { ActivityIndicator, Alert } from "react-native";
import { theme } from "../../global/styles/theme";

export function SignIn(){
  
  const {loading,signIn} = useAuth();

  async function handleSignIn() {
    try{
      await signIn();
    }catch(error){
      Alert.alert(error)
    }
  }

  return(
    <Background>
      <Container>
        <Image source={IlustrationImg} resizeMode='stretch'/>
        <Content>
          <Title>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Title>
          <Subtitle>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Subtitle>
          {
            loading ? <ActivityIndicator size={24} color={theme.colors.primary}/> :
            <ButtonIcon onPress={handleSignIn} title="Entrar com Discord"/>
          }
          
        </Content>
      </Container>
    </Background>
  )
}