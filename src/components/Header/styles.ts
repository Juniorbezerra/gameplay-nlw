import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding: ${26 + getStatusBarHeight()}px 24px 0px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonBack = styled(BorderlessButton)``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.highlight};
`;

export const ContentAction = styled.View``;