import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { Background, IconCheck, Container, Content,Title } from "./styles";
import { LinearGradient} from 'expo-linear-gradient';

interface Props extends RectButtonProps{
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

export function CategoryItem({title,icon: Icon,checked = false, hasCheckBox=true, ...rest}:Props) {

  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <Container {...rest}>
      <Background colors={[secondary50,secondary70]}>
        <Content colors={[checked ? secondary75 : secondary50, secondary40]} checked={checked}>
          {
            hasCheckBox &&
            <IconCheck checked={checked}/>
          }
          <Icon width={48} height={48}/>
          <Title>{title}</Title>
        </Content>
      </Background>
    </Container>
  )
  
}