import React from 'react';
import { Image , Container} from './styles';
import DiscordSvg from '../../assets/discord.svg';

interface Props {
  guildId: string;
  iconId: string | null;
}

const {CDN_IMAGE} = process.env;

export function GuildIcon({guildId,iconId}: Props) {

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Container>
      {
        iconId ?
        <Image 
          source={{ uri }}
          resizeMode="cover"    
        />
        :
        <DiscordSvg width={40} height={40}/>

      }
    </Container>
  )

}