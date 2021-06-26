import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Guild,GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load/';
import { api } from '../../services/api';

import { Container } from './styles';

interface Props {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){

  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   async function fetchGuilds() {
     const response = await api.get('/users/@me/guilds');
     
      setGuilds(response.data);
      setLoading(false);
   }

   fetchGuilds();

  }, [])

  return (
    <Container>
      {
        loading ? <Load /> :
        <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}
        contentContainerStyle={{paddingBottom: 68, paddingTop:103}}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={{width: '100%'}}
      />
      }
      
    </Container>
  );
}