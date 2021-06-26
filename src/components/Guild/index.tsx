import React from 'react';
import { TouchableOpacityProps} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Content, ContentTitle, Title, Type } from './styles';
import { theme } from '../../global/styles/theme';

import { GuildIcon } from '../GuildIcon';

export interface GuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface Props extends TouchableOpacityProps {
  data: GuildProps;
}

export function Guild({data, ...rest}: Props){
  return (
    <Container 
      activeOpacity={0.7} 
      {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon}/>
      <Content>
        <ContentTitle>
          <Title>{data.name}</Title>
          <Type>
            {
              data.owner ? 'Administrador' : 'Convidado'
            }
          </Type>
        </ContentTitle>
      </Content>
      <Feather 
        name="chevron-right"
        color={theme.colors.heading}
        size={24}        
      />
    </Container>
  )
}