import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`;

export const Form = styled.View`
  padding: 0px 24px;
  margin-top: 32px;
`;

export const Select = styled.View`
    flex-direction: row;
    width: 100%;
    height: 68px;
    border-color: ${theme.colors.secondary50};
    border-width: 1px;
    border-radius: 8px;
    align-items: center;   
    padding-right: 25px;
    overflow: hidden;   
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${theme.colors.secondary40};
  border-color: ${theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
`;

export const ContentField = styled.View``;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;

export const CaracteresLimit = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 13px;
  color: ${theme.colors.highlight};
`;

export const Footer = styled.View`
  margin-top: 56px;
  margin-bottom: 25px;
`;