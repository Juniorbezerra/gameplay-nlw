import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import * as Linking from 'expo-linking';
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { Banner,Subtitle,Title, BannerContent, ContentButton } from "./styles";

import bannerImg from '../../assets/banner.png';
import { ListHeader } from "../../components/ListHeader";
import { MemberItem, MemberProps } from "../../components/MemberItem";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/AppointmentItem";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import { Platform, Share, Alert } from "react-native";

interface Params {
  guildSelected: AppointmentProps
}

interface GuildWidget {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}


export function AppointmentDetails() {

  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  async function fecthGuildWidget() {
    try{
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    }catch{
      Alert.alert('Verifique as configurações do servidor. Será que widget está habilitado?')
    }finally{
      setLoading(false);
    }
    
  }

  function handleShareInvatation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  useEffect(() => {
    fecthGuildWidget();
  }, [])

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  return(
    <Background>
        <Header
          title="Detalhes"
          action={
            guildSelected.guild.owner &&
            <BorderlessButton onPress={handleShareInvatation}>
              <Fontisto
                name='share'
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          }/>
          <Banner resizeMode="stretch"source={bannerImg}>
            <BannerContent>
              <Title>
                {guildSelected.guild.name}
              </Title>
              <Subtitle>
                {guildSelected.description}
              </Subtitle>
            </BannerContent>
          </Banner>

          {
            loading ? <Load/> :
            <>
                <ListHeader
                title="Jogadores"
                subtitle={`Total ${widget.members.length}`}/>

              <FlatList
                style={{ marginLeft: 24, marginTop: 27}}
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <MemberItem data={item}/>
                )}
                ItemSeparatorComponent={()=> <ListDivider isCentered/>}
              />
            </>

          }

          {guildSelected.guild.owner &&
            <ContentButton>
              <ButtonIcon onPress={handleOpenGuild} title="Entrar na partida"/>
            </ContentButton>
          }
    </Background>
  )
  
}