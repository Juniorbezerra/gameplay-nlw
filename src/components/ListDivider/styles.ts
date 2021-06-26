import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

interface Props {
  isCentered?: boolean;
}

export const Container = styled.View<Props>`
  width: 78%;
  height: 1px;
  background-color: ${theme.colors.secondary40};
  align-self: flex-end;
  margin-top: ${props => props.isCentered ? '12px' : '2px' };
  margin-bottom: ${props => props.isCentered ? '12px' : '31px'};
`