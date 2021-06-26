import React  from 'react'
import { Container,Icon,IconWrapper,Title } from './styles'
import DiscordImg from '../../assets/discord.png';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
  title: string
}

export function ButtonIcon({title, ...rest}: Props) {
    return (
      <Container {...rest}>
        <IconWrapper>
          <Icon source={DiscordImg}/>
        </IconWrapper>
        <Title>{title}</Title>
      </Container>
    )
}
