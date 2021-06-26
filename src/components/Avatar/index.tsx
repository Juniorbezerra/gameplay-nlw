import React from 'react';
import { theme } from '../../global/styles/theme';
import { AvatarImg, Container } from './styles';

interface Props{
  urlImage: string
}

export function Avatar({urlImage}:Props){

  const {secondary50,secondary70} = theme.colors

  return(
    <Container colors={[secondary50,secondary70]}>
      <AvatarImg source={{uri: urlImage}}/>
    </Container>)
}