import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Input = styled.TextInput`
  width: 100%;
  height: 95px;
  background-color: ${theme.colors.secondary40};
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  border-radius: 8px;
  font-size: 13px;
  margin-right: 4px;
  border-color: ${theme.colors.secondary50};
  border-width: 1px;
  padding: 16px;
`;