import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";


export interface PropsChecked {
  checked: boolean
}

export const Container = styled(RectButton)``;

export const Background = styled(LinearGradient)`
    width: 104px;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 8px;
`;

export const Content = styled(LinearGradient)<PropsChecked>`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  opacity: ${props => props.checked ? 1 : 0.5};
`;

export const IconCheck = styled.View<PropsChecked>`
  position: absolute;
  top: 7px;
  right: 7px;
  width: ${props => props.checked ? '10px' : '12px'};
  height: ${props => props.checked ?'10px' : '12px'};
  border-width: ${props => props.checked ? '0px' : '2px'};
  border-color: ${theme.colors.secondary50};
  background-color: ${props => props.checked ? theme.colors.primary : theme.colors.secondary100};
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  margin-top: 19px;
`;

