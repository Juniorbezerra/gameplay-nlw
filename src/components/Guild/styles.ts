import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
`; 

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 20px;
`;

export const ContentTitle = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const Type = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;