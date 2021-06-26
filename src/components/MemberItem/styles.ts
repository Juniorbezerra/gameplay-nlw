import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";


interface Props {
  IsOnline: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const NameStatus = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View<Props>`
  background-color: ${props => props.IsOnline ? theme.colors.on : theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;