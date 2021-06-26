import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
`;

export const AvatarImg = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 8px;
`;