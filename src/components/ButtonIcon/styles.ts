import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

export const Container = styled(RectButton)`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 56px;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${theme.colors.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.title500};
  font-size: 15px;
  line-height: 25px;
  color: ${theme.colors.heading};
  text-align: center;
`;