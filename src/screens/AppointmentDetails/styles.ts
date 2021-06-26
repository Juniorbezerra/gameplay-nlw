import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Banner = styled.ImageBackground`
  height: 234px;
  width: 100%;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0px 24px;
  margin-bottom: 25px;
`


export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  line-height: 21px;
`;

export const ContentButton = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()};
`;