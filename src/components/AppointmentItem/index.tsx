import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { categories } from "../../utils/categories";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { GuildIcon } from "../GuildIcon";
import { GuildProps } from "../Guild";

import { Category, Container, Content, Date, DateInfo, Footer, Header, Player, PlayerInfo, Title, GuildIconContainer } from "./styles";

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
} 

export function AppointmentItem({ data, ...rest }: Props) {

  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on,secondary50,secondary70 } = theme.colors;

  return(
    <RectButton {...rest}>
      <Container >
        <GuildIconContainer colors={[secondary50,secondary70]}>
          <GuildIcon iconId={data.guild.icon} guildId={data.guild.id}  />
        </GuildIconContainer>
        <Content>
          <Header>
            <Title>
              {data.guild.name}
            </Title>
            <Category>
              {category.title}
            </Category>
            </Header>
            <Footer>
              <DateInfo>
                <CalendarSvg/>
                <Date>
                  {
                    data.date
                  }
                </Date>
              </DateInfo>
              <PlayerInfo>
              <PlayerSvg fill={ owner ? primary : on}/>
                <Player isOwner={owner}>
                  {owner ? 'Anfitrião' : 'Visitante'}
                </Player>
              </PlayerInfo>
            </Footer>
        </Content>
      </Container>
 </RectButton>
 )
}