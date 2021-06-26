import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";


export const Container = styled(RectButton)`
  background-color: ${theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;