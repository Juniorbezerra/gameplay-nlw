import React from 'react'
import { theme } from '../../global/styles/theme';
import {Feather} from '@expo/vector-icons'

import { ButtonBack, Container, ContentAction, Title} from './styles';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';


interface Props{
  title: string;
  action?: React.ReactNode;
}

export function Header({title, action}:Props) {

  const navigation = useNavigation();

  const {secondary40, secondary100, heading } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container colors={[secondary100, secondary40 ]}>
      <ButtonBack onPress={handleGoBack}>
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </ButtonBack>
      <Title>
        {title}
      </Title>
      {action ?  
        <ContentAction>
          { action }
        </ContentAction>
        :
        <View style={{width:24}}/>
      }
    </Container>
  )
}
