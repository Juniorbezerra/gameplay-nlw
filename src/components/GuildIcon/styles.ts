import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  width: 62px;
  height: 66px;
  border-radius: 8px;
  background-color: ${theme.colors.discord};
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 62px;
  height: 66px;
`