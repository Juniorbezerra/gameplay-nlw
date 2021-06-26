import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Header = styled.View`
  width: 100%;
  padding: 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${26 + getStatusBarHeight()}px;
  margin-bottom: 42px;
`;