import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { Container } from "./styles";
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest}:RectButtonProps) {

  return(
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </Container>
  )
  
}