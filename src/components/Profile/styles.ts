import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View``;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  font-size: 24px;
  margin-right: 6px;
`;

export const Username = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 24px;
`;

export const Message = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;