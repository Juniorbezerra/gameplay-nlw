import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: -40px;
  padding: 0px 50px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
  text-align: center;
  line-height: 25px;
  font-size: 15px;
  margin-bottom: 48px;
`;