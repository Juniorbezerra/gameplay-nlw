import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 24px;
  margin-top: 27px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;